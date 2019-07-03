var Product=require('../models/product');
mongoose=require("mongoose");
// express = require('express');
// var app = express();

mongoose.connect("mongodb://localhost/shopping2");

var products=[
		new Product({
		imagePath:'1.png',
		title:'Camera',
		description:'Nikon D5300 24.2MP Digital SLR Camera (Black) with AF-P 18-55mm f/ 3.5-5.6g VR Kit Lens, 16GB Card and Camera Bag',
		price:100,
		discount:20,
		brand:'Nikon'
		}),
		new Product({
		imagePath:'2.png',
		title:'Cricket Bat ',
		description:'Wolfer Liger Grade1 Kashmir Willow Cricket Bat (Size-Short Handle; Red)',
		price:20,
		discount:60,
		brand:'kashmir willow'
		}),
		new Product({
		imagePath:'3.png',
		title:'Laptop',
		description:'Microsoft Surface Laptop Intel Core i7 7th Gen 13.5 inch Touchscreen  Laptop (16GB/512GB/Windows 10 S/Integrated Graphics/Platinum/1.283kg), 1769',
		price:50,
		discount:20,
		brand:'Dell'
		}),
		new Product({
		imagePath:'4.png',
		title:'Speaker',
		description:'Photron P10 Wireless 3W Super Bass Mini Metal Aluminium Alloy Portable Bluetooth Speaker with Mic (Deep Cobalt)',
		price:35,
		discount:80,
		brand:'Photron'
		}),
		new Product({
		imagePath:'5.jpg',
		title:'Schools bags',
		description:'TENDANCE Multicolour Polyester School-College-Tution-Gym Casual Backpack Bag',
		price:90,
		discount:30,
		brand:'adiddas'
		}),
		new Product({
		imagePath:'6.jpg',
		title:'Cycle',
		description:'Kross Hunter Single Speed 20 Inches Dual Suspension Kids Bike Red 20 T Single Speed Mountain Cycle (Multicolor)',
		price:10,
		discount:55,
		brand:'hercules'
		}),
		new Product({
		imagePath:'dell1.jpg',
		title:'Laptop',
		description:'dell 16gb ram Laptop Intel Core i7 7th Gen 13.5 inch Touchscreen  Laptop (16GB/512GB/Windows 10 S/Integrated Graphics/Platinum/1.283kg), 1769',
		price:50,
		discount:40,
		brand:'Dell'
		}),
		new Product({
		imagePath:'dell2.png',
		title:'Laptop',
		description:'dell inspiron 32gb ram Laptop Intel Core i7 7th Gen 13.5 inch Touchscreen  Laptop (16GB/512GB/Windows 10 S/Integrated Graphics/Platinum/1.283kg), 1769',
		price:50,
		discount:10,
		brand:'Lenovo'
	})	

];


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

Product.create(products, function(err,NewlyCreated){
        
        if (err) {
            console.log(err);

        }
        // else{
        //  res.redirect("/campgrounds");   
        // }
     });
     