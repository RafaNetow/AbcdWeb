import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCmj3qcp2qadpYCmOiwGQ2M3XrBbw8o1Zs',
    authDomain: 'pruebaabcd1-dea0d.firebaseapp.com',
    databaseURL: 'https://pruebaabcd1-dea0d.firebaseio.com',
    projectId: 'pruebaabcd1-dea0d',
    storageBucket: 'pruebaabcd1-dea0d.appspot.com',
    messagingSenderId: '475392396312',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
export {
    auth,
    db
};