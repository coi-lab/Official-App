const mongoose = require('mongoose')
const url ='mongodb+srv://New_User1:realtime_comment@cluster0.yk07k.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(url,{ useNewUrlParser: true, useCreateIndex: true })

const connection =  mongoose.connection


try {
    connection.once('open',function(){
        console.log("DB connected..")
    })
    
} catch (error) {
    console.log("Connecation failed",error)
}