  $(document).ready(function() {
    $('select').material_select();

var hello;
var list=[];
$('button').on("click", function() {
	console.log("click");
    for (var i=1; i<6; i++){
     console.log(hello);
    hello=$("#"+i).val();
    console.log(hello);
    list.push(hello);
    console.log(list);
}
$('#here').text(list);
  });




});


		
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