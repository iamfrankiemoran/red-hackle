const GBP_API_BASE_URL = "https://businessprofile.googleapis.com/v1"
const GBP_TOKEN_URL = "https://oauth2.googleapis.com/token"

const requiredEnv = [
  "GBP_ACCOUNT_ID",
  "GBP_GOOGLE_CLIENT_ID",
  "GBP_GOOGLE_CLIENT_SECRET",
  "GBP_GOOGLE_REFRESH_TOKEN",
]

const missing = requiredEnv.filter((key) => !process.env[key])

if (missing.length) {
  console.error(`[GBP] Missing required env vars: ${missing.join(", ")}`)
  process.exit(1)
}

const params = new URLSearchParams({
  grant_type: "refresh_token",
  client_id: process.env.GBP_GOOGLE_CLIENT_ID,
  client_secret: process.env.GBP_GOOGLE_CLIENT_SECRET,
  refresh_token: process.env.GBP_GOOGLE_REFRESH_TOKEN,
})

const tokenResponse = await fetch(GBP_TOKEN_URL, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: params.toString(),
})

if (!tokenResponse.ok) {
  console.error(`[GBP] Failed to fetch access token (${tokenResponse.status}).`)
  process.exit(1)
}

const { access_token: accessToken } = await tokenResponse.json()

if (!accessToken) {
  console.error("[GBP] Access token missing in OAuth response.")
  process.exit(1)
}

const locationsUrl = new URL(`${GBP_API_BASE_URL}/accounts/${process.env.GBP_ACCOUNT_ID}/locations`)
locationsUrl.searchParams.set("readMask", "name,title,storefrontAddress")

const locationsResponse = await fetch(locationsUrl.toString(), {
  headers: { Authorization: `Bearer ${accessToken}` },
})

if (!locationsResponse.ok) {
  console.error(`[GBP] Failed to list locations (${locationsResponse.status}).`)
  process.exit(1)
}

const { locations = [] } = await locationsResponse.json()

if (!locations.length) {
  console.log("[GBP] No locations returned for this account.")
  process.exit(0)
}

console.log("GBP locations:")
for (const location of locations) {
  const addressLines = location.storefrontAddress?.addressLines?.join(", ")
  const locality = location.storefrontAddress?.locality
  const address = [addressLines, locality].filter(Boolean).join(", ")
  const title = location.title ? ` - ${location.title}` : ""
  const addressSuffix = address ? ` (${address})` : ""
  console.log(`${location.name}${title}${addressSuffix}`)
}
