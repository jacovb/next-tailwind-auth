import { withSSRContext } from "aws-amplify";

export default async function handler(req, res) {
  const { Auth } = withSSRContext({ req });
  const user = await Auth.currentAuthenticatedUser();
  console.log("User: ,", user);
  res.status(200).json({ name: user });
}
