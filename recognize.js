export default async function handler(req, res) {
  res.status(200).json({
    name: "Placeholder Recognition",
    recentSoldPrice: 42,
    currency: "USD"
  });
}