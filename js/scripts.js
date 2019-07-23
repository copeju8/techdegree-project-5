/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

/* Key Variables*/
const url = ('https://randomuser.me/api/?results=12&nat=US');   //Futue option for adding a get method or second parameter
//Retrieves all employee data     
const pictures = document.getElementById('.card-img');          //Retrieves employee pictures (images)
const info = document.querySelector(".card-info-container");    //Retrieves employee information

/*Fetch Functions*/

fetch(url)                                                      //Fetch method replaces the AJAX request                         
    .then(response => response.json())                          //Raw data (parsed) in the JSON format - returns a promise                     
    .then(generateData)
//Getting actual JSON data
//.catch(error => console.log(" Something went wrong! Re-enter your request!"))

// /*Helper Functions*/

//Generate the markup for each employee profile
//Sets the markup to the HTML defined in the template literal using passed in data

function generateData(data) {


    data.results.map(person => {

        $('#gallery').on('click', '.card', function (event) {
            //i = ($(this).index());
            i = ($(event.target).index());
            //modalWindow(i);
            generateModal(person);
        });


        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-img-container">
            <img class ="card-img" src=${person.picture.large} alt="profile picture">
        </div>

        <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}<p>
                <p class="card-text cap">${person.location.city}<p> 
        </div>    
        `;

        $('#gallery').append(card);
    })

}

function generateModal(person) { //Generate card profiles using the employee(person) data from generateData.
    //Sets the markup to the HTML defined in the template literal using passed in data


    // function modalWindow(i) {
    //     if (i === 0) {
    //         $('.modal-prev').remove()
    //     } else if (i === 11) {
    //         $('.modal-next').remove()
    //     }
    // }
    // $('.modal-next').on('click', function () {
    //     $('.modal-container').remove();
    //     i++
    //     generateModal(person);
    // });


    // $('.modal-prev').on('click', function () {
    //     $('.modal-container').remove();
    //     i--
    //     generateModal(person);
    // })

    let dob = person.dob.date;
    let bDay = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);

    const modalHtml = `
       
    <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src= ${person.picture.large} alt="profile picture">
                    <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
                    <p class="modal-text">${person.email}</p>
                    <p class="modal-text cap">${person.location.city}</p>
                    <hr>
                        <p class="modal-text">${person.cell}</p>
                        <p class="modal-text">${person.location.street}, ${person.location.city}, ${person.location.state} ${person.location.postcode}</p>
                        <p class="modal-text">Birthday: ${bDay}</p>
                    </div>
                </div>

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`

    $('body').append(modalHtml);
};
$('#modal-close-btn').on('click', function () {
    $('.modal-container').remove();
    console.log('hello');
});


// /*Result:
// Ability to request a JSON object from the API and parse the data so that 12 employees are listed in the
// grid with their thumbnail image, full name, email, and location.   Clicking the employee's image or name will
// open a modal window with more detailed information, such as the employee's birthday and address.*/
