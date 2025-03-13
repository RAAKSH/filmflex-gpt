export const validateFormInput = (password, email) => {
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  if (!isEmailValid) return "Email is not valid";
  else if (!isPasswordValid) return "Password is not valid";
  else if (!isEmailValid && !isPasswordValid)
    return "Email and Password is not valid";
  else return;
};
