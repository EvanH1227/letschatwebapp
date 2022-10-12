const firebaseConfig = {
    apiKey: "AIzaSyCGBOlZVeko0pd5YFHiS-bnHQcXhw9Toac",
    authDomain: "let-s-chat-edfd6.firebaseapp.com",
    projectId: "let-s-chat-edfd6",
    storageBucket: "let-s-chat-edfd6.appspot.com",
    messagingSenderId: "946532705596",
    appId: "1:946532705596:web:cc0e9124c8d418015faa39",
    measurementId: "G-D197WRMXB2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").ariaValueMax;

    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData() {firebaseConfig.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})}
Room_names = childKey;
//start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onoclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//end code
});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
}