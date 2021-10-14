import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ConfirmSignUp from "../components/ConfirmSignUp";
import ForgotPassword from "../components/ForgotPassword";
import ForgotPasswordSubmit from "../components/ForgotPasswordSubmit";

const initialState = { email: "", password: "", authCode: "" };

function Profile() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        setUiState("signedIn");
      } catch (err) {
        setUser(null);
        setUiState("signIn");
      }
    }
  }, []);

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function signUp() {
    try {
    } catch (err) {
      console.log({ err });
    }
  }
  async function confirmSignUp() {
    try {
    } catch (err) {
      console.log({ err });
    }
  }
  async function signIn() {
    try {
    } catch (err) {
      console.log({ err });
    }
  }
  async function forgotPassword() {
    try {
    } catch (err) {
      console.log({ err });
    }
  }
  async function forgotPasswordSubmit() {
    try {
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            {uiState === "signUp" && (
              <SignUp onChange={onChange} setUiState={setUiState} />
            )}

            {uiState === "confirmSignUp" && (
              <ConfirmSignUp onChange={onChange} setUiState={setUiState} />
            )}

            {uiState === "signIn" && (
              <SignIn onChange={onChange} setUiState={setUiState} />
            )}
            {uiState === "signedIn" && (
              <div>
                <p className="text-xl">Welcome, {user.attributes.email}</p>
                <button
                  className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                  onClick={() => {
                    Auth.signOut();
                    setUiState("signIn");
                    setUser(null);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}

            {uiState === "forgotPassword" && (
              <ForgotPassword onChange={onChange} setUiState={setUiState} />
            )}
            {uiState === "forgotPasswordSubmit" && (
              <ForgotPasswordSubmit onChange={onChange} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
