
const MongoClient = require('mongodb').MongoClient;
const DB_URL = `mongodb://127.0.0.1:27017`;

module.exports = ()=>{
    MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, db)=>{
        if(err){
            console.log("mongo连接失败，原因->", err);
            return
        }
        let dbo = db.db('jobInfo');
        dbo.collection("info"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) {
                return []
            }
            // console.log(result)
            db.close();
            return result
        });
    })
};
