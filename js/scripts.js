/*Goal: Build an app for a fictional company called Awesome Startup, a distributed company with
remote employees working all over world.  They need a smart way for employees to share contact information
with each other.*/

/*Approach:
Use the Random User Generator (API) to grab information for 12 random "employees," and use that data
to build a prototype for an Awesome Startup Employee directory.*/

/* Key Variables*/
const url = ('https://randomuser.me/api/?results=12&nat=US');   //Futue option for adding a get method or second parameter

const profileCard = document.getElementById('.card');           //Retrieves all employee data     
const images = document.getElementById('.card-img');            //Retrieves employee pictures (images)
const modal = document.querySelector("card-info-container");    //Retrieves employee information
const btn = document.querySelector('button');                   

/*Fetch Functions*/

// function getProfiles(json)  {
//     const profiles = json.card.map( card => {
//         return fetch(url + card.name)
//             .then( response => response.json() )
//     });
//     return Promise.all(profiles);
// }


 fetch(url)                                                 //Fetch method replaces the AJAX request
    .then(response => response.json())                      //Raw data (parsed) in the JSON format - returns a promise
    // .then(getProfiles)                      
    .then(data => console.log(data))                        //Getting actual JSON data

    //  .then(getProfiles)
    //  .then(generateHTML)
    //  .catch(err => {
    //     peopleList.innerHTML = '<h3>Something went wrong!</h3>';
    //  finally() => event.target.remove()   


function generateHTML(data) {                               //Generate the markup for each profile
    data.map( person => {                  
    const section = document.createElement('section');      //Create section for each employee
    profileCard.appendChild(section);                        //Appends each section to the Id with people                                                     //Sets the markup to the HTML defined in the template literal using passed in data
    section.innerHTML = `
        <img src=${person.picture}>
        <h3>${person.name}</h3>
        <p>${person.email}<p>
        <p>${person.location}<p>
        <p>${person.extract}<p>
        `;
    });      
}

 btn.addEventListener('click', (event) =>   {               //JSON data request will be retrieve with the click event
    fetch(url, (json) =>  { 
       json.profileCard.map( profileCard => {                             //Iterate over the returned people array
           fetch(url + profileCard.name, generateHTML);            //JSON callback            
       });
    });
    event.target.remove();
});      
    
                  
 
        
//         card.addEventListener('click', () => {
//             modalWindow(employee);         
//         });
//     }); 
// };

    


//    Promise.all ([                //Multiple promises into a single promise - all promises (profile info) must succeed 
//      fetchData(url)
//    ])
//     .then(data =>  {
//         const gallery =  data[0].results;
       
//      generateOptions(gallery);                   //assign the list of breeds to the variable breedList by setting it to data[0].
//                                                  //assign the URL to the variable random image with const randomImage = data[1].message.
//     })
   
//     function generateOptions(data)  {
//         const options = data.map(item => `
//             <option value='${item}'>${item}</option>
//         `).join('');
//         card.innerHTML = options;
//     }
 
//   /*HTML - Update app and add to DOM (RAM) dynamically*/

// function generateCardProfiles(data) {   //Create variable named html -  Documentation: wesbos.com
//                                        //Assign variable a template literal used(back ticks) & interpolate values to add to the DOM dynamically
//     const gallery = `                        
//         <img src=${images} alt="profile picture">    
//         <h3 class="card-name cap">${gallery.firstName} ${gallery.lastName}</h3>
//         <p class="card-text">${gallery.email}</p>
//         <p class="card-text cap">${gallery.city}, ${gallery.state}</p>
//     `;
//     card
// } 

          



// } 







// /*Helper Functions*/

// function checkStatus(response)  {
//     if (response.ok)    {
//         return Promise.resolve(response);
//     } else {

//         return Promise.reject(new Error(response.statusText));   
//     }
// }

// function generateOptions(data)  {
//     const options = data.map(item => `
//         <option value='${item}'>${item}</option>
//     `).join('');
//     card.innerHTML = options;
// }


// function generateImage(data) {
//     const html =  `
//     <img src=${images} alt="profile picture"> 
//     <p> Click to view images of ${images.value}</p>
//     `;
//     card.innerHTML = html;
// }

// fetchData(url)
//     .then(data => {
//         images.src = data;
//         images.alt = images;
//         card.textContent = `Click to view more ${card}`;
//     })
 



// //Event Listeners



// //Post Data

// /*Result:
// Ability to request a JSON object from the API and parse the data so that 12 employees are listed in the
// grid with their thumbnail image, full name, email, and location.   Clicking the employee's image or name will
// open a modal window with more detailed information, such as the employee's birthday and address.*/

// function postData(e) {
//     const card = document.querySelector('.card').value;
//     const images = document.getElementById('.card-img').value;


//     fetch('https://randomuser.me/api/?results=12&nat=US')
//     .then(checkStatus)
//     .then(res => res.join())
//     .then(data => console.log(data))

// }


// //         `<div class="card">
// // <div class="card-img-container">
// //     <img class='image' src=${images} alt="profile picture">
// // </div>    
// // <div class="card-info-container">
// //         <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
// //         <p class="card-text">${email}</p>
// //         <p class="card-text cap">${city}, ${state}</p>
// // </div>`