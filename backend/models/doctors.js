import mongoose from "mongoose";
const slotSchema=new mongoose.Schema({
    startTime:
    {
        type:String,
        required:true
    },
    endTime:
    {
        type:String,
        required:true
    }
})
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    specialization: {
      type: String,
      required: true
    },
    experience: {
      type: Number,
      required: true
    },
    qualification: {
      type: String,
      required: true
    },
    consultationFee: {
      type: Number,
      required: true
    },
    hospitalName: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      required: true
    },
    availableDays: [
      {
        type: String
      }
    ],
    availableSlots: [slotSchema],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);
const doctors= mongoose.model("Doctor", doctorSchema);
export default doctors