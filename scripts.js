var fulfilmentFee = { 
    extraSmall: { weightKG: 5, pricePerKG: 10, fulfilledBy: '10 Days'},
    small: { weightKG: 15, pricePerKG: 7.5, fulfilledBy: '10 Days'}, 
    medium: { weightKG: 30, pricePerKG: 6, fulfilledBy: '2 Weeks'},
    large: { weightKG: 50, pricePerKG: 3, fulfilledBy: '2 Weeks'}, 
    extraLarge: { weightKG: 100, pricePerKG: 1.5, fulfilledBy: '20 Days'} 
};


var forwardingFee = { 
    UAE: { country: 'United Arab Emirates', pricePerKG: 3},
    China: { country: 'China', pricePerKG: 3}, 
    India: { country: 'India', pricePerKG: 4},
    Turkey: { country: 'Turkey', pricePerKG: 5}, 
    Saudi: { country: 'Saudi Arabia', pricePerKG: 3} 
};

console.log(forwardingFee.UAE.pricePerKG);



