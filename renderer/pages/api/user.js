import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("user-collection");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myUser = await db.collection("Users").insertOne(bodyObject);
      res.json(myUser.ops[0]);
      break;
    case "GET":
      const allUsers = await db.collection("Users").find({}).toArray();
      res.json({ status: 200, data: allUsers });
      break;
  }
}
