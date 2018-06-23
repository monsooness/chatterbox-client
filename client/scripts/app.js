// YOUR CODE HERE:
$( document ).ready(function() {
  //Dyamically create dropdown
  
  $('.mySelect').change( () => {
    let slectedText = $('#chats').val();
  })
});

class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
    this.addedData = ''  
}
  
  init() {
    $('#chats').append('hi')
  }

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
  }

  fetch(message) {
    $.ajax({
      type: "GET",
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received', data);
        
        $('body').append(data)

      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    });  
  }

  clearMessages() {
    $('#chats').html('');
  }

  renderMessage(message) {
    $('#chats').html(`<div class='messages'>${message}</div>`);
   
  }
  
  renderRoom(rooms) {
    $('#roomSelect').append($('<options>', {
      text: room_names
    }));
  }

  handleUsernameClick() {
    $('#main').on('click', function() {
      
    })
  }

  handleSubmit() {
  };
  
}
const app = new App();






