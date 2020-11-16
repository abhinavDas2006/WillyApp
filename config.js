import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAqSlbrQuNJ3SR0kBSwJ0nBS8pDwLdJaUI",
  authDomain: "wily-app-bdb72.firebaseapp.com",
  databaseURL: "https://wily-app-bdb72.firebaseio.com",
  projectId: "wily-app-bdb72",
  storageBucket: "wily-app-bdb72.appspot.com",
  messagingSenderId: "1075078387381",
  appId: "1:1075078387381:web:4a93afd2e62063fcb690fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
