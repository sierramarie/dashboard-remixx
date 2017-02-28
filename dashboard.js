// 1. Count the number of records in the "Current Quarter Details" table.
var thing = document.getElementsByTagName('tr').length; 

console.log(thing - 1);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var winterImage = document.getElementsByTagName('img')[0];

winterImage.src = 'http://unsplash.it/400?image=730';

var springImage = document.getElementsByTagName('img')[1];

springImage.src = 'http://unsplash.it/400?image=696';

var summerImage = document.getElementsByTagName('img')[2];

summerImage.src = 'http://unsplash.it/400?image=689';

var fallImage = document.getElementsByTagName('img')[3];

fallImage.src = 'http://unsplash.it/400?image=776';

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var numberZero = document.querySelectorAll('.text-muted')[0];

numberZero.innerText = '$12,589';

// console.log('$' + numberZero);

var numberOne = document.querySelectorAll('.text-muted')[1];

numberOne.innerText = '$300';

// console.log('$' + numberOne);

var numberTwo = document.querySelectorAll('.text-muted')[2];

numberTwo.innerText = '$543';

console.log('$' + numberTwo);

var numberThree = document.querySelectorAll('.text-muted')[3];

numberThree.innerText = '$1,738';

console.log('$' + numberThree);

// 4. Change the currently selected left side menu item from Overview to Reports.

// ****var changeReports = document.querySelectorAll('#');

// changeReports.class = 'sr-only';****

// *****var overviewToReports = document.querySelectorAll('href')[1];

// overviewToReports.class = 'sr-only';

// var overviewToReport = document.getElementsByTagName('ul');

var overviewToReport = document.querySelectorAll('.nav-sidebar > li');
overviewToReport[0].classList.remove("active"); 
overviewToReport[1].classList.add("active");


// 5. Set the default search input value to "Q4 sales".

var inputValue = document.querySelectorAll('.form-control');

// var x = inputValue.setAttribute("placeholder", "Q4 Sales");
console.log(inputValue)
// jeff did forEach(); 

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.



// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var specialRows = document.querySelector('tr')[6];
specialRows.classList.add('success');

var specialRows = document.querySelector('tr')[9];
specialRows.classList.add('success');

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var headerName0 = document.getElementsByTagName('th')[0];
headerName0.innerText = 'ID';

var headerName1 = document.getElementsByTagName('th')[1];
headerName.innerText = 'First Name';

var headerName2 = document.getElementsByTagName('th')[2];
headerName1.innerText = 'Last Name';

var headerName3 = document.getElementsByTagName('th')[3];
headerName1.innerText = 'Department';

var headerName4 = document.getElementsByTagName('th')[4];
headerName1.innerText = 'Client';



// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]


// 10. Make each word in the table capitalized.
var capitalizedWords = document.querySelector('tbody');

