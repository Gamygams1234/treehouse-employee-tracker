var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // this will give us the data ad return an object
      let employees = JSON.parse(xhr.responseText);
      console.log(employees);
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
