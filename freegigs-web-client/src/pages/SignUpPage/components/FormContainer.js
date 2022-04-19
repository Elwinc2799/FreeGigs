import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import SignInNavigation from "./SignInNavigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 700px;
  width: 550px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;

const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`;

const TextFieldLabel = styled.label`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 600;
  margin-top: 15px;
`;

const TextFieldInput = styled.input`
  height: 37.5px;
  width: 100%;
  background-color: #FFFFFF;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  border-radius: 5px;
  padding: 0 0 0 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const SelectFieldInput = styled.select`
  height: 37.5px;
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 0 0 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  margin-top: 10px;
  -webkit-appearance: none;
`;

const SelectOption = styled.option`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
`;

const LowerColumn = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const SignUpButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: #4f46e5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const SignUpText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 600;
`;

const ErrorText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  color: red;
  font-weight: 700;
  margin-top: 5px;
`;

const TermsAndPolicy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12px;
  color: #acaaaa;
  font-weight: 600;
`;

const HighlightedText = styled.span`
  color: black;
  margin-left: 4px;
  margin-right: 4px;
`;

const FormContainer = () => {
  const navigate = useNavigate();

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: Yup.string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
    name: Yup.string().required("Please enter your name"),
    accountType: Yup.string().required("Please select your account type"),
  });

  return (
    <Container>
      <SignUpTitle>Create an account</SignUpTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          accountType: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          const body = {
            email: values.email,
            password: values.password,
            name: values.name,
            isProvider: values.isProvider,
          };
          try {
            const res = await axios.post("https://freegigs.herokuapp.com/auth/register", body);

            if (res.status === 201) {
              const success = true;

              navigate("/edituser", { state: {success} });
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <SignUpForm onSubmit={handleSubmit}>
              <TextFieldLabel>Email</TextFieldLabel>
              <TextFieldInput
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />

              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}

              <TextFieldLabel>Password</TextFieldLabel>
              <TextFieldInput
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
              />

              {errors.password && touched.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}

              <TextFieldLabel>Confirm Password</TextFieldLabel>
              <TextFieldInput
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword && touched.confirmPassword}
              />

              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorText>{errors.confirmPassword}</ErrorText>
              )}

              <TextFieldLabel>
                How would you like us to call you?
              </TextFieldLabel>
              <TextFieldInput
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
              />

              {errors.name && touched.name && (
                <ErrorText>{errors.name}</ErrorText>
              )}

              <TextFieldLabel>Account type</TextFieldLabel>
              <SelectFieldInput
                name="accountType"
                value={values.accountType}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
              >
                <SelectOption value="" label="Choose your account type" />
                <SelectOption value="user" label="User" />
                <SelectOption value="freelance" label="Freelance" />
              </SelectFieldInput>

              {errors.accountType && touched.accountType && (
                <ErrorText>{errors.accountType}</ErrorText>
              )}

              <LowerColumn>
                <SignUpButton type="submit" disabled={isSubmitting}>
                  <SignUpText>Sign Up</SignUpText>
                </SignUpButton>
              </LowerColumn>

              <TermsAndPolicy>
                By signing up, you agree to our
                <HighlightedText>Terms</HighlightedText> and
                <HighlightedText>Data Policy</HighlightedText>
              </TermsAndPolicy>
            </SignUpForm>
          );
        }}
      </Formik>

      <SignInNavigation />
    </Container>
  );
};

export default FormContainer;
