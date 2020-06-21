const express = require("express");
const router = express.Router();
const Farm = require("./model");
const key = require("uuidv1");

router.post("/addfarm", (req, res) => {
	const {farmkey, owner, crop, district, address, email, facebook} = req.body
	const farms = new Farm({
		farmkey: farmkey,
		owner: owner,
		crop: crop,
		district: district,
		address: address,
		email: email,
		facebook: facebook
	})
	farms.save((err, farms) => {
		if(err){
			return res.status(400).json({
				err: err
			})
		}
		res.json({
			farmkey: farms.farmkey,
			owner: farms.owner,
			district: farms.district,
			crop: farms.crop
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

router.get("/getfarms", (req, res) => {
	Farm.find(
		(err, famrs) => {
			if(err){
				return res.status(400).json({
					err: "Oops!"
				})
			} res.json(famrs)
		}
	)
})

module.exports = router;