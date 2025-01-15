import React, { useEffect, useState } from "react";
import styles from "./FormItem.module.css";
import { useForm } from "react-hook-form";
import {emailValidation, requiredValidation,} from "../../../services/validations";


const FormItem = () => {
  const [value,setValue] = useState()
  const {register,handleSubmit,watch,formState: { errors },} = useForm({mode:'onChange'});

  const handleRegistration = (data) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={styles.mainBox}>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <label htmlFor="name">
          First Name
          <input
            type="text"
            id="name"
            placeholder="Nune"
            {...register("firstName", requiredValidation)}
          />
          {!errors?.firstName && watch('firstName')?
          <span className={styles.arrow}>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83125 0.890137L11.1712 1.83014L5.36125 10.2101H4.02125L0.78125 5.67014L2.12125 4.42014L4.69125 6.82014L9.83125 0.890137Z"
                fill="black"
              />
            </svg>
          </span>: null
           }
          <span>{errors?.firstName?.message}</span>
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            placeholder="Hovakimyan"
            {...register("lastName", requiredValidation)}
          />
          {!errors?.lastName && watch("lastName") ? (
            <span className={styles.arrow}>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.83125 0.890137L11.1712 1.83014L5.36125 10.2101H4.02125L0.78125 5.67014L2.12125 4.42014L4.69125 6.82014L9.83125 0.890137Z"
                  fill="black"
                />
              </svg>
            </span>
          ) : null}
          <span>{errors?.lastName?.message}</span>
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            placeholder="+374 94444912"
            {...register("phone", requiredValidation)}
          />
          {!errors?.phone && watch("phone")?
          <span className={styles.arrow}>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83125 0.890137L11.1712 1.83014L5.36125 10.2101H4.02125L0.78125 5.67014L2.12125 4.42014L4.69125 6.82014L9.83125 0.890137Z"
                fill="black"
              />
            </svg>
          </span> : null
}
          <span>{errors?.phone?.message}</span>
        </label>
        <label htmlFor="emailAddress*">
          Email Address*
          <input
            type="text"
            id="emailAddress*"
            placeholder="nunehovakimyan2@gmail.com"
            {...register("email", emailValidation)}
          />
          {!errors?.email?.message && watch("email")?
          <span className={styles.arrow}>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83125 0.890137L11.1712 1.83014L5.36125 10.2101H4.02125L0.78125 5.67014L2.12125 4.42014L4.69125 6.82014L9.83125 0.890137Z"
                fill="black"
              />
            </svg>
          </span> : null
}
          <span>{errors?.email && errors.email.message}</span>
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" placeholder="How to apply?"></textarea>
        </label>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default FormItem;
