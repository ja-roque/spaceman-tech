const { GoogleAdsApi } = require("google-ads-api");

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: "7496737697",
  login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

async function run() {
  // Use the budget we already created
  const budgetResourceName = "customers/7496737697/campaignBudgets/15523948959";
  console.log("Using budget:", budgetResourceName);

  // 1. Campaign — paused until reviewed
  const campaignResult = await customer.campaigns.create([{
    name: "spaceman-nocode-alternatives",
    status: 3, // PAUSED
    advertising_channel_type: 2, // SEARCH
    campaign_budget: budgetResourceName,
    target_spend: {},
    contains_eu_political_advertising: 3, // DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING
    network_settings: {
      target_google_search: true,
      target_search_network: false,
      target_content_network: false,
    },
  }]);
  const campaignResourceName = campaignResult.results[0].resource_name;
  console.log("Campaign:", campaignResourceName);

  // 2. Ad group
  const adGroupResult = await customer.adGroups.create([{
    name: "no-code-alternatives",
    campaign: campaignResourceName,
    status: 2, // ENABLED
    type: 2,   // SEARCH_STANDARD
    cpc_bid_micros: 2000000, // $2 default CPC
  }]);
  const adGroupResourceName = adGroupResult.results[0].resource_name;
  console.log("Ad group:", adGroupResourceName);

  // 3. Keywords — phrase match
  const keywords = [
    "flutterflow",
    "flutterflow alternative",
    "flutterflow developer",
    "bubble no code",
    "bubble alternative",
    "no code app builder",
    "no code developer",
    "hire app developer",
    "webflow alternative",
    "build app without code",
    "no code app development",
    "app builder alternative",
  ];

  await customer.adGroupCriteria.create(
    keywords.map(kw => ({
      ad_group: adGroupResourceName,
      status: 2,
      keyword: { text: kw, match_type: 3 }, // PHRASE
    }))
  );
  console.log("Keywords added:", keywords.length);

  // 4. Responsive search ad
  await customer.adGroupAds.create([{
    ad_group: adGroupResourceName,
    status: 2,
    ad: {
      final_urls: ["https://spacemantech.ai/start/done-for-you"],
      responsive_search_ad: {
        headlines: [
          { text: "Hire a Real Developer" },
          { text: "Beyond No-Code Limits" },
          { text: "Custom App Built For You" },
          { text: "When No-Code Is Not Enough" },
          { text: "From $300 Per Month" },
          { text: "We Build What You Imagined" },
          { text: "Real Code, Real Developer" },
          { text: "No More Template Limits" },
          { text: "Done Fighting Your App Builder" },
        ],
        descriptions: [
          { text: "Frustrated with no-code tools? We build exactly what you need. Quote in 24 hours." },
          { text: "Monthly plans from $300. One-time builds from $3,000. Real developers, real results." },
          { text: "Stop fighting your app builder. Tell us what you need and we handle everything." },
        ],
      },
    },
  }]);

  console.log("Ad created.");
  console.log("Done. Campaign is PAUSED — review in dashboard then enable when ready.");
}

run().catch(e => console.error(e.message || JSON.stringify(e, null, 2)));
