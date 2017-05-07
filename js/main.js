// JavaScript Document
function floor(diameter) {

    var radius = diameter / 2;
    var floorArea = Math.PI * (radius * radius);
    return floorArea;
} //end of function

function walls(diameter, height) {
    var radius = diameter / 2;
    var circumference = 2 * Math.PI + radius;
    var wallArea = circumference * height;
    return wallArea;
}//end of function

function materialsNeeded() {
    var d = document.getElementById("across").value;
    var h = document.getElementById("height").value;

    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d, h));

    console.log("Carpet Needed is " + carpetNeeded + " sqft");
    console.log("Paind Needed is " + paintNeeded + " sqft");

}//end of function



function showStuff(el) {
    var elementID = document.getElementById(el);
    for (i = 0; i < elementID.length; i++) {

        if (elementID[i].selected === true) {
            var x = elementID[i].text;

        }//end if
    }// end loop
    return x;
}// end function

function evaluatePage() {
    var feedbackState = showStuff("state");
    var feedbackHome = showStuff("home");
    document.getElementById("output").innerHTML = feedbackState + "<br>" + feedbackHome;
}

