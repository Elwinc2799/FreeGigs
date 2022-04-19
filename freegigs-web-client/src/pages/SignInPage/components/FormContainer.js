import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import SignUpNavigation from "./SignUpNavigation";
import { login } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 500px;
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

const SignInTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;

const SignInForm = styled.form`
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
  background-color: white;
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

const ForgotYourPasswordText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  margin: 7.5px 0px;
  cursor: pointer;
  opacity: 0.5;
`;

const LowerColumn = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5px;
`;

const SignInButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: #4f46e5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const SignInText = styled.div`
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
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Container>
      <SignInTitle>Log in to your account</SignInTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          const email = values.email;
          const password = values.password;
          login(dispatch, { email, password });
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
            <SignInForm onSubmit={handleSubmit}>
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

              <ForgotYourPasswordText>
                Forgot your password?
              </ForgotYourPasswordText>

              <LowerColumn>
                <SignInButton
                  type="submit"
                  disabled={isSubmitting && isFetching}
                >
                  <SignInText>Sign In</SignInText>
                </SignInButton>
              </LowerColumn>

              <TermsAndPolicy>
                By signing in, you agree to our
                <HighlightedText>Terms</HighlightedText> and
                <HighlightedText>Data Policy</HighlightedText>
              </TermsAndPolicy>
            </SignInForm>
          );
        }}
      </Formik>

      <SignUpNavigation />
    </Container>
  );
};

export default FormContainer;
