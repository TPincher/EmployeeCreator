import { render, screen } from "@testing-library/react";
import ListHeader from "./ListHeader";

const mockfunction = () => {
  return "mock";
};

describe("ListHeader tests", () => {
  it("should render a heading", () => {
    render(
      <ListHeader
        headerTitle={"add"}
        setSearchTerm={mockfunction}
        filterList={["casual", "part-time", "full-time"]}
        activeFilters={["casual", "part-time", "full-time"]}
        setActiveFilters={mockfunction}
      />
    );
    const heading = screen.getByText(/add/);
    expect(heading).toBeInTheDocument();
    const heading2 = screen.getByText(/Filter/);
    expect(heading2).toBeInTheDocument();
  });
});
