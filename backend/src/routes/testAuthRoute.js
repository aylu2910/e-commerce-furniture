import jwt from "jsonwebtoken";
export const testAuthRoute = {
  path: "/api/test-auth",
  method: "get",
  handler: async (req, res) => {
    console.log("Received GET request on api/test-auth");

    // Check if the user is authenticated
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];
    console.log("Token:", token);
    if (!auth) return res.sendStatus(401);

    if (!token) return res.sendStatus(401);

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log("User authenticated:", payload.email);
      res.status(200).json({ message: "You are authenticated" });
    } catch (err) {
      console.error("Error verifying token:", err);
      return res.sendStatus(403);
    }
  },
};
