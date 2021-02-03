
const user = { 
    id: "430",
 name: "baker",
 lover: {
     Name: "niha",
     hobby: "prem kora"
 },
 friendsAge: [15, 17, 16],
 friends: ["joy", "boy", "koy"]
};
// {"id":"430","name":"baker"}
const userJSON = JSON.stringify(user);
console.log(userJSON);
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);