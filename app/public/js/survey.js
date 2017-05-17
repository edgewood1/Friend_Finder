

var data=[];
var e=[];
var newSurvey= {};
var d=0;
  
  $(document).ready(function() {

 // -------------------------------------- special css
  	//this enables the dropdown menus
    $('select').material_select();
  	//this enables the modal
  
   $('.modal').modal();
// -------------------------------------- button pressed, object created and posted. 

$("button").on("click", function(event) {

 
      event.preventDefault();

      // Here we grab the dropdown data
      for (var i=1; i<5; i++) {
      	data1=$("#"+i).val();
      	if (isNaN(parseInt(data1))){
      		$("#warn").text("You must fill out all the options");
      		return;
      	}

      	data.push(parseInt(data1));
      }
      // Here, we create the object to post 
      newSurvey = {
        name: $("#name1").val().trim(),
        phoneNumber: $("#email1").val().trim(),
        data: data 
      };

      console.log(newSurvey);

      // This posts the "newSurvey" object to "/api/survey" and offers the callback function "data", which will return true or false depending of if the post is successful or not.  

      $.post("/api/survey", newSurvey,
        function(data) {

          // Success
          if (data) {
            alert("Yay! You've been entered!");
          }

          // Error
          else {
            alert("Sorry you are on the wait list");
          }

          // Clear the form when submitting
          $("#name1").val("");
          $("#email1").val("");
         for (var i=1; i<11; i++) {
         	$("#i").val("");
      			};


        });// Post Closes




// -------------------------------------  This returns a match to the user.

$.get("/api/survey", function(data) {
// console.log(data);
// 	console.log(data[0].data[0]);
	 

        // ------------------ > Pick out amatch

console.log("main:" + parseInt(data[0].data))
console.log("new: " +newSurvey.data);
for (var a=0; a<(data.length-1); a++){ 
	console.log("group " + a );
	for (var b=0; b<4; b++){
		// console.log(parseInt(data[a].data[b]));
// console.log( parseInt(data[a].data[b]) + " - " + newSurvey.data[b] + " = ");
		var c=parseInt(data[a].data[b])-(newSurvey.data[b]);
		// console.log(c);
		c=Math.abs(c);

			// console.log(c);
		d=d+c;
	
		c=0;
		// console.log(d);
}

e.push(d);
d=0;
console.log(e);
}

var f=0;
var g=0;
var value = e[0];
for (var i = 1; i < e.length; i++) {
  if (e[i] < value) {
    value = e[i];
    f = i;
  }
  else if (e[i]===value){
  	g=i
  }
}
 
console.log("This is the index: "+ f + " and then " +g);

        				
 // var f=0;
 $.get("/api/survey", function(data) {
          $("#name").text(data[f].name);
      });
          // $("#email").text(data[f].email);
         
   
 
  });  //RETURNS A MATCH FUNCTION CLOSES

}) /// ON CLICK FUNCTION CLOSES


// list = [
// {name: "john",
//  email: "smith"}, 
//  {name: "mary",
// email: "doe"}
// ];
  
// var hello;

// var data=[];
// $('button').on("click", function() {

// var list ={};
// list={
// 	name: $("#name").val().trim(), 
// 	email: $("#email").val().trim(),
// 	data: []
// };
//     for (var i=1; i<6; i++){
//     	hello=$("#"+i).val();
//     	list.data.push(hello);
//     	   }
// console.log(list);
// $('#here').text(list);



// $.post("/api/survey", list)
// .done(function(data) {
// 	console.log(data);
// }) //end done function.


// var currentURL = window.location.origin;

//         // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//         $.ajax({url: currentURL + "/api/survey", method: "GET"})
//             .done(function(data) {
// 	$("#name").text(data[0].name);
// 	$("#email").text(data[0].email); 
//  });  
 

//   });//end of button function


}); /// end of js


		
//        var element2 = $("<div>").addClass("input-field");
//        var element3=$("<select>");
//        var element4=$("<option>").attr({value: [""], id:'a'}).text('Choose your options');
//        var element5=$('<option>').attr("value", "1").text('Option 1');
// var element6=$('<label>').text("Here");
//        $("#form").append(element2);
//        element2.append(element3);
//        element3.append(element4);
//        element3.append(element5); 
//        element2.append(element6);