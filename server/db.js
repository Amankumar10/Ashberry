const mongoose = require('mongoose');


//  const mongoAt = "mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const mongoURI = "mongodb://localhost:27017/ashberry?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoAT1 = "mongodb+srv://aman:Kumar@123@cluster0.veuzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoAT2 = "mongodb+srv://admin:HaXNPtGMVYlwcaeI@cluster0.ffove.mongodb.net/whatsappdb?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoAT2,{
        dbName: 'Ashberry',
    }).then(()=> {
        console.log("connnected to MongoDB Successfully")
    });

}

module.exports = connectToMongo;




