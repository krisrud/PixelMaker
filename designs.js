var table = document.getElementById("pixel_canvas");

function makeGrid() {
	$("#pixel_canvas").html('');
	var gridHeight = document.getElementById('input_height');
	var gridWeight = document.getElementById('input_width');
	var height = gridHeight.value;
	var width = gridWeight.value;
	
	for (var i = 0; i < width; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < height; j++) {
          td = document.createElement("td");
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
}

$(function() {
	$('#button').on('click', 'div', function () {
		makeGrid();
	});
});

table.onclick = function(event) {
	var target = event.target; 
	var gridColor = document.getElementById('colorPicker');
	var color = gridColor.value;
	target.style.backgroundColor = color;
}

$(document).ready(function() {
    $('#sizePicker').on('submit', function(buildGrid) {
        makeGrid();
        buildGrid.preventDefault();
    });
});

