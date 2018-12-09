// from data.js
var tableID = d3.select('table');
var tableBodyID = tableID.select("tbody");

// populate filters & data by default
displaydata(data)
populatedropdown()


var submitBtn = d3.select("#filter-btn");

// onclick submit button
submitBtn.on("click",function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();    

    // getting input values from all filter field
    var inputDate = d3.select("#datetime").property("value");
    var inputcity = d3.select("#selcity").property("value");
    var inputstate = d3.select("#selstate").property("value");
    var inputcountry = d3.select("#selcountry").property("value");
    var inputshape = d3.select("#selshape").property("value");

    var arrfilter = []
    filterData = data

    // If any value is given, data is filtered up on the filtered set
    if (inputDate != ""){      
      var filterData = filterData.filter(alien => alien.datetime === inputDate);      
    }

    if (inputcity != ""){
      var filterData = filterData.filter(alien => alien.city === inputcity); 
    }

    if (inputstate != ""){
      var filterData = filterData.filter(alien => alien.state === inputstate); 
    }

    if (inputcountry != ""){
      var filterData = filterData.filter(alien => alien.country === inputcountry); 
    }

    if (inputshape != ""){
      var filterData = filterData.filter(alien => alien.shape === inputshape); 
    }

    // Display table with filtered data
    displaydata(filterData)
});
  

var resetBtn = d3.select("#reset-btn");
// onclick function for Reset button, calls displaydata function
resetBtn.on("click",function(){
  displaydata(data)  
})

// Function to display data, populate table
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

// Populate list with unique valules from the dataset
function populatelist(darray, elementid){
  
  var filteredArray = [...new Set(darray)];
  

  var sel = document.getElementById(elementid);
  
  for(var i = 0; i < filteredArray.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = filteredArray[i];
      opt.value = filteredArray[i];
      sel.appendChild(opt);
  }
}

function populatedropdown(){
  var citys = data.map(function(cityls) {
    return cityls.city;
  });
  populatelist(citys, "selcity")
  
  
  var states = data.map(function(statels) {
    return statels.state;
  });
  populatelist(states, "selstate")
  
  
  var countrys = data.map(function(countryls) {
    return countryls.country;
  });
  populatelist(countrys, "selcountry")
  
  var shapes = data.map(function(shapels) {
    return shapels.shape;
  });
  populatelist(shapes, "selshape")
}

function multiFilter(array, filters) {
  const filterKeys = Object.keys(filters);
  console.log(filterKeys);
  // filters all elements passing the criteria
  return array.filter((item) => {
    // dynamically validate all filter criteria
    return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
  })
}
