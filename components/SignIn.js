import { Auth } from "aws-amplify";
import SocialSignIn from "./SocialSignIn";
import Input from "./Input";

export default function SignIn({ onChange, setUiState, signIn }) {
  return (
    <div>
      <p className="text-3xl font-black">Sign in to your Account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-4">
        <label className="text-sm">
          Password
          <span
            onClick={() => setUiState("forgotPassword")}
            className="ml-8 sm:ml-48 text-pink-600"
          >
            Forgot your Password?
          </span>
        </label>
        <Input onChange={onChange} name="password" type="password" />
      </div>
      <button
        onClick={signIn}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Sign In
      </button>
      <SocialSignIn />
      <p className="mt-12 text-sm font-light">
        Don't have an account?
        <span
          onClick={() => setUiState("signUp")}
          role="button"
          className="cursor-pointer text-pink-600"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
