import mongoose from 'mongoose';

var vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
  })

var Vendor = mongoose.model('Vendor', vendorSchema)
module.exports = Vendor;