import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

function Profile() {
  useEffect(() => {
    checkUser();
    async function checkUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user", { user });
    }
  }, []);
  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign in with Google
      </button>
      <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
        Sign in with Facebook
      </button>
    </div>
  );
}

export default Profile;
