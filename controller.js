const express = require("express");
const router = express.Router();
const Farm = require("./model");
const key = require("uuidv1");

router.post("/addfarm", (req, res) => {
	const farmkey = key()
	const {userkey, owner, nick, crop, district, address, email, facebook} = req.body
	const farm = new Farm({farmkey, userkey, owner, address, nick, crop, district, email, facebook})
	farm.save((err, farm) => {
		if(err){
			return res.status(400).json({
				err: "Oops!"
			})
		}
		res.json({
			farmkey: farm.farmkey,
			owner: farm.owner,
			district: farm.district,
			crop: farm.crop
		})
	})
});

router.get("/getdistrict/:district", (req, res) => {
	Farm.find(
		{"district": req.params.district},
		(err, farms) => {
			if(err){
				return res.status(400).json({
					err: "Oops!"
				})
			} res.json(farms)
		}
	)
});

module.exports = router;