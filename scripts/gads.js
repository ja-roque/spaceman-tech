#!/usr/bin/env node
/**
 * gads.js — Google Ads CLI for Spaceman Tech
 *
 * Usage:
 *   node gads.js <customer_id> <command> [args]
 *
 * Commands:
 *   campaigns                        List all campaigns and status
 *   keywords <campaign_id>           List keywords for a campaign
 *   search-terms <campaign_id>       List search terms that triggered ads
 *   add-negatives <campaign_id> [kw1 kw2 ...]   Add negative keywords to a campaign
 *   pause-keywords <campaign_id> [kw_id1 ...]   Pause specific keywords by ID
 *   enable-campaign <campaign_id>    Enable a paused campaign
 *   pause-campaign <campaign_id>     Pause an active campaign
 *
 * Examples:
 *   node gads.js 7496737697 campaigns
 *   node gads.js 7496737697 search-terms 23771650519
 *   node gads.js 7496737697 add-negatives 23771650519 "akool" "grok" "descript"
 */

const { GoogleAdsApi, enums } = require("google-ads-api");

const MCC_ID = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;
const CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET;
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const REFRESH_TOKEN = process.env.GOOGLE_ADS_REFRESH_TOKEN;

const [,, customerId, command, ...args] = process.argv;

if (!customerId || !command) {
  console.log("Usage: node gads.js <customer_id> <command> [args]");
  console.log("Commands: campaigns, keywords, search-terms, add-negatives, pause-keywords, enable-campaign, pause-campaign");
  process.exit(1);
}

const client = new GoogleAdsApi({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, developer_token: DEVELOPER_TOKEN });
const customer = client.Customer({ customer_id: customerId, login_customer_id: MCC_ID, refresh_token: REFRESH_TOKEN });

const STATUS_MAP = { 1: "UNSPECIFIED", 2: "ENABLED", 3: "PAUSED", 4: "REMOVED" };

async function run() {
  switch (command) {

    case "campaigns": {
      const rows = await customer.query(
        "SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type FROM campaign"
      );
      console.log("\nCampaigns:\n");
      rows.forEach(r => {
        const c = r.campaign;
        console.log(`  [${c.id}] ${STATUS_MAP[c.status] || c.status}  ${c.name}`);
      });
      break;
    }

    case "keywords": {
      const [campaignId] = args;
      if (!campaignId) { console.error("Provide a campaign_id"); process.exit(1); }
      const rows = await customer.query(
        `SELECT ad_group_criterion.criterion_id, ad_group_criterion.keyword.text,
         ad_group_criterion.keyword.match_type, ad_group_criterion.status
         FROM ad_group_criterion
         WHERE campaign.id = ${campaignId}
         AND ad_group_criterion.type = KEYWORD`
      );
      console.log("\nKeywords:\n");
      rows.forEach(r => {
        const k = r.ad_group_criterion;
        console.log(`  [${k.criterion_id}] ${STATUS_MAP[k.status] || k.status}  "${k.keyword.text}"  (${k.keyword.match_type})`);
      });
      break;
    }

    case "search-terms": {
      const [campaignId] = args;
      if (!campaignId) { console.error("Provide a campaign_id"); process.exit(1); }
      const rows = await customer.query(
        `SELECT search_term_view.search_term, metrics.clicks, metrics.cost_micros, metrics.impressions
         FROM search_term_view
         WHERE campaign.id = ${campaignId}
         AND metrics.impressions > 0
         ORDER BY metrics.clicks DESC`
      );
      console.log("\nSearch Terms:\n");
      rows.forEach(r => {
        const cost = (r.metrics.cost_micros / 1_000_000).toFixed(2);
        console.log(`  "${r.search_term_view.search_term}"  clicks: ${r.metrics.clicks}  cost: $${cost}  impressions: ${r.metrics.impressions}`);
      });
      break;
    }

    case "add-negatives": {
      const [campaignId, ...keywords] = args;
      if (!campaignId || keywords.length === 0) { console.error("Provide campaign_id and at least one keyword"); process.exit(1); }

      const negatives = keywords.map(kw => ({
        campaign: `customers/${customerId}/campaigns/${campaignId}`,
        keyword: { text: kw, match_type: "BROAD" },
      }));

      await customer.campaignCriteria.create(negatives);
      console.log(`\nAdded ${keywords.length} negative keyword(s) to campaign ${campaignId}:`);
      keywords.forEach(kw => console.log(`  - "${kw}"`));
      break;
    }

    case "pause-keywords": {
      const [campaignId, ...criterionIds] = args;
      if (!campaignId || criterionIds.length === 0) { console.error("Provide campaign_id and criterion IDs"); process.exit(1); }

      // Get ad group IDs for those criteria
      const rows = await customer.query(
        `SELECT ad_group_criterion.criterion_id, ad_group.id
         FROM ad_group_criterion
         WHERE campaign.id = ${campaignId}
         AND ad_group_criterion.criterion_id IN (${criterionIds.join(",")})`
      );

      const updates = rows.map(r => ({
        resource_name: `customers/${customerId}/adGroupCriteria/${r.ad_group.id}~${r.ad_group_criterion.criterion_id}`,
        status: "PAUSED",
      }));

      await customer.adGroupCriteria.update(updates);
      console.log(`\nPaused ${updates.length} keyword(s).`);
      break;
    }

    case "enable-campaign": {
      const [campaignId] = args;
      if (!campaignId) { console.error("Provide a campaign_id"); process.exit(1); }
      await customer.campaigns.update([{ resource_name: `customers/${customerId}/campaigns/${campaignId}`, status: "ENABLED" }]);
      console.log(`\nCampaign ${campaignId} enabled.`);
      break;
    }

    case "pause-campaign": {
      const [campaignId] = args;
      if (!campaignId) { console.error("Provide a campaign_id"); process.exit(1); }
      await customer.campaigns.update([{ resource_name: `customers/${customerId}/campaigns/${campaignId}`, status: "PAUSED" }]);
      console.log(`\nCampaign ${campaignId} paused.`);
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
}

run().catch(e => {
  console.error("Error:", e.message || e);
  process.exit(1);
});
