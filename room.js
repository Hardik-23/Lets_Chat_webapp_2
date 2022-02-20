var firebaseConfig = {
    apiKey: "AIzaSyDP5GtHKUTK6M6boEEbtMqLfF2Do5Sr9nE",
    authDomain: "let-s-chat-webapp-77a20.firebaseapp.com",
    databaseURL: "https://let-s-chat-webapp-77a20-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-webapp-77a20",
    storageBucket: "let-s-chat-webapp-77a20.appspot.com",
    messagingSenderId: "663061016758",
    appId: "1:663061016758:web:457f32e0b8d0332f433617",
    measurementId: "G-QZPEZ0BKCK"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;


   });});}
getData();