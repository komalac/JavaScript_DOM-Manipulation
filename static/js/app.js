// from data.js
var tableID = d3.select('table');
var tableBodyID = tableID.select("tbody");

var submitBtn = d3.select("#submit");

// YOUR CODE HERE!
data.forEach((ddisplay) => {
  var row = tableBodyID.append("tr");
  Object.entries(ddisplay).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

submitBtn.on("click",function(){

    var inputBox = d3.select("datetime");
    var inputDate = inputBox.property("value");
    var filterData = data.filter(alien => alien.datetime === inputDate)    ;

    filterData.forEach((ddisplay) => {
    var row = tableBodyID.append("tr");
    Object.entries(ddisplay).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
})

