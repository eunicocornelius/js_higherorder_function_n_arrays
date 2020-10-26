const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Regular for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// --------------------------------------------------------------------------------------------forEach
// companies.forEach(function (company) {
//   console.log(company);
// });

// --------------------------------------------------------------------------------------------filter
// ===============Get age 21 and older========================

// Normal way
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// ES5 way
// const canDrinkFilter = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrinkFilter);

// ES6 way
const canDrinkFilterArrow = ages.filter((age) => age >= 21);
// console.log(canDrinkFilterArrow);
document.getElementById('canDrink').innerHTML = canDrinkFilterArrow;

// ===============Filter retail companies======================

// ES5 way
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });
// console.log(retailCompanies);

// ES6 way
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
const companyNames = [];
retailCompanies.forEach(function (company) {
  companyNames.push(company.name);
});

document.getElementById('retailCompanies').innerHTML = companyNames;
// console.log(retailCompanies.name);

// ================Get 80s Companies============================
// ES6 way
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// =================Companies Lasted 10 years===================
// ES6 way
// const lastedTenYearsCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYearsCompanies);

// --------------------------------------------------------------------------------------------map
// =================Create Array of Company Names===================
// ES5 way
// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

//ES6 way
// const companyNames = companies.map(
//   (company) => `${company.name} [${company.start}-${company.end}]`
// );
// console.log(companyNames);

// =================Create Array of Squared Ages===================
// ES6 way
// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesSquare);
// console.log(agesTimesTwo);

// const agesSquareTimesTwo = ages
//   .map((age) => Math.sqrt(age))
//   .map((age) => age * 2);
// console.log(agesSquareTimesTwo);

// --------------------------------------------------------------------------------------------sort
// =================Sort Companies by start year===================
// ES6 way
// const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortCompanies);

// ==========================Sort Ages=============================
// ES6 way
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// --------------------------------------------------------------------------------------------reduce
// ==========================Add Ages=============================
// Normal way
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// ES5 way
// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// ES6 way
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// ==========================Get Total year for all company=============================
// ES6 way
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// ------------------------------------------------------------------------------------------combined

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
