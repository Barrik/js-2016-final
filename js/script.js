console.log("Hello from the JavaScript file");

var d = document;
var room = document.getElementsByClassName('room');
var buttons = document.getElementsByClassName('dropbtn');
var lists = document.getElementsByClassName('dropdown-content');

search = {
  whether: "yes",
  show: "yes",
};

room1 = {
  whether: "yes",
};
room2 = {
  whether: "yes",
};
room3 = {
  whether: "yes",
};
room4 = {
  whether: "no",
};
room5 = {
  whether: "no",
};
room6 = {
  whether: "no",
};

// d.querySelector('#showHideButton').addEventListener('click', function() {
//   document.getElementById('showHideContent').classList.toggle("show");
// });

console.log(lists);
function toggleLists(num) {
  buttons[num].addEventListener('click', function() {
    console.log("You clicked button #" + num);
    lists[num].classList.toggle('show');
  })
}

for (var i = 0; i < buttons.length; i++) {
  toggleLists(i);
  // buttons[i].addEventListener('click', toggleLists, i);
};
// console.log(d.getElementsByClassName('dropdown-content'));

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function toggleDropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

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

d.querySelector('#testButton').addEventListener('click', function() {
  console.log(search);
});

d.querySelector('#show').addEventListener('click', function() {
  console.log("clicked " + this.innerHTML);
  search.show = "yes";
});

d.querySelector('#dontShow').addEventListener('click', function() {
  console.log("clicked " + this.innerHTML);
  search.show = "no";
});

d.querySelector('#searchButton').addEventListener('click', function() {
  for (var i = 0; i < room.length; i++) {
    console.log(room[i]);
    if (room[i].whether === search.whether) {
      room[i].classList.add('show');
      room[i].classList.remove('hide');
    } else if (room[i].whether !== search.whether) {
      room[i].classList.add('hide');
      room[i].classList.remove('show');
    }
  };
});

// d.querySelector('#searchButton').addEventListener('click', function() {
//   console.log("SEARCHING");
//   if (search.show === "yes") {
//     for (var i = 0; i < room.length; i++) {
//       room[i].classList.add('show');
//       room[i].classList.remove('hide');
//     };
//   } else if (search.show === "no") {
//     console.log("hiding rooms");
//     for (var i = 0; i < room.length; i++) {
//       room[i].classList.add('hide');
//       room[i].classList.remove('show');
//     };
//   };
//   else {
//     alert('ERROR: "Show" not defined');
//   }
// });
