const mongoose = require('mongoose')

const initJestMongoose = async function(dbName){
    const url = process.env.MONGO_URL;
    if(url == null) {
      throw new Error("MONGO_URL was not set");
    }
    return mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName
        }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
}

const closeJestMongoose = async function(){
    await mongoose.connection.close();
}

module.exports={
    initJestMongoose,
    closeJestMongoose
}