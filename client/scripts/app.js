var storage;

$( document ).ready(function() { 
  app.fetch()
  

$('.button').on('submit', function(text) {
  
  var text = {
  username: this.username,
  text: '',
  roomname: ''
  }
  app.send(text);
  console.log(this.text.val())
})
  $('.mySelect').change( () => {
    let selectedText = $('#chats').val();
  })

});

class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
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
        app.init(data)
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    }); 
  }

  init(data) {
    for (var i = 0; i < data.results.length; i++) {
      $('#chats').append(`
      <div class="chat">
        <div class="username">${data.results[i].username}</div>
        <div>${data.results[i].text}</div>
      </div>`)  
    }

    // var dateArray
    // for (var j = 0; j < data.results.length; j++) {

    // console.log(data.results[j])
    //   data.results[j].sort(function(a, b) {
    //     return b.createdAt - a.createdAt;
    //   console.log(data.results[i].createdAt)
    //   })
    // }     
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






