const validationUtility = (data) => {
  const errors = {};
  if (!data.firstName.trim()) {
    errors.firstName = "FirstName is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "LastName is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password should be atleast 8 characters long";
  }

  return errors;
};

export default validationUtility;
