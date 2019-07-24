/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

/* Key Variables*/

const url = ('https://randomuser.me/api/?results=12&nat=US');

const gallery = $('#gallery');
const pictures = $('.card-img');
const info = $(".card-info-container");

/*======Fetch Functions========

    Retrieves all employee data using the fetch method (AJAX request)
    Raw data (parsed) in the JSON format - returns a promise */

fetch(url)
    .then(response => response.json())
    .then(generateData)

/*=========Helper Functions=======

    Generate the markup for each employee profile
    Sets the markup to the HTML defined in the template literal using passed in data
    A card profile is generated for each random employee */

// Current target --> inner text --> regex (grab first/last name) and assign into a variable
// for 0 - 12, check if variable equals data.results[i].name.first + ' ' + data.results[i].name.last

function generateData(data) {

    jsonData = data.results;
    console.log(data.results);

    let storeData = [];


    //jsonData.forEach(person => {
    for (var i = 0; i < data.results.length; i++) {


        // const picture = person.picture.large;
        // const firstName = person.name.first;
        // const email = person.email;
        // const locCity = person.location.city;
        // const locState = person.location.state;

        let card = document.createElement('div');               //Create div class for individual employee (person) info
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-img-container">
                <img class ="card-img" src=${jsonData[i].picture.large} alt="profile picture">
            </div>

            <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${jsonData[i].name.first} ${jsonData[i].name.last}</h3>
                    <p class="card-text">${jsonData[i].email}<p>
                    <p class="card-text cap">${jsonData[i].location.city}<p> 
            </div>    
            `;


        $('#gallery').append(card);


        // console.log("i  ", i);
        // $('#gallery').on('click', '.card', function (event) {   //Event listener for click event (works here)
        //     storeData[i].profile.show();

        // })


    }
}
console.log($('#gallery .card'));

$('#gallery').on('click', '.card', (e) => {
    var parent = e.currentTarget.parentNode;
    var child = e.currentTarget;

    var index = Array.from(parent.children).indexOf(child);
    showModalFunc(index, jsonData);
});

function showModalFunc(i, jsonData) {

    console.log('showModalFunc load');
    console.log(jsonData[i]);


    let dob = jsonData[i].dob.date;
    let bDay = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);


    //Create div class for individual employee (person) info
    // profile.classList.add('card');
    //const modalHtml = `
    // profile.innerHtml =
    $("body").append(
        `<div class="modal-container" >
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="card-img-container">
                    <img class="card-img" src=${jsonData[i].picture.large} alt="profile picture">
                </div>
                    <h3 id="name" class="modal-name cap">${jsonData[i].name.first} ${jsonData[i].name.last}</h3>
                    <p class="modal-text">${jsonData[i].email}</p>
                    <p class="modal-text cap">${jsonData[i].location.city}</p>
                    <hr>
                        <p class="modal-text">${jsonData[i].cell}</p>
                        <p class="modal-text">${jsonData[i].location.street}, ${jsonData[i].location.city}, ${jsonData[i].location.state} ${jsonData[i].location.postcode}</p>
                        <p class="modal-text">Birthday: ${bDay}</p>
            </div>
         

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
        </div >
                `);

    // $('body').append(profile);
    // document.getElementsByTagName('body').appendChild(profile);



}






