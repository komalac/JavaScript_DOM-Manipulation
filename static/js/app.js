// from data.js
var tableID = d3.select('table');
var tableBodyID = tableID.select("tbody");



// YOUR CODE HERE!
data.forEach((ddisplay) => {
  var row = tableBodyID.append("tr");
  Object.entries(ddisplay).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var submitBtn = d3.select("#filter-btn");

submitBtn.on("click",function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();    

    var inputDate = d3.select("#datetime").property("value");
    var filterData = data.filter(alien => alien.datetime === inputDate);

    tableBodyID.html("")
    filterData.forEach((ddisplay) => {
    var row = tableBodyID.append("tr");
    Object.entries(ddisplay).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
})

