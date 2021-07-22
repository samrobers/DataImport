//TODO: Need to check on how to require Oracle schema/model info
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const profileSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    visitedParks: [
      {
        type: Schema.Types.ObjectId,
        ref: "BallPark",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// profileSchema.virtual("bookCount").get(function () {
//   return this.savedBooks.length;
// });

const Profile = model("Profile", profileSchema);

module.exports = Profile;
