import { useForm } from "react-hook-form";
import styles from "./DetailsForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useContext, useEffect } from "react";
import { EmploymentTypesContext } from "../../context/EmploymentTypesContext";
import { ActiveEmployeeContext } from "../../context/ActiveEmployeeContext";
import { ModeContext } from "../../context/ModeContext";
import { EmployeesContext } from "../../context/EmployeesContext";

const DetailsForm = ({ submit }) => {
  const activeEmployeeContext = useContext(ActiveEmployeeContext);
  const employmentTypesContext = useContext(EmploymentTypesContext);
  const employeesContext = useContext(EmployeesContext);
  const modeContext = useContext(ModeContext);

  if (
    !activeEmployeeContext ||
    !employmentTypesContext ||
    !employeesContext ||
    !modeContext
  ) {
    return <div>Error: Context data not available</div>;
  }

  const { activeEmployee } = activeEmployeeContext;
  const { employmentTypes } = employmentTypesContext;
  const { employees } = employeesContext;
  const { mode } = modeContext;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (activeEmployee) {
      reset({
        id: activeEmployee.id || "",
        firstName: activeEmployee.firstName || "",
        lastName: activeEmployee.lastName || "",
        email: activeEmployee.email || "",
        mobileNumber: activeEmployee.mobileNumber || "",
        address: activeEmployee.address || "",
        startDate: activeEmployee.startDate || "",
        endDate: activeEmployee.endDate || "",
        employmentType: activeEmployee.employmentType.id || "",
        currentlyEmployed: activeEmployee.currentlyEmployed || "",
      });
    }

    if (mode === "add") {
      reset({
        id: "",
        firstName: "enter first name",
        lastName: "enter last name",
        email: "enter email",
        mobileNumber: 400000000,
        address: "enter address",
        startDate: "",
        endDate: "",
        employmentType: "",
        currentlyEmployed: "",
      });
    }
  }, [activeEmployee, employees, reset, mode]);

  let preloadedValues = {
    idNumber: activeEmployee?.id || "",
    firstName: activeEmployee?.firstName || "",
    lastName: activeEmployee?.lastName || "",
    email: activeEmployee?.email || "",
    mobileNumber: activeEmployee?.mobileNumber || "",
    address: activeEmployee?.address || "",
    startDate: activeEmployee?.startDate || "",
    endDate: activeEmployee?.endDate || "",
    employmentType: activeEmployee?.employmentType.id || "",
    currentlyEmployed: activeEmployee?.currentlyEmployed || "",
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
      <div className={styles.TaskLine}>
        <label htmlFor="IDInput">ID:</label>
        <input
          type="text"
          id="IDInput"
          defaultValue={preloadedValues.idNumber}
          {...register("id")}
          disabled
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="firstNameInput">First name:</label>
        <input
          type="text"
          id="firstNameInput"
          defaultValue={preloadedValues.firstName}
          {...register("firstName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="lastNameInput">Last name:</label>
        <input
          type="text"
          defaultValue={preloadedValues.lastName}
          id="lastNameInput"
          {...register("lastName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="emailInput">Email Address:</label>
        <input
          type="text"
          defaultValue={preloadedValues.email}
          id="emailInput"
          {...register("email")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="mobileInput">Mobile Number:</label>
        <input
          type="number"
          defaultValue={preloadedValues.mobileNumber}
          id="mobileInput"
          {...register("mobileNumber")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="addressInput">Address:</label>
        <input
          type="text"
          defaultValue={preloadedValues.address}
          id="addressInput"
          {...register("address")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="startDateInput">Contract Start Date:</label>
        <input
          type="date"
          defaultValue={preloadedValues.startDate}
          id="startDateInput"
          {...register("startDate")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="endDateInput">Contract End Date:</label>
        <input
          type="date"
          defaultValue={preloadedValues.endDate}
          id="endDateInput"
          {...register("endDate")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Employment Type:</label>
        <select
          defaultValue={preloadedValues.employmentType}
          {...register("employmentType")}
        >
          {employmentTypes.map((employmentType: any) => (
            <option
              key={employmentType.id}
              value={employmentType.id}
              className={styles.optionSelector}
            >
              {employmentType.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="activeSelector">Currently active?</label>
        <input
          type="checkbox"
          defaultValue={preloadedValues.currentlyEmployed}
          id="activeSelector"
          {...register("currentlyEmployed")}
          className={styles.checkbox}
        />
      </div>

      {(mode === "add" || mode === "edit" || mode === "delete") && (
        <button className={styles.formButton}>
          {mode === "add" && "Add new employee"}
          {mode === "edit" && "edit employee details"}
          {mode === "delete" && "delete employee"}
        </button>
      )}
    </form>
  );
};

export default DetailsForm;
