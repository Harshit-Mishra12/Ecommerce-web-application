var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
     
     totalProducts:{type:Number,required:true}
});

module.exports=mongoose.model('TotalProduct',schema);