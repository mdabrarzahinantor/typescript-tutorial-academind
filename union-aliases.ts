//Type
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
//Union Types

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(10, 20, "as-number");
console.log(combineAges);

const combineStringAges = combine("10", "20", "as-number");
console.log(combineAges);

const combineNames = combine("MAX", "NUM", "as-text");
console.log(combineNames);
