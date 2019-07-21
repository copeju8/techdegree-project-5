/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

/* Key Variables*/
const url = ('https://randomuser.me/api/?results=12&nat=US');   //Futue option for adding a get method or second parameter

const card = document.getElementById('.card');           //Retrieves all employee data     
const pictures = document.getElementById('.card-img');            //Retrieves employee pictures (images)
const info = document.querySelector(".card-info-container");    //Retrieves employee information
const btn = document.querySelector('button');                   

/*Fetch Functions*/
    
    fetch(url)                                                   //Fetch method replaces the AJAX request                         
    .then(response => response.json())                           //Raw data (parsed) in the JSON format - returns a promise                     
    .then(data => generateData(data))                           //Getting actual JSON data                                                        
    //.catch(error => console.log(" Something went wrong! Re-enter your request!"))                

// function generateInfo (data) {                               //Generate the markup for each employee profile
//     for (let i = 0; i < usersList.length; i++) {             //Sets the markup to the HTML defined in the template literal using passed in data
//     let card = `
//         <div class="card-img-container">
//             <img class ="card-img" src=${person.picture.large} alt="profile picture">
//         </div>
        
//         <div class="card-info-container">
//             <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
//             <p class="card-text">${person.email}<p>
//             <p class="card-text cap">${person.location.city}<p>
//         </div>  
//         `;

//         $('.gallery').append(card);    
//     }
// }        



// /*Helper Functions*/

function generateData(data)    {
    const html = data.results.map( person => `

        <div class="card-img-container">
                <img class ="card-img" src=${person.picture.large} alt="profile picture">
            </div>
            
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}<p>
                <p class="card-text cap">${person.location.city}<p>
            </div>  
        `) .join ('')

 $('.gallery').append(html);    
}





// function checkStatus() {
//     if(response.ok) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(new Error(response.statusText));
//     } 
//   }


// //Event Listeners



// //Post Data

// /*Result:
// Ability to request a JSON object from the API and parse the data so that 12 employees are listed in the
// grid with their thumbnail image, full name, email, and location.   Clicking the employee's image or name will
// open a modal window with more detailed information, such as the employee's birthday and address.*/