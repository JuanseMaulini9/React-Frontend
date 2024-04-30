import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../services/authService";
import { AxiosResponse } from "axios";

export const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    age: 18,
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Username must have 6 letters minimun")
      .max(12, "Username must have 12 letters")
      .required("Username is required"),
    email: Yup.string()
      .email("invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("You must confirm your password"),
    age: Yup.number()
      .min(10, "You must be over 10 years old")
      .required("Age is required"),
  });

  return (
    <div>
      <h4>Register Form</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          register(values.email, values.password, values.name, values.age)
            .then((response: AxiosResponse) => {
              if (response.status === 200) {
                console.log("User register correcly");
                console.log(response.data);
              } else {
                throw new Error("Error in registry");
              }
            })
            .catch((error) =>
              console.error(`[REGISTER ERROR]: Something went wrong: ${error}`)
            );
        }}
      >
        {(formikProps) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name" placeholder="Pedro" />

            {formikProps.errors.name && formikProps.touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />

            {formikProps.errors.email && formikProps.touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />

            {formikProps.errors.password && formikProps.touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Confirm password</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="confirm password"
            />

            {formikProps.errors.confirm && formikProps.touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Age</label>
            <Field id="age" type="number" name="age" />

            {formikProps.errors.age && formikProps.touched.age && (
              <ErrorMessage name="age" component="div"></ErrorMessage>
            )}

            <button type="submit">Register</button>
            {formikProps.isSubmitting ? <p>Sending data...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};
