import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCbHxpNCd6AYxNGPl8rMYXb02iHN00TG3I',
    authDomain: 'sales-invoice-287a5.firebaseapp.com',
    databaseURL: 'https://sales-invoice-287a5.firebaseio.com',
    projectId: 'sales-invoice-287a5',
    storageBucket: 'sales-invoice-287a5.appspot.com',
    messagingSenderId: '166055181628'
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase