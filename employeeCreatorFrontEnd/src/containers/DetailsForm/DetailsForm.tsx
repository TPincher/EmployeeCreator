import { useForm } from "react-hook-form";
import styles from "./DetailsForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useContext, useEffect } from "react";
import { EmploymentTypesContext } from "../../context/EmploymentTypesContext";
import { ActiveEmployeeContext } from "../../context/ActiveEmployeeContext";

const DetailsForm = ({ submit, formType = "Create" }) => {
  const { activeEmployee } = useContext(ActiveEmployeeContext);
  const { employmentTypes } = useContext(EmploymentTypesContext);

  useEffect(() => {
    console.log(activeEmployee);
  }, [activeEmployee]);

  let preloadedValues = {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
      <div className={styles.TaskLine}>
        <label htmlFor="firstNameInput">First name</label>
        <input
          type="text"
          id="firstNameInput"
          defaultValue={preloadedValues.firstName}
          {...register("firstName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="lastNameInput">Last name</label>
        <input
          type="text"
          defaultValue={preloadedValues.lastName}
          id="lastNameInput"
          {...register("lastName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="emailInput">Email Address</label>
        <input
          type="text"
          defaultValue={preloadedValues.email}
          id="emailInput"
          {...register("email")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="mobileInput">Mobile Number</label>
        <input
          type="number"
          defaultValue={preloadedValues.mobileNumber}
          id="mobileInput"
          {...register("mobileNumber")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="addressInput">Address</label>
        <input
          type="text"
          defaultValue={preloadedValues.address}
          id="addressInput"
          {...register("address")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="startDateInput">Employment Start Date</label>
        <input
          type="date"
          defaultValue={preloadedValues.startDate}
          id="startDateInput"
          {...register("startDate")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="endDateInput">Employment End Date</label>
        <input
          type="date"
          defaultValue={preloadedValues.endDate}
          id="endDateInput"
          {...register("endDate")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Employment Type</label>
        <select
          defaultValue={preloadedValues.employmentType}
          {...register("employmentType")}
        >
          {employmentTypes.map((employmentType: any) => (
            <option key={employmentType.id} value={employmentType.id}>
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
          className={styles.Field}
        />
      </div>

      <button>
        {formType === "Create" ? "Add new employee" : "Update Task"}
      </button>
    </form>
  );
};

export default DetailsForm;
