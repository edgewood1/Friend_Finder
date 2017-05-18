

var data=[];
var differences=[];
var newSurvey= {};
var d=0;
var c=0;
var lowest=0;
var nextLowest=0;
 
  
  $(document).ready(function() {

 // -------------------------------------- special css
  	//this enables the dropdown menus
    $('select').material_select();
  	//this enables the modal
 
  		 $('.modal').modal();


// -------------------------------------- submit button pressed, object created and posted. 

$("button").on("click", function(event) {

 
      event.preventDefault();
      data=[]
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
            alert("Sorry you weren't entered.");
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
//
console.log("main:" + (data[0].data))
console.log("new: " + newSurvey.data);
for (var a=0; a<(data.length-1); a++){ 
	console.log("comparison with " + data[a].name );
	for (var b=0; b<4; b++){ 
		//Subtract old results from new results
		c=parseInt(data[a].data[b])-(newSurvey.data[b]);
		// Nuetralize the result
		c=Math.abs(c);
		console.log("subtraction " + b)
		console.log(c)
		// d is total difference
		d=d+c;
	    // reset C for new round of sub
		c=0;
		// console.log(d);
}

//push total difference into "differences" array
differences.push(d);
//reset d for new round of subtractions
d=0;
//e is an array that contains results for each comparison
console.log(differences);
}
// "lowest" will find the lowest value in the "differences" array
 
//
var value = differences[0];
//loop through the e array
for (var i = 1; i < differences.length; i++) {
  if (differences[i] < value) {
  	//if an item is less than value, then it becomes value, and f becomes the index for that value
    value = differences[i];
    lowest = i;
  }
   // if an item is the same as the value, then it will become the second lowest number? 
  else if (differences[i]===value){
  	nextLowest=i
  }
}
 
console.log("This is the index: "+ lowest + " and then " +nextLowest);

        				
 // var f=0;
 $.get("/api/survey", function(data) {
 	  
          $("#name").text(data[lowest].name);
          $("#image").html("<img src='"+ data[lowest].email + "'>"  )
      });
          // $("#email").text(data[f].email);
         
   
 
  });  //RETURNS A MATCH FUNCTION CLOSES

}) /// ON CLICK FUNCTION CLOSES




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