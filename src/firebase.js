import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDj1SNq90XsGFN5FpFBHg37W9iO9wvFX3I",
    authDomain: "netflix-clone-8679a.firebaseapp.com",
    projectId: "netflix-clone-8679a",
    storageBucket: "netflix-clone-8679a.appspot.com",
    messagingSenderId: "351351727628",
    appId: "1:351351727628:web:b7d3f710193e9b22487029"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth};
  export default db;