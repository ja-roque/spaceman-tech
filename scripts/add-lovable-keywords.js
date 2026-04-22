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

// Ad group from the nocode campaign
const adGroupResourceName = "customers/7496737697/adGroups/198295303600";

async function run() {
  const keywords = [
    "lovable alternative",
    "lovable developer",
    "lovable ai app builder",
    "lovable app development",
    "hire lovable developer",
  ];

  const result = await customer.adGroupCriteria.create(
    keywords.map((kw) => ({
      ad_group: adGroupResourceName,
      status: 2, // ENABLED
      keyword: { text: kw, match_type: 3 }, // PHRASE
    }))
  );

  console.log("Added keywords:");
  result.results.forEach((r, i) => console.log(`  ${keywords[i]} -> ${r.resource_name}`));
}

run().catch((e) => console.error(e.message || JSON.stringify(e, null, 2)));
