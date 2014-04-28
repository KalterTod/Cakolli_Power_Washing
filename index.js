function submit_email(){
  var xhr = new XMLHttpRequest();
  var content, name, email;
  name=document.getElementById("person_name");
  content=document.getElementById("comment");
  email=document.getElementById("email");
  xhr.open("POST", "https://mandrillapp.com/api/1.0/messages/send.json", true);
  console.log("Here");
  xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");
  // Add your code below!
  xhr.send(
    {
    "key": "QNl-KWAaxMNqr3APX7bPOw",
    "message": {
      "text":content,
      "subject": "New Message",
      "from_email": email,
      "from_name": name,
      "to": [
          {
              "email": "thereaper666@gmail.com",
              "name": "Cakolli Power Washing",
              "type": "to"
            }
            ]
      }
  });
  console.log(xhr.status);
  console.log(xhr.statusText);
}

submit_email();
