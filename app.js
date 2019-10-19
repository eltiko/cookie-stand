'use strict';

var cookieShopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var CookieTable = document.getElementById('table');
var renderHeadRow = function(){

var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = 'Locations';
trEl.appendChild(thEl);

for (var i = 0; i < cookieShopHours.length; i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = cookieShopHours[i];
    trEl.appendChild(tdElement);
    }
     tdElement = document.createElement('td');
    tdElement.textContent = 'Daily Total';
    trEl.appendChild(tdElement);
    CookieTable.appendChild(trEl)
}
renderHeadRow();

var allStores = [];
function Stores(location, minCust, maxCust, avgCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesHours = [];
  this.dailySale = 0;
  
  this.sumCookie = function(){
      for( var i = 0; i < cookieShopHours.length; i++){
          var randomNumber = Math.floor(Math.random()*(this.maxCust - this.minCust)+ this.minCust);
          this.cookiesHours.push(randomNumber);
      }
  };
  this.totalDay = function(){
      for( var i = 0; i < cookieShopHours.length; i++){
          this.dailySale += this.cookiesHours[i];
      }
  };
  this.sumCookie();
  this.totalDay();
  allStores.push(this); 
}
//get the render
Stores.prototype.render = function(){
  //creat a table row for data to store in
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var nameEl = document.createElement('td')
  nameEl.textContent = this.location;
  trEl.appendChild(nameEl);

  for( var i = 0; i < cookieShopHours.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesHours[i];
        trEl.appendChild(tdElement);
  }
  var sumElement1 = document.createElement('td');
      sumElement1.textContent = this.dailySale;
      trEl.appendChild(sumElement1);
      CookieTable.appendChild(trEl);
};
var Seattle = new Stores('Seattle', 23, 65, 6.3);
var Tokyo = new Stores('Tokyo', 3, 24, 1.2);
var Dubai = new Stores('Dubai', 11, 38, 3.7);
var Paris = new Stores('Paris', 20, 38, 3.2);
var Lima = new Stores('Lima', 2, 16, 4.6);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

var totalRow = function () {
    var trEl = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = 'Total:';
    trEl.appendChild(tdElement);
  
    for (var i = 0; i < cookieShopHours.length; i++) {
      var tdElement = document.createElement('td');
      var newTotal = 0;
      for (var x = 0; x < allStores.length; x++) {
        newTotal += allStores[x].cookiesHours[i];
        tdElement.textContent = newTotal;
        trEl.appendChild(tdElement);
      }
    }
  
    var finalTotal = 0;
    for (var k = 0; k < allStores.length; k++) {
      finalTotal += allStores[k].dailySale;
    }
    var lastTdRow = document.createElement('td');
    lastTdRow.textContent = finalTotal;
    trEl.appendChild(lastTdRow);
  
    CookieTable.appendChild(trEl);
  };
  
  totalRow();

  var formKookie = document.getElementById('salmonCookie');
  formKookie.addEventListener('submit', handleSubmit);
  function handleSubmit(event){
    event.preventDefault();
    // console.log('event.target.inputElNewLoc.value:', event.target.inputElNewLoc.value);
    this.location = event.target.inputLocaton.value;
    this.minCust = event.target.inputMinCust.value;
    this.maxCust = event.target.inputMaxCust.value;
    this.avgCookies = event.target.inputAveCookie.value;
    var newLoc = new Stores(this.location, this.minCust, this.maxCust, this.avgCookies);
    allStores.push(newLoc);
    // CookieTable.removeChild(CookieTable.lastChild);
    newLoc.render();
    
    totalRow(); 
  };