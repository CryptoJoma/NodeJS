 // Import necessary modules
 const axios = require('axios');
 require('dotenv').config();

 class LicenseChainSDK {
     constructor(apiBaseUrl, licensechainApiKey) {
         this.apiBaseUrl = apiBaseUrl;
         this.licensechainApiKey = licensechainApiKey;
     }

     // Method to authenticate Telegram user (assuming Telegram user data is already provided)
     authenticateTelegramUser(telegramUserId, telegramUsername) {
         // You might want to call Telegram APIs here if needed
         // For now, just return the Telegram user ID and username
         return {
             tg_id: telegramUserId,
             username: telegramUsername
         };
     }

     // Method to validate the license using LicenseChain API
     async validateLicense(telegramUserId) {
         try {
             const url = `${this.apiBaseUrl}/validate_license`;
             const response = await axios.post(
                 url,
                 { tg_id: telegramUserId },  // Payload
                 {
                     headers: {
                         'Authorization': `Bearer ${this.licensechainApiKey}`,
                         'Content-Type': 'application/json'
                     }
                 }
             );

             return response.data;  // Return the API response
         } catch (error) {
             console.error('Error validating license:', error.response ? error.response.data : error.message);
             return { error: 'License validation failed', details: error.response ? error.response.data : error.message };
         }
     }
 }

 module.exports = LicenseChainSDK;
