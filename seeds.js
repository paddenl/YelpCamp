var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Clouds Rest", 
            image:"https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg", 
            description: "A nice airy campground"
            
        },
        {
            name: "Woody Wonder", 
            image:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg", 
            description: "A nice woodland camping ground"
            
        },
        {
            name: "Seabreaze Sunday", 
            image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg", 
            description: "A nice place to camp on the beach"
            
        },
    ];

function seedDB() {
    // removes all campgrounds
    Campground.remove({}, function(err) {
    //     if(err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log("removed campgrounds");
    //     }
    // });
    // // add campgrounds
    // // data.forEach(function(seed){
    // //     Campground.create(seed, function(err, campground) {
    // //         if(err) {
    // //             console.log(err);
    // //         }
    // //         else {
    // //             console.log("added a campground");
    // //             // add comments
    // //             Comment.create(
    // //                 {
    // //                     text: "This place is great, but I wish it had internet",
    // //                     author: "Homer"
    // //                 }, function(err, comment){
    // //                     if(err) {
    // //                         console.log(err);
    // //                     }
    // //                     else {
    // //                         campground.comments.push(comment);
    // //                         campground.save();
    // //                         console.log("Created new comment");
    // //                     }
    // //             });
    // //         }
    // //     });
 });
    
    

}

module.exports = seedDB;