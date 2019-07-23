/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

/* Key Variables*/

const url = ('https://randomuser.me/api/?results=12&nat=US');

const pictures = document.getElementById('.card-img');
const info = document.querySelector(".card-info-container");

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
    console.log(data);
    jsonData = data.results;

    let storeData = [];
    var i = 0;

    //jsonData.forEach(person => {
    for (i = 0; i < 12; i++) {


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

        card.addEventListener("click", (e) => {
            console.log('modal paint start...');
            showModalFunc(i, jsonData);
        })

    }




}


function showModalFunc(i, jsonData) {
    i = 3;
    console.log('showmodal load');
    console.log(jsonData[i]);


    let dob = jsonData[i].dob.date;
    let bDay = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);

    let profile = document.createElement('div');
    profile.className = 'myModal';

    //Create div class for individual employee (person) info
    // profile.classList.add('card');
    //const modalHtml = `
    profile.innerHtml = `
    <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
                </div>
                `;
    console.log(profile);
    document.getElementsByTagName('body').appendChild(profile);

    // <div class="modal-container">
    //     <div class="modal">
    //         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    //         <div class="modal-info-container">
    //             <img class="modal-img" src= ${jsonData[i].picture.large} alt="profile picture">
    //                 <h3 id="name" class="modal-name cap">${jsonData[i].name.first} ${jsonData[i].name.last}</h3>
    //                 <p class="modal-text">${jsonData[i].email}</p>
    //                 <p class="modal-text cap">${jsonData[i].location.city}</p>
    //                 <hr>
    //                     <p class="modal-text">${jsonData[i].cell}</p>
    //                     <p class="modal-text">${jsonData[i].location.street}, ${jsonData[i].location.city}, ${jsonData[i].location.state} ${jsonData[i].location.postcode}</p>
    //                     <p class="modal-text">Birthday: ${bDay}</p>
    //         </div>
    //         </div>

    //         <div class="modal-btn-container">
    //             <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    //             <button type="button" id="modal-next" class="modal-next btn">Next</button>
    //         </div>    
    //     </div>
    // </div>`

}



// Current target --> inner text --> regex (grab first/last name) and assign into a variable
// for 0 - 12, check if variable equals data.results[i].name.first + ' ' + data.results[i].name.last





        // console.log("PROFILE:  ", profile);
        // let array = [];
        // array.push(profile);
        // console.log("hello array", array);



        // $('#gallery').on('click', '.card', function (event) {   //Event listener for click event (works here)
        //     console.log(event.currentTarget);



        //     console.log("poop")



        // console.log("Testing:   ", modalHtml);
        // $('body').append(modalHtml);

        //     let card = document.createElement('div');               //Create div class for individual employee (person) info
        //     card.classList.add('card');

        //     card.innerHTML = `
        //     <div class="card-img-container">
        //         <img class ="card-img" src=${person.picture.large} alt="profile picture">
        //     </div>

        //     <div class="card-info-container">
        //             <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
        //             <p class="card-text">${person.email}<p>
        //             <p class="card-text cap">${person.location.city}<p> 
        //     </div>    
        //     `;
        //     let array = [];
        //     array.push(card);
        //     console.log("hello array", array);

        //     //Call function to generate modal window
        // });

//         //Append card (person info) to main gallery per HTML
//     })



// }

/*  Generate modal window using the employee(person) data from the generateData function.
    A template literal gathers pertinent JSON data from parameter 'person'. */

        // function generateModal(person) {

        //Slice for correct date of birth format.


        // let anyArray = [];
        // anyArray.push(modalHtml);
        // console.log(anyArray);


        //Append modal window information to the body of HTML
        // const container = document.getElementByClassName("card-img-container")
        // const modal1 = document.getElementByClassName("modal-container")
        // container.addEventListener("click", (e) => {

        //     modal1.style.display = "block";
        //     // allows the user to exit modal by clicking anywhere outside the modal card
        //     modal1.addEventListener("click", () => {
        //         modal1.style.display = "none"
        //     })
        // })



