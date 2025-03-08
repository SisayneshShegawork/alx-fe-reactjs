import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required")
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form submitted successfully", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 border rounded-md w-80 mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium">Username:</label>
            <Field
              type="text"
              name="username"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email:</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password:</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-xs" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
