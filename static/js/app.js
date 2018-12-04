// from data.js
var tableData = data;
var tableID = d3.select('ufo-table')
var tableBodyID = tableID.select("tbody")


// YOUR CODE HERE!
data.forEach(function(ufoDataDisp) {
//   console.log(ufoDataDisp);
  var row = tableBodyID.append("tr");
  Object.entries(ufoDataDisp).forEach(function([key, value]) {
    // console.log(key, value);    
    var cell = tableBodyID.append("td");
    cell.text(value);
  });
});
