const knex = require('knex')(require('../knexfile').development);
require('dotenv').config();
const jwt = require('jsonwebtoken');
const emailService = require('../services/emailService');

exports.handleLogin = async (national_id) => {
  try {
    // Fetch user from the database
    const user = await knex('citizens').where({ national_id }).first();
    console.log('Fetched user:', user);

    if (!user) {
      throw new Error('User not found');
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await knex('citizens').where({ national_id }).update({ otp });

    // Send OTP email
    await emailService.sendOTPEmail(user.email, otp);

    return 'OTP sent to your email';
  } catch (error) {
    console.error('Error in handleLogin:', error.message);
    throw new Error('Error during login: ' + error.message);
  }
};

exports.handleVerify = async (national_id, otp) => {
  try {
    // Verify OTP
    const user = await knex('citizens').where({ national_id, otp }).first();
    console.log('Verification user:', user);

    if (!user) {
      throw new Error('Invalid OTP');
    }

    // Generate JWT token
    const token = jwt.sign({ national_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Clear OTP
    await knex('citizens').where({ national_id }).update({ otp: null });

    return token;
  } catch (error) {
    console.error('Error in handleVerify:', error.message);
    throw new Error('Error during verification: ' + error.message);
  }
};
