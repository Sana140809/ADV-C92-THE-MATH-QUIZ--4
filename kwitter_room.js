
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDu7Z7ce-ktjqdqBkqAB7r8HrmocfOrBq0",
      authDomain: "kwitter-8863f.firebaseapp.com",
      databaseURL: "https://kwitter-8863f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8863f",
      storageBucket: "kwitter-8863f.appspot.com",
      messagingSenderId: "56045094994",
      appId: "1:56045094994:web:74422a579bcad73994778b",
      measurementId: "G-GM1S39WCF2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
