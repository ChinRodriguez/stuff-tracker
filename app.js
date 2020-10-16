
class Stuffs {
  // Init Constructor
  constructor(date,description){
    this.date = date;
    this.description = description;
  }
  addJourney(para){
    const stuff = document.querySelector('#stuff-list');
    // Creating the <tr> tag
    const stuffRow = document.createElement('tr');
    // Pushing Data inside each <tr> tag
    stuffRow.innerHTML = `
    <td>${para.date}</td>
    <td>${para.description}</td>
    `;
    // Appending child element in the table
    stuff.appendChild(stuffRow);
  }
}

// Creare a Class UI
class UI {}

// Helps in sorting via date
// so you can add them in any order of dates
var sortedData = data.sort(function (a, b) {
  return a.date-b.date;
})

function build () {

  var len = sortedData.length;
  // looping through the data
  for (var i = 0; i < len; i++) {
    // Creating the Date Format
    var dd = sortedData[i].date.getDate();
    var mm = sortedData[i].date.getMonth() + 1;
    var yy = sortedData[i].date.getFullYear();
    var dateStamp = `${dd}.${mm}.${yy}`
    var stuff = sortedData[i].log

    // Creating an object of each array element
    let obj = new Stuffs(dateStamp,stuff);
    // Method to add element
    obj.addJourney(obj)
       
  }
}

build();

