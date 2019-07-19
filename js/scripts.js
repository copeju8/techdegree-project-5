/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

let jsonData

$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=US',
    dataType: 'json',
    success: function (data) {
        jsonData = data.results;
        jsonData.forEach(person => {
            const picture = person.picture.large;
            const firstName = person.name.first;
            const lastName = person.name.last;
            const email = person.email;
            const city = person.location.city;
            const state = person.location.state;

            const galleryProfile =

                `<div class="card">
        <div class="card-img-container">
            <img class='image' src='${picture}' alt="profile picture">
        </div>    
        <div class="card-info-container">
                <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${city}, ${state}</p>
        </div>`
            $('#gallery').append(galleryProfile);
        });
    }
});




    // function fetchData() {
    //     

    //     fetchData('https://randomuser.me/api/?results=12&nat=US')
    //         .then(data => { 
    //             image.src = data.message
    //         }
    //  }

    // fetchData(`https://randomuser.me/api/image/random`)
    // fetchData(`https://randomuser.me/api/name/random`)




/*Fetch Functions*/

//     function fetchRandomUsers(url) {
//     const user = select.value;
//         //     const img = user.querySelector('img');
        //     const p = user.querySelector('p');

//     fetchData(`https://dog.ceo/api/breed/${breed}/images/random`);
            // }



// function fetchData(path) {
//     return fetch(path)
//         .then(res => res.json())
// }

// fetchData(path)
//     .then(data => generateOptions)

//Helper Functions



//Event Listeners



//Post Data

/*Result:
Ability to request a JSON object from the API and parse the data so that 12 employees are listed in the
grid with their thumbnail image, full name, email, and location.   Clicking the employee's image or name will
open a modal window with more detailed information, such as the employee's birthday and address.*/