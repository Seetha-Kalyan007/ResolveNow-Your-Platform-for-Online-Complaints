const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const ComplaintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: [String],
  status: { type: String, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [MessageSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
