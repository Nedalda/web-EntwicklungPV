const  mongoose  =require ("mongoose")
const  schema = mongoose.Schema
const articleschema = new  schema(
    {
        title : String ,
        name : String ,
        age  : Number
    })

    const Article = mongoose.model("Artikel" , articleschema) ;
module.exports = Article
