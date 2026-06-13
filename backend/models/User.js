const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedProducts: [{
    type: String, // Storing the product ID from frontend
  }],
  orders: [{
    items: Array,
    total: Number,
    paymentMethod: String,
    shippingDetails: Object,
    date: {
      type: Date,
      default: Date.now
    }
  }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
