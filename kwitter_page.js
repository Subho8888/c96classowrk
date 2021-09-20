//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAClOtDewt4wZ8GQL0Ut3qg0ZLzvd_Jhsw",
      authDomain: "kwitter-3f37e.firebaseapp.com",
      databaseURL: "https://kwitter-3f37e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f37e",
      storageBucket: "kwitter-3f37e.appspot.com",
      messagingSenderId: "493950627811",
      appId: "1:493950627811:web:95d7c2c1e2b026ec003ad6"
    };
    
    // Initialize Firebase
    const app =firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          like:0,
          name:user_name,
          message:msg      
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
