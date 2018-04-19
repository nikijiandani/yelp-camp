var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
            description: "Turducken ham brisket porchetta tail, chicken tongue. Burgdoggen alcatra spare ribs andouille boudin shank shoulder tongue rump pork swine. Tri-tip tongue prosciutto porchetta. Andouille boudin biltong ribeye buffalo pork chop pork belly short ribs pastrami. Ham hock frankfurter tail turkey pastrami cow shank buffalo. Flank corned beef rump jowl turducken fatback."
        },
        {
            name: "Desert Mesa",
            image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
            description: "Turducken ham brisket porchetta tail, chicken tongue. Burgdoggen alcatra spare ribs andouille boudin shank shoulder tongue rump pork swine. Tri-tip tongue prosciutto porchetta. Andouille boudin biltong ribeye buffalo pork chop pork belly short ribs pastrami. Ham hock frankfurter tail turkey pastrami cow shank buffalo. Flank corned beef rump jowl turducken fatback."
        },
        {
            name: "Canyon Floor",
            image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing Turducken ham brisket porchetta tail, chicken tongue. Burgdoggen alcatra spare ribs andouille boudin shank shoulder tongue rump pork swine. Tri-tip tongue prosciutto porchetta. Andouille boudin biltong ribeye buffalo pork chop pork belly short ribs pastrami. Ham hock frankfurter tail turkey pastrami cow shank buffalo. Flank corned beef rump jowl turducken fatback."
        }
    ]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Campgrounds removed!");
        }
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added campground!")
                    //add a few comments
                    Comment.create(
                        {
                            text: "This place is great but i wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        });
                }
            });
        });
    });
};

module.exports = seedDB;

