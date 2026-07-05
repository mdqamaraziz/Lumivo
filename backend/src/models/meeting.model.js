import mongoose from "mongoose";
const { Schema } = mongoose;

const meetingSchema = new Schema({
  userID: { type: String },
  meetingCode: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

const Meeting = mongoose.model("Meeting", meetingSchema);
export { Meeting };
