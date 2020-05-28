import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBTUSr7Q8T6eJJq9NiR1udrNrgG0k06eHU",
  authDomain: "hr-saas-demo.firebaseapp.com",
  databaseURL: "https://hr-saas-demo.firebaseio.com",
  projectId: "hr-saas-demo",
  storageBucket: "hr-saas-demo.appspot.com",
  messagingSenderId: "625473043750",
  appId: "1:625473043750:web:595c1205a478609fd895e7",
};
firebase.initializeApp(config);

export default firebase;
