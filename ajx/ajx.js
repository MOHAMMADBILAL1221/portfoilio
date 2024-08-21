// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXJ3TCZyGhT3uhMCG0oqCm9eb3eUdsrXo",
  authDomain: "billo-portfolio.firebaseapp.com",
  projectId: "billo-portfolio",
  storageBucket: "billo-portfolio.appspot.com",
  messagingSenderId: "292287676799",
  appId: "1:292287676799:web:db3c91fcad559229bd5a4a",
  measurementId: "G-PPX7TBZJF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

let star = document.getElementById("star");
let name = document.getElementById("name");
let socail = document.getElementById("socail");
let review = document.getElementById("review");
// let file = document.getElementById("file");

window.AddRating = async () => {
  let obj = {
    star: star.value,
    name: name.value,
    socail: socail.value,
    review: review.value,
  };
  console.log(obj);
  // const docRef = await addDoc(collection(db, "Review"), obj);
  // setDoc(docRef, obj)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
};
