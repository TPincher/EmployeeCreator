import { render, screen } from "@testing-library/react";
import { testEmployees } from "../../services/employeeGenerator";
import ActiveEmployeeContextProvider from "../../context/ActiveEmployeeContext";
import EmployeesContextProvider from "../../context/EmployeesContext";
import ListEmployee from "./ListEmployee";

const tester = testEmployees[0];

describe("ListEmployee tests", () => {
  it("should render an employee's details in id, lastname, firstname format", () => {
    render(
      <ActiveEmployeeContextProvider>
        <EmployeesContextProvider>
          <ListEmployee
            key={0}
            id={5}
            employeeID={5}
            firstName={tester.firstName}
            lastName={tester.lastName}
          />
        </EmployeesContextProvider>
      </ActiveEmployeeContextProvider>
    );
    const displayed = screen.getByText("Employee 5 - trujillo, ramona");
    expect(displayed).toBeInTheDocument();
  });
});
