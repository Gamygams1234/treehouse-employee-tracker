var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // this will give us the data ad return an object
      let employees = JSON.parse(xhr.responseText);
      console.log(employees);

      var statusHTML = '<ul class= "bulleted">';
      for (let index = 0; index < employees.length; index++) {
        if (employees[index].inoffice == true) {
          statusHTML += '<li class="in">';
        } else {
          statusHTML += '<li class = "out">';
        }
        statusHTML += employees[index].name;
        statusHTML += "</li>";
      }
      statusHTML += "</ul>";
      document.getElementById("employeeList").innerHTML = statusHTML;
    } else if (xhr.status === 404) {
      // file not found
      alert(xhr.statusText);
    } else if (xhr.status === 500) {
      // there was a problem with the server
      alert(xhr.statusText);
    }
  }
};

xhr.open("GET", "data/employees.json");

xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    if (xhr2.status === 200) {
      // this will give us the data ad return an object
      let rooms = JSON.parse(xhr2.responseText);

      var roomStatusHTML = '<ul class= "rooms">';
      for (let index = 0; index < rooms.length; index++) {
        if (rooms[index].available == true) {
          roomStatusHTML += '<li class="empty">';
        } else {
          roomStatusHTML += '<li class = "full">';
        }
        roomStatusHTML += rooms[index].room;
        roomStatusHTML += "</li>";
      }
      roomStatusHTML += "</ul>";
      document.getElementById("roomList").innerHTML = roomStatusHTML;
    } else if (xhr2.status === 404) {
      // file not found
      alert(xhr2.statusText);
    } else if (xhr2.status === 500) {
      // there was a problem with the server
      alert(xhr2.statusText);
    }
  }
};

xhr2.open("GET", "data/rooms.json");

xhr2.send();
