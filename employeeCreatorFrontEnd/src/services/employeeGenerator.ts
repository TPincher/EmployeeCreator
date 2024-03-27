import { Employee, addEmployee } from "./employee-service";

export const testEmployees: Employee[] = [
  {
    firstName: "Ramona",
    lastName: "Trujillo",
    email: "RamonaJTrujillo@jourrapide.com",
    mobileNumber: 453227114,
    address: "70 Shell Road Skenes Creek VIC 3233",
    startDate: new Date("01-04-2024"),
    endDate: new Date("01-04-2024"),
    employmentType: 3,
    currentlyEmployed: true,
  },
  {
    firstName: "Manuel",
    lastName: "Brown",
    email: "ManuelSBrown@teleworm.us",
    mobileNumber: 495773047,
    address: "22 Carolina Park Road BAY VILLAGE NSW 2485",
    startDate: new Date("03-01-2024"),
    endDate: new Date("02-05-2024"),
    employmentType: 2,
    currentlyEmployed: true,
  },
  {
    firstName: "Maryam",
    lastName: "Lawrence",
    email: "MaryamLawrence@jourrapide.com",
    mobileNumber: 467385434,
    address: "95 Plug Street MAYBOLE NSW 2365",
    startDate: new Date("07-12-2022"),
    endDate: new Date("09-09-2024"),
    employmentType: 2,
    currentlyEmployed: true,
  },
  {
    firstName: "Pat",
    lastName: "Reeves",
    email: "PatJReeves@armyspy.com",
    mobileNumber: 449072137,
    address: "10 Butler Crescent PAYNES CROSSING NSW 2325",
    startDate: new Date("07-02-2024"),
    endDate: new Date("11-12-2024"),
    employmentType: 1,
    currentlyEmployed: true,
  },
  {
    firstName: "Larry",
    lastName: "Roberts",
    email: "LarryJRoberts@armyspy.com",
    mobileNumber: 445922584,
    address: "44 Bapaume Road WOODLEIGH QLD 4352 ",
    startDate: new Date("01-08-2022"),
    endDate: new Date("08-04-2023"),
    employmentType: 1,
    currentlyEmployed: true,
  },
];

export const EmployeeGenerator = async (data: Employee[]) => {
  data.map((employee: Employee) => {
    console.log(employee);
    addEmployee(employee);
  });
};
