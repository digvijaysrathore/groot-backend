const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmSchema = new Schema({
	farmkey: {
		type: String,
		required: true,
		unique: true
	},
	userkey: {
		type: String,
		required: true
	},
	nick: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	crop: {
		type: String,
		required: true
	},
	district: {
		type: String,
		required: true
	},
	address: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	facebook: {
		type: String
	},
	images: []
}, {timestamps: true});

module.exports = mongoose.model("Farm", farmSchema);