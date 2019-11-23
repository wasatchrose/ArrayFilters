import Senators from './data/senators';
var senData;

try {
   senData = require('./data/senators');
} catch ( err ) {
   console.log("File not found: senators.json");
}


export const republicans = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.party === "Republican";
  });
 return reps;
}

export const democrats = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.party === "Democrat";
  });
 return reps;
}

export const independents = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.party === "Independent";
  });
 return reps;
}

export const males = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.person.gender === "male";
  });
 return reps;
}

export const females = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.person.gender === "female";
  });
 return reps;
}

export const byState = () => {
  let reps = senData.filter(function(senetor) {
    return senetor.state === "UT";
  });
  return reps;
}

export const mapping = () => {
  var result = senData.map(senetor => ({ firstName: senetor.person.firstname , 
    lastName: senetor.person.lastname,
    party: senetor.party,
    gender: senetor.person.gender
   }));
   return result;
}

export const reducedCount = () => {
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

    console.log(results);
 return results;   
}

const REPLACE_ME_WITH_CODE = false



