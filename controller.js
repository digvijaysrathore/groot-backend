const express = require("express");
const router = express.Router();
const Farm = require("./model");
const key = require("uuidv1");

router.post("/addfarm", (req, res) => {
	const farm = new Farm(req.body)
	farm.save((err, farm) => {
		if(err){
			return res.status(400).json({
				err: err
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