// from data.js
var tableID = d3.select('table');
var tableBodyID = tableID.select("tbody");

// populate data by default
displaydata(data)

var submitBtn = d3.select("#filter-btn");

submitBtn.on("click",function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();    

    var inputDate = d3.select("#datetime").property("value");
    
    // If the input box is empty, display all data, else filter by date
    if (inputDate === ""){
      displaydata(data)
    }
    else{
      var filterData = data.filter(alien => alien.datetime === inputDate);
      displaydata(filterData)
    }     
    
})

function displaydata(displaydata)
{
  tableBodyID.html("")
  displaydata.forEach((ddisplay) => {
  var row = tableBodyID.append("tr");
  Object.entries(ddisplay).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
  });
}