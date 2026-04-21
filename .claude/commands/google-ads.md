# /google-ads

Manage Google Ads accounts, campaigns, and keywords via the API.

## Process (always follow this order)

1. **List accounts** — run the node snippet below to fetch all sub-accounts under the MCC and present them to the user
2. **Confirm account** — ask Javier which account to work on (show name + ID). Store the chosen customer_id for all subsequent calls in this session
3. **Take action** — run whatever queries or mutations are needed using the snippets below as a base

## Working directory

Always run node commands from `/home/jarbisrog/spaceman-tech` where google-ads-api is installed.

## Base snippet (reuse for every call)

```js
const { GoogleAdsApi } = require("google-ads-api");
const client = new GoogleAdsApi({
  client_id:       process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret:   process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});
const customer = client.Customer({
  customer_id:       "CUSTOMER_ID",       // chosen sub-account
  login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
  refresh_token:     process.env.GOOGLE_ADS_REFRESH_TOKEN,
});
```

## Step 1 — List all accounts under MCC

```bash
bash -l -c 'cd /home/jarbisrog/spaceman-tech && node -e "
const { GoogleAdsApi } = require(\"google-ads-api\");
const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});
const mcc = client.Customer({
  customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
  login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});
mcc.query(\"SELECT customer_client.id, customer_client.descriptive_name, customer_client.level FROM customer_client WHERE customer_client.level > 0\")
  .then(r => r.forEach(row => console.log(row.customer_client.id, row.customer_client.descriptive_name)))
  .catch(e => console.error(e.message));
"'
```

## Common queries (replace CUSTOMER_ID with chosen account)

### List campaigns
```
SELECT campaign.id, campaign.name, campaign.status FROM campaign
```

### List keywords for a campaign
```
SELECT ad_group_criterion.criterion_id, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status FROM ad_group_criterion WHERE campaign.id = CAMPAIGN_ID AND ad_group_criterion.type = KEYWORD
```

### Search terms report
```
SELECT search_term_view.search_term, metrics.clicks, metrics.cost_micros, metrics.impressions FROM search_term_view WHERE campaign.id = CAMPAIGN_ID AND metrics.impressions > 0 ORDER BY metrics.clicks DESC
```

### Add negative keywords to a campaign
```js
await customer.campaignCriteria.create([
  {
    campaign: `customers/CUSTOMER_ID/campaigns/CAMPAIGN_ID`,
    keyword: { text: "keyword here", match_type: "BROAD" },
    negative: true,
  }
]);
```

### Pause a campaign
```js
await customer.campaigns.update([{
  resource_name: `customers/CUSTOMER_ID/campaigns/CAMPAIGN_ID`,
  status: "PAUSED",
}]);
```

### Enable a campaign
```js
await customer.campaigns.update([{
  resource_name: `customers/CUSTOMER_ID/campaigns/CAMPAIGN_ID`,
  status: "ENABLED",
}]);
```

### Pause a keyword
```js
await customer.adGroupCriteria.update([{
  resource_name: `customers/CUSTOMER_ID/adGroupCriteria/AD_GROUP_ID~CRITERION_ID`,
  status: "PAUSED",
}]);
```

## Notes
- Always confirm the account before making any changes
- Destructive changes (pausing campaigns, removing keywords) require explicit confirmation from Javier before executing
- All env vars are in ~/.bash_profile — use `bash -l -c` to load them
