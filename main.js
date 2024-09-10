const User = {
    name: "Loura",
    id: 2123,
    email: "Alfarsi.loura@gmail.com",
    address: {
        buildingNo: 9322,
        district: "Ghurnatah",
        city: {
            city1: "Riyadh",
            city2: "Jeddah"
        }
    },
    skills: ["Leadership","Team-work", "Self-learning"],
    availability: function(a){
       return a == "Available" ? true : false
    }
}

console.log(User);
console.log("Printing name: ",User.name);
User.id = 2222;
console.log("Changing id: ",User.id);
delete User.email
console.log("Deleting email: ",User);
console.log("Printing the availability :",User.availability("Available"));
console.log("Printing the address: ",User.address);
console.log("Printing one of the city keys: ",User.address.city.city2);
console.log("Printing index 2 of skills: ",User.skills[2]);
console.log("Printing the skills as string: ",User.skills.join(" , "));




