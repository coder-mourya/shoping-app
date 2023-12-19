const mongoose = require('mongoose');

const connectDB = async (req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://ajaykumarshakya560:LUSLGH9EeP6k15Qn@shopingapp.zk6ktok.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify:false
        });
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
