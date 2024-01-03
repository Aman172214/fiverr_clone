import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next(createError(401, "You are not logged in!"));

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return next(createError(403, "Token is invalid!"));
    req.userid = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
