'use strict';
var parent = document.getElementById('parent');

var seattle = {
    averageCookiesPerHour: [],
        shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        min: 23,
        max: 65,
        avgCookie: 6.3,
        totalHours: function getRandomSeattle(min, max) {
                return Math.floor(Math.random() * (this.max - this.min)) + this.min;
        },   
        averageCookies: function() {
            for ( var i = 0; i < this.shopHours.length; i++){
                        var cookies = this.totalHours(); 
                        this.averageCookiesPerHour.push(cookies);
                        console.log(cookies);
            }
console.log(this.averageCookiesPerHour);
        }, 
        render: function(){
            for(var i = 0 ; i < this.shopHours.length; i++) {

                var liElement = document.createElement('li')
                liElement.textContent = 'hours ' + this.shopHours[i] + ' cookies ' + this.averageCookiesPerHour[i];
                // liElement.textContent = Math.floor(cookiesPerHour) + ' cookies sold'
                parent.appendChild(liElement)
            }
        }   
}
seattle.averageCookies();
seattle.render();
// return Math.floor(Math.random() * (max - min)) + min; 
// var custPerHour = seattle.totalHours(seattle.min, seattle.max);
// var cookiesPerHour =  seattle.avgCookie * custPerHour;

// console.log('Cookies Per Hour', Math.floor(cookiesPerHour) );



    
// salmonCookie.render();

// var tokyo = {
//     shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     randomNumberGenerator: function(){

//     }, 
//     render: function(){
//         for(var i = o ; i < this.shopHours.length; i++) {
//             child1.textContent = this.shopHours + this.numberSale + 'cookies';

//         }
//     }
    
// }
// salmonCookie.render(


        // let salesData = randomNumber

// ar person1 = {
//     name: 'sadio Mane',
//     age: 30,
//     job: 'player',
//     city: 'casa',
//     country:'Senegal',
//     club: ['Liverpool', 'Nice'],
//     activities: function(){
//       console.log(    'social and fun')
//     }
//   }
//   person.activities();
//   person1.activities();
// var child= document.getElementById('child');
// var child1 = document.createElement('li');
// child.appendChild(child1);
