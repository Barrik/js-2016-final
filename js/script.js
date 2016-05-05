console.log("Hello from the JavaScript file");

var d = document;
var room = document.getElementsByClassName('room');
var buttons = document.getElementsByClassName('dropbtn');
var lists = document.getElementsByClassName('dropdown-content');

search = {
  whether: "yes",
  occupants: 1,
  beds: 1,
};

room1 = {
  number: 1,
  whether: "yes",
  occupants: 6,
  beds: 2,
};
room2 = {
  number: 2,
  whether: "yes",
  occupants: 2,
  beds: 1,
};
room3 = {
  number: 3,
  whether: "yes",
  occupants: 2,
  beds: 1,
};
room4 = {
  number: 4,
  whether: "no",
  occupants: 4,
  beds: 2,
};
room5 = {
  number: 5,
  whether: "no",
  occupants: 3,
  beds: 2,
};
room6 = {
  number: 6,
  whether: "no",
  occupants: 3,
  beds: 2,
};


function toggleLists(num) {
  buttons[num].addEventListener('click', function() {
    // console.log("You clicked button #" + num);
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

// d.querySelector('#testButton').addEventListener('click', function() {
//   console.log(search);
// });


// ~~~~~OCCUPANTS
var occupantsCount = d.querySelector('#occupantsCount')
d.querySelector('#oneOccupants').addEventListener('click', function() {
  search.occupants = 1;
  occupantsCount.innerHTML = 1;
});
d.querySelector('#twoOccupants').addEventListener('click', function() {
  search.occupants = 2;
  occupantsCount.innerHTML = 2;
});
d.querySelector('#threeOccupants').addEventListener('click', function() {
  search.occupants = 3;
  occupantsCount.innerHTML = 3;
});
d.querySelector('#fourOccupants').addEventListener('click', function() {
  search.occupants = 4;
  occupantsCount.innerHTML = 4;
});
d.querySelector('#fiveOccupants').addEventListener('click', function() {
  search.occupants = 5;
  occupantsCount.innerHTML = 5;
});
d.querySelector('#sixOccupants').addEventListener('click', function() {
  search.occupants = 6;
  occupantsCount.innerHTML = 6;
});


// ~~~~~YES/NO
// d.querySelector('#yes').addEventListener('click', function() {
//   search.whether = "yes";
// });
// d.querySelector('#no').addEventListener('click', function() {
//   search.whether = "no";
// });


// ~~~~~SEARCH
function show(x) {
  d.querySelector(x).classList.add('show');
  d.querySelector(x).classList.remove('hide');
}
function hide(x) {
  d.querySelector(x).classList.add('hide');
  d.querySelector(x).classList.remove('show');
}

d.querySelector('#searchButton').addEventListener('click', function() {
  if (search.occupants <= room1.occupants) {
    show('#room1')
  } else {
    hide('#room1')
  };
  if (search.occupants <= room2.occupants) {
    show('#room2')
  } else {
    hide('#room2')
  };
  if (search.occupants <= room3.occupants) {
    show('#room3')
  } else {
    hide('#room3')
  };
  if (search.occupants <= room4.occupants) {
    show('#room4')
  } else {
    hide('#room4')
  };
  if (search.occupants <= room5.occupants) {
    show('#room5')
  } else {
    hide('#room5')
  };
  if (search.occupants <= room6.occupants) {
    show('#room6')
  } else {
    hide('#room6')
  };
});
