import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	emailid: {
		type: String
	}
}, {
		timestamps: true
	});

const AdminModel = mongoose.model('admins', adminSchema)

export default AdminModel