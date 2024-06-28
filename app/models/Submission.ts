import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String },
  experience: { type: Number, required: true },
  currentCTC: { type: Number, required: true },
  expectedCTC: { type: Number, required: true },
  noticePeriod: { type: Number, required: true },
  selectedJob: { type: String, required: true },
  resume: { type: String, required: true },
});

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);
