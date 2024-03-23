import { toast } from "react-toastify";

export interface employmentType {
  id: number;
  name: string;
}

const successNotify = (message: String) => toast.success(message);
const failNotify = (message: String) => toast.error(message);

export const getAllEmploymentTypes = async () => {
  const response = await fetch("http://localhost:8080/employmenttype");
  if (!response.ok) {
    failNotify("Failed to get types");
    throw new Error("Failed to get types");
  }
  const typeData = await response.json();
  console.log(typeData);
  return typeData;
};

export const addEmploymentType = async (typeData: any) => {
  const response = await fetch("http://localhost:8080/employmenttype", {
    method: "POST",
    body: JSON.stringify(typeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to add type");
    throw new Error("Failed to add type");
  }
  successNotify("type added!");
  return response.json();
};
