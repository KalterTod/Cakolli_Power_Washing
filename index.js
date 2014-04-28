function hgsubmit() {
  $.ajax({
  type: “POST”,
  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    ‘key’: ‘0_ucNb6mRKcKlM_HctQ8KA’,
    ‘message’: {
      ‘from_email’: 'thereaper666@gmail.com',
      ‘to’: [
          {
            ‘email’: ‘thereaper666@gmail.com’,
            ‘type’: ‘to’
          }
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘New message’,
      ‘html’: comment
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });
}
