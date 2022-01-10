const admin = require('firebase-admin');
const serviceAccount = require("../../mutants-ec892-firebase-adminsdk-bt8bj-40e4466504.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://mutants-ec892-default-rtdb.firebaseio.com/'
});

export const db = admin.database();