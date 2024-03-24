import { useForm } from "react-hook-form";
import styles from "./DetailsForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

const DetailsForm = ({ submit, defaultValues = {}, formType = "Create" }) => {
  // const { categories } = useContext(CategoriesContext);
  // const { status } = useContext(StatusContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className={styles.TaskForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.TaskLine}>
        <label htmlFor="firstNameInput">First name</label>
        <input
          type="text"
          id="firstNameInput"
          {...register("firstName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="lastNameInput">Last name</label>
        <input
          type="text"
          id="lastNameInput"
          {...register("lastName")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="emailInput">Email Address</label>
        <input
          type="text"
          id="emailInput"
          {...register("email")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="mobileInput">Mobile Number</label>
        <input
          type="text"
          id="mobileInput"
          {...register("mobileNumber")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="addressInput">Address</label>
        <input
          type="text"
          id="addressInput"
          {...register("address")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="startDateInput">Employment Start Date</label>
        <input
          type="date"
          id="startDateInput"
          {...register("startDate")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label htmlFor="endDateInput">Employment End Date</label>
        <input
          type="date"
          id="endDateInput"
          {...register("endDate")}
          className={styles.Field}
        />
      </div>

      {/* <div className={styles.TaskLine}>
        <label>Category</label>
        <select {...register("categoryId")} className={styles.Field}>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div> */}
    </form>
  );
};

export default DetailsForm;
