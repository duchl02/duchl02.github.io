var audio = new Audio('hpd.mp3');
audio.play();
$(window).ready(function() {
    $('.modal').modal()
    // audio.play()
})


var userApi='https://6288a9b610e93797c15d8515.mockapi.io/api/hpb'

$('#submit').on('click', function createComment(callback) {
     var name =$('#name').val();
     var comment =$('#comment').val();
     var data = {
         name:name,
         comment:comment,
     }
    //  console.log(name,comment);
    if (name.value != "" && comment.value != "") {
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch(userApi, options)
      .then(function (res) {
        //   console.log(res.json())
        return res.json();
      })
      .then(callback => console.log(callback))
    }
    $('#name').val('')
    $('#comment').val('')
})

function start(){
  getComment(function(users){
      renderComment(users)
  })
}
setInterval(() => {
  start()
}, 3000);

function getComment(callback){
  // console.log(callback)
  fetch(userApi)
  .then(function(reponsive){
      return reponsive.json()
  })
  .then(callback)
}
function renderComment(users){
  var listCommnet = $('.content')
  var htmls =users.map(function(user){
    return `
    <div class="content2">
      <h5>${user.name}</h5>
      <p>${user.comment}</p>
    </div>
    `
  })
  listCommnet.html(htmls)
}

