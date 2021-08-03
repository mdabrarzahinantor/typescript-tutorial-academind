//Arrays,Objects,Tuples and Enum
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Antor",
//   age: 30,
// };
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Antor",
//   age: 30,
//   hobbies: ["Sports", "Coding"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Antor",
    age: 30,
    hobbies: ["Sports", "Coding"],
    role: Role.ADMIN
};
var favaouriteActivites;
favaouriteActivites = ["Sports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
