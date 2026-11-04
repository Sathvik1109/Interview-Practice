function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value);
  }
}

printValue("hello");
printValue(100);

function example<T extends { length: number }>(value: T): number {
  return value.length;
}

example([1, 2, 3, 4]);
