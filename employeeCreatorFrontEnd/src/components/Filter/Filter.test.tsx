import { render, screen } from "@testing-library/react";
import Filter from "./Filter";
import EmployeesContextProvider from "../../context/EmployeesContext";

const mockfunction = () => {
  return "mock";
};

describe("ListHeader tests", () => {
  it("should render the casual filter option", () => {
    render(
      <EmployeesContextProvider>
        <Filter
          toggleFilters={mockfunction}
          filterItem={"casual"}
          filterList={["casual", "part-time", "full-time"]}
          activeFilters={["casual", "part-time", "full-time"]}
          setActiveFilters={mockfunction}
        />
      </EmployeesContextProvider>
    );
    const filter = screen.getByText("casual");
    expect(filter).toBeInTheDocument();
  });

  it("should render the part-time filter options", () => {
    render(
      <EmployeesContextProvider>
        <Filter
          toggleFilters={mockfunction}
          filterItem={"part-time"}
          filterList={["casual", "part-time", "full-time"]}
          activeFilters={["casual", "part-time", "full-time"]}
          setActiveFilters={mockfunction}
        />
      </EmployeesContextProvider>
    );
    const filter = screen.getByText("part-time");
    expect(filter).toBeInTheDocument();
  });

  it("should render the full-time filter options", () => {
    render(
      <EmployeesContextProvider>
        <Filter
          toggleFilters={mockfunction}
          filterItem={"full-time"}
          filterList={["casual", "part-time", "full-time"]}
          activeFilters={["casual", "part-time", "full-time"]}
          setActiveFilters={mockfunction}
        />
      </EmployeesContextProvider>
    );
    const filter = screen.getByText("full-time");
    expect(filter).toBeInTheDocument();
  });
});
