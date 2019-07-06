var numLEN=require('../models/totalnum');

mongoose=require("mongoose");
// express = require('express');
// var app = express();

mongoose.connect("mongodb://localhost/shopping3");




// var done=0;
// for (var i = 0; i < products.length; i++) {
//  products[i].save(function(err,result){
//  	done++;
//  	if (done===products.length) {
//  		exit();
//  	}
//  });
// }


// function exit(){
// 	mongoose.disconnect();
// }




let pronum = new numLEN({
  totalProducts:50
})


pronum.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })



     