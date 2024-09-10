// Lab 1
const User = {
  name: "Loura",
  id: 2123,
  email: "Alfarsi.loura@gmail.com",
  address: {
    buildingNo: 9322,
    district: "Ghurnatah",
    city: {
      city1: "Riyadh",
      city2: "Jeddah",
    },
  },
  skills: ["Leadership", "Team-work", "Self-learning"],
  availability: function (a) {
    return a == "Available" ? true : false;
  },
};

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

// Lab 2

characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];
// 1
console.log(
  "First name that has blue eyes: ",
  characters.find((e) => e.eye_color == "blue")
);
// 2
console.log(
  "First male with mass over 50: ",
  characters.find((e) => e.mass > 50 && e.gender == "male")
);
// 3
console.log(
  "Characters with height less than 200: ",
  characters.filter((e) => e.height < 200)
);
//   4
console.log(
  "All male characters ",
  characters.filter((e) => e.gender == "male")
);
//   5
console.log(
  "Names only: ",
  characters.map((e) => e.name)
);
//   6
console.log(
  "Heights only: ",
  characters.map((e) => e.height)
);
//   7
console.log(
  "Sorted by mass (low to high)",
  characters.sort((a, b) => a.mass - b.mass)
);
//   8
console.log(
  "Sorted by height (high to low)",
  characters.sort((a, b) => b.height - a.height)
);
//   9
console.log(
  "Does every character have mass more than 40? ",
  characters.every((e) => e.mass > 40)
);
//   10
console.log(
  "Does every character have height shorter than 200? ",
  characters.every((e) => e.height < 200)
);
//   11
console.log(
  "Is there one character with blue eyes?  ",
  characters.some((e) => e.eye_color == "blue")
);
//   12
console.log(
  "Is there one character taller than 200?  ",
  characters.some((e) => e.height > 210)
);
