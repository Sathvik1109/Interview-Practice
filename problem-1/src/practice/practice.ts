function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value);
  }
}

printValue("hello");
printValue(100);
