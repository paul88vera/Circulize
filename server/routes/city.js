const router = expess()

// Get a list of cities
router.get("/", async (req, res) => {
  let collection = await db.collection("city");
  let results = await collection.find({});
  console.log(results);
  res.send(results).status(200);
});
