$( document ).ready(function() { 
 
   // $('#chats').append(`
   //    <div>
   //    <div class="messages">${'hey'}</div>
   //    <div class="username">${storageUsername}</div>
   //    <div class="roomname">${storageRoomname}</div>
   //  </div>`)


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
    // $('#chats').append('hi')
    $('#chats').append(`
      <div>
      <div class="messages">${this.text}</div>
      <div class="username">${this.username}</div>
      <div class="roomname">${this.roomname}</div>
    </div>`)
  }

  send(message) {
    $.ajax({
      type: 'POST',
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
      type: 'GET',
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      //console.log(data)
      success: function (data) {
        console.log('chatterbox: Message received', data);
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






