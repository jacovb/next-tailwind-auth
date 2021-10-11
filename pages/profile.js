import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";

const initialState = { email: "", password: "", authCode: "" };

function Profile() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user", { user });
    }
  }, []);

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign in with Google
      </button>
      <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
        Sign in with Facebook
      </button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Profile;
