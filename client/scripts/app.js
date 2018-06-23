var storage;

$( document ).ready(function() { 
   
  app.fetch();
  setTimeout(function() {
  for (var i = 10; i < 100; i++) {
      $('#chats').append(`
      <div class="chat">
        <div class="username">${storage.results[i].username}</div>
        <div>${storage.results[i].text}</div>
      </div>`)
 
    }
 },2000)
  
  $('.mySelect').change( () => {
    let selectedText = $('#chats').val();
  })

});

class App {
  constructor(message) {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
    this.addedData = '';
    this.message = message;
  }
  
  init() {
  }

  send(message) {
    $.ajax({
      type: 'POST',
      url: this.server              ,
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
      type: 'GET',
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received', data);
        storage = data;
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    }); 
  }

  clearMessages() {
    $('#chats').empty();
  }

  renderMessage(message) {
    $('#chats').append(`<div class="messages">${message}</div>`)
  }
  
  renderRoom(rooms) {
    $('#roomSelect').append($('<options>', {
      text: ''
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






