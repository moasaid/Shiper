var fulfilmentFee = [
    { packageType: 'Extra Small', weightKG: 5, pricePerKG: 10, fulfilledBy: '10 Days' },
    { packageType: 'Emall', weightKG: 15, pricePerKG: 7.5, fulfilledBy: '10 Days' },
    { packageType: 'Medium', weightKG: 30, pricePerKG: 6, fulfilledBy: '2 Weeks' },
    { packageType: 'Large', weightKG: 50, pricePerKG: 3, fulfilledBy: '2 Weeks' },
    { packageType: 'Extra Large', weightKG: 100, pricePerKG: 1.5, fulfilledBy: '20 Days' }
];

var fulfilmentOptions = document.getElementById('package-size');
const packList = fulfilmentFee.map(fulfilmentFee => (fulfilmentFee.packageType));

for (fulFee in packList) {
    fulfilmentOptions.options[fulfilmentOptions.options.length] = new Option(packList[fulFee], fulFee);
}

var forwardingFee = [
    { country: 'United Arab Emirates', pricePerKG: 3 },
    { country: 'China', pricePerKG: 3 },
    { country: 'India', pricePerKG: 4 },
    { country: 'Turkey', pricePerKG: 5 },
    { country: 'Saudi Arabia', pricePerKG: 3 }
];


var forwardingOptions = document.getElementById('package-location');
const countryList = forwardingFee.map(forwardingFee => (forwardingFee.country));

for (country in countryList) {
    forwardingOptions.options[forwardingOptions.options.length] = new Option(countryList[country], country);
}



function getInput(e) {
    const productPrice = document.getElementById('product-fee').value;
    const forwardingOpt = document.getElementById('package-location').value;


    // var forwarding;

    // forwardingOpt.forEach(function(e){
    //     forwarding = e.toString();
    // });


    const fulfilmentOpt = document.getElementById('package-size').value;
    const print = document.getElementById('print');

    if (!isNaN(productPrice)) {
        print.innerHTML = `Your product cost £${productPrice} and size being ${fulfilmentOpt} from ${forwardingOpt}`
    };

    e.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', getInput)
console.log(fulfilmentOpt.toString());
