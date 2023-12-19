import { useFormik } from "formik";

let initialValues = {
  name: "",
  email: "",
};

let onSubmit = (values) => {
  console.log(values);
};

let validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

let SignUp = () => {
  let formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.values);
  console.log(formik.errors);

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <form onSubmit={formik.handleSubmit}>
        <div className="sm:col-span-3">
          <label
            htmlFor="name"
            
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {formik.errors.name ? <span className="text-red-600">{formik.errors.name}</span> : null}
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={formik.handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {formik.errors.email ? <span className="text-red-600">{formik.errors.email}</span> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
