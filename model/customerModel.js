import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    state: String,
    country: String,
    dob: Date
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;