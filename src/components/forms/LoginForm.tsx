import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/authService";
import { AxiosResponse } from "axios";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          login(values.email, values.password).then((response: AxiosResponse)=>{
            if(response.status === 200){
              if(response.data.token){
                sessionStorage.setItem('sessionJWTToken', response.data.token)
              }else {
                throw new Error('Error generating: Invalid Token')
              }
            }else {
              throw new Error('Invalid Credentials')
            }
          }).catch(error=> console.error(`[LOGIN ERROR]: Something went wrong: ${error}`))
        }}
      >
        {(formikProps) => (
          <Form>
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
              placeholder="example"
            />

            {formikProps.errors.password && formikProps.touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <button type="submit">Login</button>
            {formikProps.isSubmitting ? <p>Checking credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};
