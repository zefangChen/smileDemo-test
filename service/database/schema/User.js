const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcryptjs = require('bcryptjs')
const SALT_WORK_FACTOR = 10

//创建user的schema
const userSchema = new Schema({
    UserId: {type:ObjectId},
    userName: {unique: true,type:String},
    password: String,
    createAt: {type:Date,default:Date.now()}
})
userSchema.pre('save',function (next) {
    bcryptjs.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcryptjs.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        })
    })
})

//发布模型
mongoose.model('User',userSchema)
