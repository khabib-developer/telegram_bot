const {Schema, model} = require('mongoose')
const schema = new Schema({
	user_id:{type:String, required:true, unique: true},
	position: {type:String, required:false},
	userData: {type:Object, required:false},
	ids:{type:Array, required:false},
	identificator:{type:String, required:false},
	language:{type:Boolean, required:true}
})

module.exports = model('State', schema)