import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as yup from "yup";

const AuthPage = (props) => {
  const [data, setData] = useState(null);

  const apiLink = "https://admin.srkprojects.com/web/api/client/v1/contact-us/";

  const initialValues = {
    email: " ",
    name: " ",
    message: " ",
  };

  const validationSchema = yup.object({
    email: yup.string().email("should be a valid email"),
    message: yup
      .string()
      .min(5, "min 5 chars long")
      .max(20, "max should be 20 characters long"),
    name: yup
      .string()
      .min(3, "should be minimum 3 chars")
      .max(10, "should be max of 10 chars"),
  });

  const handleSubmit = (values) => {
    axios
      .post(apiLink, values)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center flex-col space-y-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5 mt-5 flex items-center flex-col ">
          <div className="text-center">
            <label htmlFor="email">Email: </label>

            <Field className="input" name="email" type="email" />
            <ErrorMessage name="email">
              {(err) => {
                return <p className="text-red-600">{err}</p>;
              }}
            </ErrorMessage>
          </div>

          <div className="text-center">
            <label htmlFor="message">Message: </label>
            <Field
              className="input"
              name="message"
              type="text"
              placeholder="some message"
            />
            <ErrorMessage name="message">
              {(err) => {
                return <p className="text-red-600">{err}</p>;
              }}
            </ErrorMessage>
          </div>

          <div className="text-center">
            <label htmlFor="name">Name: </label>
            <Field className="input" name="name" type="text" />
            <ErrorMessage name="name">
              {(err) => {
                return <p className="text-red-600">{err}</p>;
              }}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            className="bg-gray-500 px-5 w-40 py-3 rounded-md text-white font-medium hover:opacity-80"
          >
            Submit
          </button>
        </Form>
      </Formik>

      {/* response */}
      {data && (
        <div>
          <pre className="w-2/3 m-auto bg-black text-white p-5 rounded-lg">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
