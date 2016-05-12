console.log("room-script.js has run.")

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var roomNumber = getQueryVariable('r') - 1;

console.log(roomValues[roomNumber].name);
document.querySelector('#pageName').innerHTML = roomValues[roomNumber].name;
document.querySelector('#pagePrice').innerHTML = roomValues[roomNumber].price;

if (roomValues[roomNumber].king != 0) {
  document.querySelector('#pageKing').innerHTML = roomValues[roomNumber].king;
} else {
  document.querySelector('#pageKing').classList.add('hide');
  document.querySelector('#listKing').classList.add('hide');
};

if (roomValues[roomNumber].queen != 0) {
  document.querySelector('#pageQueen').innerHTML = roomValues[roomNumber].queen;
} else {
  document.querySelector('#pageQueen').classList.add('hide');
  document.querySelector('#listQueen').classList.add('hide');
};

if (roomValues[roomNumber].twin != 0) {
  document.querySelector('#pageTwin').innerHTML = roomValues[roomNumber].twin;
} else {
  document.querySelector('#pageTwin').classList.add('hide');
  document.querySelector('#listTwin').classList.add('hide');
};
