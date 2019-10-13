'use strict';

var cookieShopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieShopAllStore = [];
var cookieShopTableData = document.getElementById('table');
var cookieShopAllStoreTotal = 0;

//code review constructor function and then create the header, renderShopRow, renderFooterRow
function CookieShop(minCust, maxCust, avgCookie, locName) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.locName = locName;
    this.hourlyCookieTotal = [];
    this.dailyCookie = 0;
    cookieShopAllStore.push(this);{

    }
    //generate cookies upon instantiation
    this.generateHourlyCookie();
    //generate shop row upon instatiation
    this.renderShopRow();
}

var randomCustomer = function(min, max) {
    return Math.random * ((max-min) + 1) + min;
};

CookieShop.prototype.generateHourlyCookie = function() {
    for (var i = 0; i < cookieShopHours.length; i++){
        var cookie = Math.ceil(this.avgCookie * randomCustomer(this.minCust, this.maxCust));
        this.hourlyCookieTotal.push(cookie);
        this.dailyCookie += cookie;
        cookieShopAllStore += cookie;
    }
};

var renderHeaderRow = function() {
    var trEl = document.createElement('tr')
    var thEl = document.createElement('th')
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);

    for( var i = 0; i < cookieShopHours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = cookieShopHours[i];
        trEl.appendChild(tdEl);
    }

    var tdEl1 = document.createElement ('td')
    tdEl1.textContent = 'Total';
    trEl.appendChild(tdEl1);
    cookieShopTableData.appendChild(trEl);
};

renderHeaderRow();

CookieShop.prototype.renderShopRow = function(){
//create elements
var trEl = document.createElement ('tr')
var tdEl = document.createElement('td')
tdEl.textContent = this.locName;
trEl.appendChild(tdEl);

//loop over the length of hourlyCookiesTotal and give content 
// Ron - we have to adjust our elements to ; addElement.element to access the newly made elements
for( var i = 0; i < this.hourlyCookieTotal.length; i++) {
    // crest the element
    tdEl = document.createElement('td');
    //give content to th element 
    tdEl.textContent = this.hourlyCookieTotal[i];
    trEl.appendChild(tdEl);
}
//accessing this.dailyCookievalue to sow total
var tdEl1 = document.createElement('td');
tdEl1.textContent = this.dailyCookie;
trEl.appendChild(tdEl1);
cookieShopTableData.appendChild(trEl);
};

var dubai = new CookieShop(48, 155, 2.2, 'Dubai');



//does not need to be prototype because we don't acces 'this'
var renderFooterRow = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Hourly Totals';
    trEl.appendChild(tdEl);

    for( var i = 0; i < cookieShopHours.length; i++); {
        var storeHourlyTotals = 0;
        var tdEl2 = document.createElement ('td');

        for( var x = 0; x < cookieShopAllStore.length; x++) {
            storeHourlyTotals += cookieShop.allStore[x].hourlyCookieTotal[i];
        }
        tdEl2.textContent = storeHourlyTotals;
        trEl.appendChild(tdEl2);
    }

    var tdEl3 = document.createElement('td');
    tdEl3.textContent = cookieShopAllStoreTotal;
    trEl.appendChild(tdEl3);
    cookieShopTableData.appendChild(trEl);

};
// new CookieShop(34, 13, 2.1, 'Seattle');
console.log(dubai);

