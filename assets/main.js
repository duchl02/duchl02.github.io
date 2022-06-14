var userApi='https://6288a9b610e93797c15d8515.mockapi.io/api/user'


$('#submit').on('click', function createComment() {
     var name =$('#name').val();
     var email =$('#email').val();
     var comment =$('#comments').val();
     var data = {
         name:name,
         email:email,
         comment:comment,
     }
     console.log(name,email,comment);
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
      .then(data => console.log(data))
    }
    $('#name').val('')
    $('#email').val('')
    $('#comments').val('')
})