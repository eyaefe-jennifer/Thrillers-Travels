/** @format */

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormField = () => {
  const initialValues = {
    depart: "",
    arrive: "",
    depatureDate: "",
    returnDate: "",
    class: "",
    passengers: "",
  };

  const validationSchema = Yup.object({
    depart: Yup.string().required("depart is required"),
    arrive: Yup.string().required("arrive is required"),
    depatureDate: Yup.string().required("choose  depature date"),
    returnDate: Yup.string().required("choose  return date"),
    class: Yup.string().required("make a selection"),
    passengers: Yup.number().required("choose number of passenger"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("submitted", values);
    resetForm();
  };

  return (
    <div className="mt-8">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className="">
              <label
                htmlFor=""
                className="text-dark-blue font-normal font-mono"
              >
                Depart from
              </label>
              <Field
                placeholder="Enter your depature location"
                type="text"
                name="depart"
                className="w-[360px] h-10 border-2 rounded pl-2"
              />
              <ErrorMessage name="depart" component="span" />
            </div>
            <div className=" mt-2">
              <label
                htmlFor=""
                className="text-dark-blue font-normal font-mono"
              >
                Arrive at
              </label>
              <Field
                placeholder="Enter Your Destination"
                type="text"
                name="arrive"
                className="w-[360px] h-10 border-2 rounded pl-2"
              />
              <ErrorMessage name="arrive" component="span" />
            </div>
            <div className="flex mt-2">
              <div className="depature-date">
                <label
                  htmlFor=""
                  className="text-dark-blue font-normal font-mono"
                >
                  Departure Date
                </label>
                <Field
                  placeholder=""
                  type="date"
                  name="depatureDate"
                  className=" w-40 h-10 border-2 rounded"
                />
                <ErrorMessage name="departureDate" component="span" />
              </div>
              <div className="return">
                <label
                  htmlFor=""
                  className="text-dark-blue font-normal font-mono"
                >
                  Return Date
                </label>
                <Field
                  placeholder=""
                  type="date"
                  name="returnDate"
                  className=" w-40 h-10 border-2 rounded"
                />{" "}
                <br />
                <ErrorMessage name="returnDate" component="span" />
              </div>
            </div>
            <div className="flex mt-2">
              <div className="flex-1 w-72">
                <label
                  htmlFor=""
                  className="text-dark-blue font-normal font-mono"
                >
                  Class
                </label>
                <Field
                  name="class"
                  as="select"
                  className=" w-52 h-10 border-2 rounded"
                >
                  <option value="Economic">Economic</option>
                  <option value="Economic">Economic</option>
                  <option value="First class">First Class</option>
                  <option value="Business">Business</option>
                </Field>
                <ErrorMessage name="class" component="span" />
              </div>
              <div className="flex-initial w-40 pl-5">
                <label
                  htmlFor=""
                  className="text-dark-blue font-normal font-mono"
                >
                  Passengers
                </label>
                <Field
                  placeholder=""
                  name="passengers"
                  type="number"
                  className=" w-28 h-10 border-2 rounded"
                />
                <ErrorMessage name="passengers" component="span" />
              </div>
            </div>
            <button
              type="submit"
              className={` " bg-blue mt-8 mb-3 w-[360px] p-3 rounded-md text-white font-bold " ${
                formik.dirty && formik.isValid ? " bg-blue " : " bg-dark-blue"
              }`}
              disabled={!(formik.dirty && formik.isValid)}
            >
              Find Flight
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormField;
