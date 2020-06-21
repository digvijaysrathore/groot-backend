const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmSchema = new Schema({
	farmkey: {
		type: String,
		required: true,
		unique: true
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
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	facebook: {
		type: String,
		required: true
	}
}, {timestamps: true});

module.exports = mongoose.model("Farm", farmSchema);