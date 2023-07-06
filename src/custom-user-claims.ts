import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
const serviceAccount = 'src/env/env.dev.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // other initialization options if needed
});

async function setCustomUserClaims(email: string, customUserClaims: {}) {
  try {
    // Retrieve the user by their email
    const user = await admin.auth().getUserByEmail(email);

    // Set custom claims for the user
    await admin.auth().setCustomUserClaims(user.uid, customUserClaims);

    console.log('Custom claims have been set successfully!');
  } catch (error) {
    console.error('Error setting custom claims:', error);
  }
}

async function viewCustomUserClaims(email: string) {
  try {
    // Retrieve the user by their email
    const user = await admin.auth().getUserByEmail(email);

    // Set custom claims for the user
    const { customClaims } = user;

    console.log('Custom Claims:', customClaims);
  } catch (error) {
    console.error('Error viewing custom claims:', error);
  }
}
