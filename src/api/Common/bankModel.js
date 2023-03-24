import mongoose from 'mongoose'

const bankSchema = new mongoose.Schema({
	bankname: {
		type: String
	},
	branchname: {
		type: String
	},
	ifsccode: {
		type: String
	}
}, {
		timestamps: true
	});

const bankModel = mongoose.model('banks', bankSchema)

export default bankModel