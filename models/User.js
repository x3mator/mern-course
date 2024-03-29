const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // ссылки, которые будут храниться в базе под данным пользователем
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("User", schema);
