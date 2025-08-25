
// hero section
export interface IPopularDrinks {
    title: string;
    info: string;
    price: string;
}

const popularDrinks: IPopularDrinks[] = [
    {
        title: "Chapel Hill Shiraz",
        info: "AU | Battle",
        price: "-$10"
    },
    {
        title: "Caten Malbee",
        info: "AU | Battle",
        price: "-$49"
    },
    {
        title: "Rhino Pale Ale",
        info: "CA | 750 ml",
        price: "-$20"
    },
    {
        title: "Irish Guinness",
        info: "IE | 600 ml",
        price: "-$29"
    }
];


export interface ILovedDrinks {
    title: string;
    info: string;
    price: string;
}

const lovedDrinks: ILovedDrinks[] = [
    {
        title: "Tropical Bloom",
        info: "US | Battle",
        price: "-$10"
    },
    {
        title: "Passionfruit Mint",
        info: "US | Battle",
        price: "-$49"
    },
    {
        title: "Citrus Glow",
        info: "CA | 750 ml",
        price: "-$20"
    },
    {
        title: "Lavender Fizz",
        info: "IE | 600 ml",
        price: "-$29"
    }
];


// AboutUs section
export interface IAboutImages {
    image: string;
}


const aboutImages: IAboutImages[] = [
    { image: '/images/abt1.png' },
    { image: '/images/abt2.png' },
    { image: '/images/abt5.png' },
    { image: '/images/abt3.png' },
    { image: '/images/abt4.png' },
];



// Art section..
export interface ICheckStatement {
    statement: string;
}

const checkStatements: ICheckStatement[] = [
    { statement: 'Handpicked ingredients' },
    { statement: 'Signature techniques' },
    { statement: 'Bartending artistry in action' },
    { statement: 'Freshly muddled flavors' },
    { statement: 'Perfectly balanced blends' },
    { statement: 'Garnished to perfection' },
    { statement: 'Ice-cold every time' },
    { statement: 'Expertly shaken & stirred' },
    { statement: 'Sip-Worthy Perfection' },
];

// DrinkMenu section
export interface IDrinkImages {
    image: string;
}


const drinkImages: IDrinkImages[] = [
    { image: '/images/drink1.png' },
    { image: '/images/drink2.png' },
    { image: '/images/drink3.png' },
    { image: '/images/drink4.png' },
];


//exporting above arrays
export {
    popularDrinks,
    lovedDrinks,
    aboutImages,
    checkStatements,
    drinkImages
}