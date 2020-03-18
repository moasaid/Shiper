var fulfilmentFee = [
    { packageType: 'Extra Small', weightKG: 5, pricePerKG: 10, fulfilledBy: '10 Days' },
    { packageType: 'Emall', weightKG: 15, pricePerKG: 7.5, fulfilledBy: '10 Days' },
    { packageType: 'Medium', weightKG: 30, pricePerKG: 6, fulfilledBy: '2 Weeks' },
    { packageType: 'Large', weightKG: 50, pricePerKG: 3, fulfilledBy: '2 Weeks' },
    { packageType: 'Extra Large', weightKG: 100, pricePerKG: 1.5, fulfilledBy: '20 Days' }
];

var packSize = document.getElementById('package-size');
const packList = fulfilmentFee.map(fulfilmentFee => (fulfilmentFee.packageType));
var fragmentOne = document.createDocumentFragment();


packList.forEach(function (packList, index) {
    var opt = document.createElement('option');
    opt.innerHTML = packList;
    opt.value = packList;
    fragmentOne.appendChild(opt);
});

packSize.appendChild(fragmentOne);

var forwardingFee = [
    { country: 'United Arab Emirates', pricePerKG: 3 },
    { country: 'China', pricePerKG: 3 },
    { country: 'India', pricePerKG: 4 },
    { country: 'Turkey', pricePerKG: 5 },
    { country: 'Saudi Arabia', pricePerKG: 3 }
];

var packLocation = document.getElementById('package-location');
const countryList = forwardingFee.map(forwardingFee => (forwardingFee.country));
var fragmentTwo = document.createDocumentFragment();


countryList.forEach(function (countryList, index) {
    var opt = document.createElement('option')
    opt.innerHTML = countryList;
    opt.value = countryList;
    fragmentTwo.appendChild(opt);
});

packLocation.appendChild(fragmentTwo)


function getInput(e) {
    const productPrice = document.getElementById('product-fee').value;
    var packageSize = document.getElementById('package-size').value;
    var packageLocation = document.getElementById('package-location').value;


    const print = document.getElementById('print');

    if (!isNaN(productPrice)) {
        print.innerHTML = `Your ${packageSize} product cost £${productPrice} and  size being ${packageLocation}`;
    };

    e.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', getInput);

