import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { employmentType } from "./type-service";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
  address: string;
  startDate: Date;
  endDate: Date;
  employmentType: employmentType;
}

const successNotify = (message: String) => toast.success(message);
const failNotify = (message: String) => toast.error(message);

export const getAllEmployees = async () => {
  const response = await fetch("http://localhost:8080/employees");
  if (!response.ok) {
    failNotify("Failed to get tasks");
    throw new Error("Failed to get tasks");
  }
  const employeeData = await response.json();
  console.log(employeeData);
  return employeeData;
};

export const addEmployee = async (EmployeeData: any) => {
  const response = await fetch("http://localhost:8080/employees", {
    method: "POST",
    body: JSON.stringify(EmployeeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to add employee");
    throw new Error("Failed to add employee");
  }
  successNotify("Employee added!");
  return response.json();
};

export const editEmployee = async (id: number, employeeData: any) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "PATCH",
    body: JSON.stringify(employeeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to edit employee details");
    throw new Error("Failed to edit employee details");
  }
  successNotify("Employee details edited");
  return response.json();
};

export const deleteEmployee = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    failNotify("Failed to delete employee");
    throw new Error("Failed to delete employee");
  }
  successNotify("Employee deleted");
  return null;
};
