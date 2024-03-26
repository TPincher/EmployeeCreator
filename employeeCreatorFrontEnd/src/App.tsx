import { ToastContainer } from "react-toastify";
import "./App.scss";
import Page from "./containers/Page/Page";
import { useEffect } from "react";
import { getAllEmployees } from "./services/employee-service";
import { getAllEmploymentTypes } from "./services/type-service";
import EmployeesContextProvider from "./context/EmployeesContext";
import EmploymentTypesContextProvider from "./context/EmploymentTypesContext";
import ActiveEmployeeContextProvider from "./context/ActiveEmployeeContext";
import ModeContextProvider from "./context/ModeContext";

function App() {
  useEffect(() => {
    getAllEmployees().catch((e) => console.warn(e.message));
  }, []);

  useEffect(() => {
    getAllEmploymentTypes().catch((e) => console.warn(e.message));
  }, []);

  return (
    <ModeContextProvider>
      <EmployeesContextProvider>
        <EmploymentTypesContextProvider>
          <ActiveEmployeeContextProvider>
            <main>
              <Page />
              <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
              />
            </main>
          </ActiveEmployeeContextProvider>
        </EmploymentTypesContextProvider>
      </EmployeesContextProvider>
    </ModeContextProvider>
  );
}

export default App;
