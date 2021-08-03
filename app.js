//Arrays and Objects
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Antor",
//   age: 30,
// };
var person = {
    name: "Antor",
    age: 30,
    hobbies: ["Sports", "Coding"],
    role: [2, "author"]
};
var favaouriteActivites;
favaouriteActivites = ["Sports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
