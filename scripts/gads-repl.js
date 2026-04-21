/**
 * Google Ads interactive REPL
 * Usage: node -e "$(cat scripts/gads-repl.js)" --experimental-repl-await
 *   or:  node --experimental-repl-await scripts/gads-repl.js
 *
 * Inside the REPL, `customer` and `client` are ready to use.
 * Example:
 *   await customer.query("SELECT campaign.id, campaign.name FROM campaign")
 */

const repl = require("repl");
const { GoogleAdsApi } = require("google-ads-api");

const MCC_ID       = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;
const CUSTOMER_ID  = process.env.GOOGLE_ADS_CUSTOMER_ID;

const client = new GoogleAdsApi({
  client_id:        process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret:    process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token:  process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

function getCustomer(customerId = CUSTOMER_ID) {
  return client.Customer({
    customer_id:       customerId,
    login_customer_id: MCC_ID,
    refresh_token:     process.env.GOOGLE_ADS_REFRESH_TOKEN,
  });
}

const customer = getCustomer();

console.log(`\nGoogle Ads REPL — customer ${CUSTOMER_ID} via MCC ${MCC_ID}`);
console.log("Available: client, customer, getCustomer(id)");
console.log("Example:   await customer.query(\"SELECT campaign.id, campaign.name FROM campaign\")\n");

const r = repl.start({ prompt: "gads> ", useGlobal: false });
r.context.client = client;
r.context.customer = customer;
r.context.getCustomer = getCustomer;
