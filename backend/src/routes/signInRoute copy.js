import { getDBConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpRoute = {
  path: "api/signup",
  method: "post",
  handler: async (req, res) => {
    console.log("Received POST request on api/signup");
    const { email, password } = req.body;
    if (!email || !password) return res.sendStatus(400);
    console.log("Email:", email);
    console.log("Password:", password);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const db = getDBConnection("ecommerce");
    const result = await db
      .collection("users")
      .insertOne({ email, hashedPassword });

    if (!result) return res.sendStatus(500);

    const { insertedId } = result;
    jwt.sign(
      { uid: insertedId, email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          console.error("Error signing token:", err);
          return res.status(500).send(err.message);
        }
        res.status(201).json({ token });
      }
    );

    console.log("Inserted user with ID:", insertedId);

    return res.sendStatus(201);
  },
};
