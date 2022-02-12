var express = require("express");
var router = express.Router();
const { dbUrl, mongodb, MongoClient, dbName } = require("../dbConfig");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", async function (req, res) {
	const client = await MongoClient.connect(dbUrl);
	try {
		const db = await client.db(dbName);
		let business = await db.collection("business").find().toArray();
		res.json({
			statusCode: 200,
			message: "Business fetched Successfully",
			data: business,
		});
	} catch (error) {
		console.log(error);
		res.json({ statusCode: 500, message: "Internal Server Error!" });
	} finally {
		client.close();
	}
});

router.get("/:id", async function (req, res) {
	const client = await MongoClient.connect(dbUrl);
	try {
		const db = await client.db(dbName);
		let business = await db
			.collection("business")
			.findOne({ _id: mongodb.ObjectId(req.params.id) });
		res.json({
			statusCode: 200,
			message: "Business fetched Successfully",
			data: business,
		});
	} catch (error) {
		console.log(error);
		res.json({ statusCode: 500, message: "Internal Server Error!" });
	} finally {
		client.close();
	}
});

router.post("/", async (req, res) => {
	const client = await MongoClient.connect(dbUrl);
	try {
		const db = await client.db(dbName);
		let business = await db
			.collection("business")
			.findOne({ email: req.body.email });
		if (business) {
			res.json({ statusCode: 400, message: "Business Already Exists!" });
		} else {
			const business = await db.collection("business").insertOne(req.body);
			res.json({
				statusCode: 200,
				message: "Business Added successfully!",
				data: business,
			});
		}
	} catch (error) {
		console.log(error);
		res.json({ statusCode: 500, message: "Internal Server Error!" });
	} finally {
		client.close();
	}
});

router.put("/:id", async (req, res) => {
	const client = await MongoClient.connect(dbUrl);
	try {
		const db = await client.db(dbName);

		let business = await db
			.collection("business")
			.findOneAndReplace({ _id: mongodb.ObjectId(req.params.id) }, req.body);

		// {
		// 	businessName: req.body.businessName,
		// 	email: req.body.email,
		// 	mobile: req.body.mobile,
		// 	address: req.body.address,
		// 	city: req.body.city,
		// 	state: req.body.state,
		// 	pincode: req.body.pincode,
		//}

		res.json({
			statusCode: 200,
			message: "Buiness Edited Successfully!",
			data: business,
		});
	} catch (error) {
		console.log(error);
		res.json({ statusCode: 500, message: "Internal Server Error!" });
	} finally {
		client.close();
	}
});

router.delete("/:id", async function (req, res) {
	const client = await MongoClient.connect(dbUrl);
	try {
		const db = await client.db(dbName);
		let business = await db
			.collection("business")
			.deleteOne({ _id: mongodb.ObjectId(req.params.id) });
		res.json({
			statusCode: 200,
			message: "Business deleted Successfully",
			data: business,
		});
	} catch (error) {
		console.log(error);
		res.json({ statusCode: 500, message: "Internal Server Error!" });
	} finally {
		client.close();
	}
});

module.exports = router;
