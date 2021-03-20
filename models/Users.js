const {Schema, model} = require('mongoose')
const schema = new Schema({
	user_id:{type:String, required:true, unique: true},
	username:{type:String, required:false, unique: true},
	name:{type:String, required:true},
	region:{type:String, required:true},
	phone:{type:String, required:true},
	work:{type:String, required:true},
	message_id:{type:String, required:true},
	admin:{type:Boolean, required:false}
})

module.exports = model('User', schema)