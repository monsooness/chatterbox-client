// YOUR CODE HERE:
$( document ).ready(function() {
  var data = $.get('http://parse.sfm8.hackreactor.com/chatterbox/classes/messages')
  
});


class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages'
  }

  init() {};

  send(message) {
    $.ajax({
      type: "POST",
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  };

  fetch() {
   $.ajax({
      type: "GET",
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received', data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    });  
  };

  clearMessages() {
    $('#chats').html('')
  };

  renderMessage(message) {
    $('#chats').html('<div>message</div>');
  };
  
  renderRoom(rooms) {
    $('#roomSelect').append('<div>rooms</div>')
  };
}
const app = new App();





