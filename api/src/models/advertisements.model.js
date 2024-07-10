import mongoose from "mongoose";

const advertisementsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String,
      required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    section: {
      type: String,
      required: true,
      enum: ['section1', 'section2', 'section3', 'section4'] 
    }
  }, 
  { timestamps: true });

const Advertisements = mongoose.model("advertisements", advertisementsSchema);

export default Advertisements;
