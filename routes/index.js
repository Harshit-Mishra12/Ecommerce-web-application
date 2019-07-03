var express = require('express');
var router=express.Router();
var Cart=require('../models/cart');
//var csrf= require('csurf');
//var passport=require('passport');
//var csrfProtection=csrf();

var Product =require('../models/product');

//router.use(csrfProtection);


router.get("/",function(req,res){

	 if(!req.user){
	// console.log("baaaaaaaaad");
	}
    
		   var successMsg=req.flash('success')[0];
		// res.render("campgrounds.ejs",{campgrounds:campgrounds});

		Product.find({},function(err,allCampgrounds){
          allCampgrounds.sort((a, b) => (a.price < b.price) ? 1 : -1)
		if(err){
		    console.log(err);
		}
		else{
			// console.log(allCampgrounds); 
		   res.render("shop/index.ejs",{campgrounds:allCampgrounds,successMsg:successMsg,noMessages:!successMsg}); 
		}



		});

});
router.post("/check",function(req,res){
      console.log("oooooooooooooooo");
       console.log(req.body.brand);

      console.log(req.body.title);
      var arr=req.body.brand;
      var arr2=req.body.title;
   console.log(arr[0]);   
 console.log(arr2[0]);
     var flag=0;
     var temp=0;

    console.log(flag);
    	if(arr[0]==null){
    		console.log("flag=1 hia kya")
    	 flag=1;	
    }

    
     	if ( arr2[0]==null) {
     		console.log("temp=2 hia kya");
     		 temp=2;
     	}
    	if (flag==0) {console.log("flag ki value kya hai");}
    


	 var successMsg=req.flash('success')[0];
	  
      if(flag==0  && temp==2)
      {
      	console.log("yahan pahuche??part1");
		 Product.find({brand:req.body.brand},function(err,allCampgrounds){
      // JSON.stringify(allCampgrounds);
  
		if(err){
		    console.log(err);
		}
		else{
			// console.log(allCampgrounds); 
			console.log("yeh kya backchodi hai");
		 res.render("shop/index2.ejs",{campgrounds:allCampgrounds,successMsg:successMsg,noMessages:!successMsg}); 
		    // res.send(allCampgrounds);

		
		}

			});
		}

		 if(flag==1  && temp==0)
      {console.log("yahan pahuche??part2")
  console.log(req.body.title);
		 Product.find({title:req.body.title},function(err,allCampgrounds){
      
  
		if(err){
		    console.log(err);
		}
		else{
		   res.render("shop/index2.ejs",{campgrounds:allCampgrounds,successMsg:successMsg,noMessages:!successMsg}); 
		}

			});
		}
		if(flag==0 && temp==0){
			console.log("yahan pahuche??")
			Product.find({brand:req.body.brand,title:req.body.title},function(err,allCampgrounds){
      
  
		if(err){
		    console.log(err);
		}
		else{
			console.log(allCampgrounds);
			if(allCampgrounds[0]==null){
				  console.log("ismye kuch nahin hai");
		   res.render("shop/index3.ejs");
		} 
		else{
			 res.render("shop/index2.ejs",{campgrounds:allCampgrounds,successMsg:successMsg,noMessages:!successMsg});
		}
	}

			});

		}
			 if(flag==1  && temp==2)
      {console.log("yahan pahuche??part3")
  console.log(req.body.title);
		 Product.find({},function(err,allCampgrounds){
      
  
		if(err){
		    console.log(err);
		}
		else{
		   res.render("shop/index2.ejs",{campgrounds:allCampgrounds,successMsg:successMsg,noMessages:!successMsg}); 
		}

			});
		}


});



router.put('/add-to-cart/:id',function(req,res,next){
     console.log("add to cart nahin huha kya");
    var productId=req.params.id;
    console.log(productId);
    var cart=new Cart(req.session.cart ? req.session.cart:{});
       
    Product.findById(productId,function(err,product){
         
         if(err){
         	return res.redirect('/');

         }
         cart.add(product, product.id);
         req.session.cart=cart;
         console.log(req.session.cart);
        console.log("total check kro bhaiya ji");
        console.log(cart.totalQty);
         // res.redirect('/check');
          res.send(cart.totalQty+"");

    });
});
router.get('/shopping-cart',function(req,res,next){
   if(!req.user){
		console.log("baaaaaaaaad");
	}
    

   if (!req.session.cart) {
   	return res.render('shop/shopping-cart.ejs',{products:null});
   } 
   var cart = new Cart(req.session.cart);
   var test= cart.generateArray();
   console.log(test);
   res.render('shop/shopping-cart.ejs',{products:cart.generateArray(),totalPrice:cart.totalPrice,checkUser:req.user});

});


module.exports=router;