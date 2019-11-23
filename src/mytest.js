var senData;
try {
   senData = require('./data/senators');
} catch ( err ) {
   console.log("File not found: senators.json");
};

const totalReps=0;
const totalDems=0;
const totalIndp=0;

const republicans = () => {
   let reps = senData.filter(function(senetor) {
      return senetor.party === "female";
    });
      return reps;
 }

 
 const reducedCount = () => {


   
      const totalR = senData.reduce((a, b) => {
              if (b.party === "Republican") {
                  a++;
              }
              return a;
          });
      
      return totalR; 
 
 
 }

 const records = [{
   value: 24,
   gender: "BOYS"
 },
 {
   value: 42,
   gender: "BOYS"
 },
 {
   value: 85,
   gender: "GIRLS"
 },
 {
   value: 12,
   gender: "GIRLS"
 },
 {
   value: 10,
   gender: "BOYS"
 }
];

function someFunction() {
   const results = {
      republican: 0,
      democrat: 0,
      independent: 0
   }
  results.republican = senData.reduce(function(sum, senetor) {
      if  (senetor.party == "Republican") { sum++}
      return sum;
      }, 0);
  
   results.democrat = senData.reduce(function(sum, senetor) {
      if  (senetor.party == "Democrat") { sum++}
      return sum;
      }, 0);
  
   results.independent = senData.reduce(function(sum, senetor) {
      if  (senetor.party == "Independent") { sum++}
      return sum;
      }, 0);
  
   return results; 
};

var arr = [{
   id: 1,
   name: 'bill'
 }, {
   id: 2,
   name: 'ted'
 }]
 
const mapping = () => {
   var result = senData.map(senetor => ({ firstName: senetor.person.firstname , 
     lastName: senetor.person.lastname,
     party: senetor.party,
     gender: senetor.person.gender
    }));
    return result;
 }
 console.log(mapping());







 
