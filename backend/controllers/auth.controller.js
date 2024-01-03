import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = (req, res, next) => {
  try {
    const user = User.findOne(req.body.username);
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(404, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_SECRET
    );

    const { password, ...info } = user._doc;
    res.cookie("token", token, { httpOnly: true }).status(200).send(info);
  } catch (err) {
    next(err);
  }
};
export const logout = (req, res) => {
  res
    .clearCookie("token", { sameSite: none, secure: true })
    .status(200)
    .send("User has been logged out!");
};
