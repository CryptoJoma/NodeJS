 // Import the SDK
 const LicenseChainSDK = require('../src/LicenseChainSDK');

 // Initialize the SDK
 const apiBaseUrl = process.env.API_BASE_URL || 'https://licensechain.app/api';
 const licensechainApiKey = process.env.LICENSECHAIN_API_KEY || 'your-api-key-here';

 const sdk = new LicenseChainSDK(apiBaseUrl, licensechainApiKey);

 // Simulate Telegram user data
 const telegramUserId = '123456';
 const telegramUsername = 'john_doe';

 // Authenticate the Telegram user
 const authenticatedUser = sdk.authenticateTelegramUser(telegramUserId, telegramUsername);
 console.log('Authenticated User:', authenticatedUser);

 // Validate the user's license
 sdk.validateLicense(telegramUserId)
     .then((result) => {
         console.log('License validation result:', result);
     })
     .catch((err) => {
         console.error('Error validating license:', err);
     });
