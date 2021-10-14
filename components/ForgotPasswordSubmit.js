import Input from "./Input";

export default function ForgotPasswordSubmit({
  onChange,
  forgotPasswordSubmit,
}) {
  return (
    <div>
      <p className="text-3xl font-black">Confirm New Password</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>

      <div className="mt-10">
        <label className="text-sm">New Password</label>
        <Input type="password" onChange={onChange} name="password" />
      </div>

      <button
        onClick={forgotPasswordSubmit}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Submit New Password
      </button>
    </div>
  );
}
