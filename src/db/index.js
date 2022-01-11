const admin = require('firebase-admin');
const serviceAccount = require("./config-db.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://mutants-ec892-default-rtdb.firebaseio.com/'
});

export const db = admin.database();