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
                parent.appendChild(liElement)
            }
        }   
}
seattle.averageCookies();
seattle.render();
var tokyo = document.getElementById('tokyo');

var tokYo = {
    averageCookiesPerHour: [],
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 3,
    max: 24,
    tokyoAverage: 1.2, 
    sumHours: function getRandomtokYo(min, max){
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    },
       averagetokyo: function(){
        for (var i = 0; i <this.shopHours.length; i++){
            var cookies2 = this.sumHours();
            this.averageCookiesPerHour.push(cookies2);
            console.log(cookies2);
        }
        console.log(this.averageCookiesPerHour);
    },
    render: function(){
        for(var i = 0; i < this.shopHours.length; i++){
            var li2Element = document.createElement('li')
            li2Element.textContent = 'hours ' + this.shopHours[i] + ' cookies ' + this.averageCookiesPerHour[i];
            tokyo.appendChild(li2Element)
        }
    }
}
tokYo.averagetokyo();
tokYo.render();

var dubai = document.getElementById('dubai');

var dubaY = {
    averageCookiesPerHour: [],
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 11,
    max: 38,
    tokyoAverage: 3.7, 
    sum2Hours: function getRandomdubaY(min, max){
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    },
       averagedubaY: function(){
        for (var i = 0; i <this.shopHours.length; i++){
            var cookies3 = this.sum2Hours();
            this.averageCookiesPerHour.push(cookies3);
            console.log(cookies3);
        }
        console.log(this.averageCookiesPerHour);
    },
    render: function(){
        for(var i = 0; i < this.shopHours.length; i++){
            var li3Element = document.createElement('li')
            li3Element.textContent = 'hours ' + this.shopHours[i] + ' cookies ' + this.averageCookiesPerHour[i];
            dubai.appendChild(li3Element)
        }
    }
}
dubaY.averagedubaY();
dubaY.render();


var paris = document.getElementById('paris');

var paRis = {
    averageCookiesPerHour: [],
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 20,
    max: 38,
    parisAverage: 2.3, 
    sumHours: function getRandomtokYo(min, max){
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    },
       averageParis: function(){
        for (var i = 0; i <this.shopHours.length; i++){
            var cookies2 = this.sumHours();
            this.averageCookiesPerHour.push(cookies2);
            console.log(cookies2);
        }
        console.log(this.averageCookiesPerHour);
    },
    render: function(){
        for(var i = 0; i < this.shopHours.length; i++){
            var li4Element = document.createElement('li')
            li4Element.textContent = 'hours ' + this.shopHours[i] + ' cookies ' + this.averageCookiesPerHour[i];
            paris.appendChild(li4Element)
        }
    }
}
paRis.averageParis();
paRis.render();

var lima = document.getElementById('lima');
var liMa = {
    averageCookiesPerHour: [],
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 2,
    max: 16,
    limaAverage: 4.6, 
    sumHours: function getRandomliMa(min, max){
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    },
    averageliMa: function (){
        for (var i = 0; i < this.shopHours.length; i++){
            var cookiesLima = this.sumHours();
            this.averageCookiesPerHour.push(cookiesLima);
            console.log(this.cookiesLima);
        }
        console.log(this.averageCookiesPerHour);
    },
    render: function (){
        for (var i = 0; i < this.shopHours.length; i++){
            var li5Element = document.createElement('li')
            li5Element.textContent = 'hours ' + this.shopHours[i] + ' cookies ' + this.averageCookiesPerHour[i];
            lima.appendChild(li5Element)
        }
    }
}
liMa.averageliMa();
liMa.render();
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
