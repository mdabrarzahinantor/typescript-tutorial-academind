//Arrays,Objects,Tuple,Any and Enum

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

enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Antor",
  age: 30,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};

let favaouriteActivites: string[];
favaouriteActivites = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
