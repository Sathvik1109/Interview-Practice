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

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  isActive: boolean;
}

interface EmployeeResponse {
  employees: Employee[];
  total: number;
}

async function getEmployees(): Promise<EmployeeResponse> {
  const response = await fetch(`/api/employees`);
  const data = await response.json();

  return data;
}
