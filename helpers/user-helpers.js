const { VERSION } = require('handlebars')
var db= require('../config/connection')
var collection=require('../config/collections')

const bcrypt=require('bcrypt')
const { promise, reject } = require('bcrypt/promises')
const { response } = require('express')


module.exports={
    doSignup: (userData)=>{
        return new Promise(async(resolve, reject)=>{
            userData. Password=await bcrypt.hash(userData. Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{

                resolve(data.insertedId)
                
            })
            
        })
        
    }
}







