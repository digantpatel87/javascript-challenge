// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufo_table_load = document.getElementById('ufo-table');

for (var i = 0; i < tableData.length; i++) {
    var row = document.createElement("tr");
    var columnDate = document.createElement("td");
    var columnCity = document.createElement("td");
    var columnState = document.createElement("td");
    var columnCountry = document.createElement("td");
    var columnShape = document.createElement("td");
    var columnDuration = document.createElement("td");
    var columnComments = document.createElement("td");

    columnDate.textContent = tableData[i].datetime;
    columnCity.textContent = tableData[i].city;
    columnState.textContent = tableData[i].state;
    columnCountry.textContent = tableData[i].country;
    columnShape.textContent = tableData[i].shape;
    columnDuration.textContent = tableData[i].durationMinutes;
    columnComments.textContent = tableData[i].comments;

    row.appendChild(columnDate);
    row.appendChild(columnCity);
    row.appendChild(columnState);
    row.appendChild(columnCountry);
    row.appendChild(columnShape);
    row.appendChild(columnDuration);
    row.appendChild(columnComments);

    ufo_table_load.appendChild(row);

}

document.getElementById("filter-btn").onclick = function() {filterByDate()};



function filterByDate(){
    var selecteddate = document.getElementById("datetime").value;
    
    for(var i = ufo_table_load.childElementCount - 1; i >0; i--){
        ufo_table_load.removeChild(ufo_table_load.lastChild);
    }

    var filterdata = tableData.filter(item => item.datetime == selecteddate)

    for (var i = 0; i < filterdata.length; i++) {
        var row = document.createElement("tr");
        var columnDate = document.createElement("td");
        var columnCity = document.createElement("td");
        var columnState = document.createElement("td");
        var columnCountry = document.createElement("td");
        var columnShape = document.createElement("td");
        var columnDuration = document.createElement("td");
        var columnComments = document.createElement("td");
    
        columnDate.textContent = filterdata[i].datetime;
        columnCity.textContent = filterdata[i].city;
        columnState.textContent = filterdata[i].state;
        columnCountry.textContent = filterdata[i].country;
        columnShape.textContent = filterdata[i].shape;
        columnDuration.textContent = filterdata[i].durationMinutes;
        columnComments.textContent = filterdata[i].comments;
    
        row.appendChild(columnDate);
        row.appendChild(columnCity);
        row.appendChild(columnState);
        row.appendChild(columnCountry);
        row.appendChild(columnShape);
        row.appendChild(columnDuration);
        row.appendChild(columnComments);
    
        ufo_table_load.appendChild(row);
    
    }


}
