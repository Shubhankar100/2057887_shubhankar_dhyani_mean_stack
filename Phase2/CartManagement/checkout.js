function appendValues() {
    var table = document.getElementById("myTable");
    var values = JSON.parse(localStorage.values);
    var totalValue = 0;
    console.log(values.length);
    for (var i = 0; i < values.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = values[i][0];
        cell2.innerHTML = values[i][1];
        totalValue = totalValue + values[i][1];
    }
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 'Total';
    cell2.innerHTML = totalValue.toString();
    // values.forEach((element) => {
    // });
}
