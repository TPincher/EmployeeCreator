import { ToastContainer } from "react-toastify";
import "./App.scss";
import Page from "./containers/Page/Page";
import { useEffect } from "react";
import { getAllEmployees } from "./services/employee-service";
import { getAllEmploymentTypes } from "./services/type-service";

function App() {
  useEffect(() => {
    getAllEmployees().catch((e) => console.warn(e.message));
  }, []);

  useEffect(() => {
    getAllEmploymentTypes().catch((e) => console.warn(e.message));
  }, []);

  return (
    <main>
      <Page />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
      />
    </main>
  );
}

export default App;
