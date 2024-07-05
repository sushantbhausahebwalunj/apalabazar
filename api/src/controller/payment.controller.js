import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createOrder = async (req, res) => {
    const { amount, currency } = req.body;

    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: currency,
        receipt: 'order_rcptid_11',
    };

    try {
        const order = await razorpay.orders.create(options);
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
