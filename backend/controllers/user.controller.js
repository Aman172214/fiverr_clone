import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = User.findOne(req.params.id);

  if (payload.userId !== user._id.toString()) {
    return next(createError(403, "Not authorized!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted!");
};

export const getUser = async (req, res, next) => {
  const user = User.findOne(req.params.id);
  res.status(200).send(user);
};
