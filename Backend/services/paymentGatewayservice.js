const axios = require('axios');

/**
 * Function to initiate a payment request to the payment gateway.
 * @param {object} paymentData - Payment data to send to the gateway.
 * @returns {Promise} A promise that resolves with the response from the payment gateway.
 */
async function initiatePayment(paymentData) {
  try {
    const response = await axios.post('https://payment-gateway-url.com/api/initiate-payment', paymentData);

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { initiatePayment };
