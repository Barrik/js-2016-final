console.log("script.js has run.");

var d = document;
var room = document.getElementsByClassName('room');
var buttons = document.getElementsByClassName('dropbtn');
var lists = document.getElementsByClassName('dropdown-content');
var occupantOptions = d.getElementsByClassName('occupantsOption');

// This is the user's search settings.  This will be changed clientside.  Below are the default values.
search = {
  occupants: 1,
};

// ===List Room Name===
for (var i = 0; i < room.length; i++) {
  var roomNum = i + 1;
  d.querySelector('#roomname' + roomNum).innerHTML = roomValues[i].name;
}

// ===List Room Price===
for (var i = 0; i < room.length; i++) {
  var roomNum = i + 1;
  d.querySelector('#room' + roomNum + 'Price').innerHTML = roomValues[i].price;
};

// ===Toggle Dropdown Menus===
function toggleLists(num) {
  buttons[num].addEventListener('click', function() {
    lists[num].classList.toggle('show');
  })
}
for (var i = 0; i < buttons.length; i++) {
  toggleLists(i);
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ===Dropdown Meny for Occupants===
function doOccupantsOptions(arg) {
  var xx = arg + 1;
  occupantOptions[arg].addEventListener('click', function() {
    search.occupants = xx;
    occupantsCount.innerHTML = xx;
  });
};
for (var i = 0; i < occupantOptions.length; i++) {
  doOccupantsOptions(i);
};


// ==========SEARCH==========
function show(x) {
  d.querySelector('#room' + x).classList.add('show');
  d.querySelector('#room' + x).classList.remove('hide');
}
function hide(x) {
  d.querySelector('#room' + x).classList.add('hide');
  d.querySelector('#room' + x).classList.remove('show');
}

function doSearch(room) {
  if (search.occupants <= roomValues[room].occupants) {
    show(roomValues[room].number);
  } else {
    hide(roomValues[room].number);
  };
};

d.querySelector('#searchButton').addEventListener('click', function() {
  for (var i = 0; i < roomValues.length; i++) {
    doSearch(i);
  };
});
