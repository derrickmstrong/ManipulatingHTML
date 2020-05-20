$(function () {
  $('body').append('<button>Click Me</button>');
  $('button').click(() => alert('Hello via jQuery'));
  $('#enterTxtButton').click(() => alert($('#enterTxt').val()));
  $('.box')
    .mouseover(function () {
      $(this).css('backgroundColor', '#338728');
    })
    .mouseout(function () {
      $(this).css('backgroundColor', '#ff6328');
    });
  $('.lorem-text').click(function () {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
    $(this).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
  });
  $('#enterName').click(function(){
      $('#myName').append('<span>Derrick</span>')
  })
  let i = 0;
  $('#addFriendBtn').click(function (){
      
    let friends = [
        'Sam',
        'Jay',
        'Binky',
        'Noodle',
        'DW',
        'Latasha Nicole',
        'Mo',
        'Gerry',
        'Cookie',
        'YaYa',
      ];
      if (i < friends.length){
          let friend = friends[i]
          $('#addFriend').append('<li>' + friend + '</li>')
          i++
      }

  })
});
