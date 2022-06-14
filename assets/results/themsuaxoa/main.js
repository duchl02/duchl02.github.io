// function minmax(){
//     let list = [];
//     while(true){
//         let number = prompt('nhap so', 0)
//         if (number === '' || number === undefined || !isFinite(number) || number === null){
//             break
//         }else{
//             list.push(number)
//             var max = Math.max.apply(Math, list)
//             var min = Math.min.apply(Math, list)
//         }
//     }
//     document.write('so lon nhat ', max,' so be nhat ', min)
// }   
// minmax()

// function ptbac2() {
//         let a = prompt('nhap a: ', 0)
//         if (a === '' || a === undefined || !isFinite(a) || a === null){
//             alert('vui long nhap lai a ')
//             a = prompt('nhap a: ', 0)
//         }
//         let b = prompt('nhap b: ', 0)
//         if (b === '' || b === undefined || !isFinite(b) || b === null){
//             alert('vui long nhap lai b ')
//             b = prompt('nhap a: ', 0)
//         }
//     if (a==0 && b==0){
//         document.write('pt vo so nghiem')
//     }
//     else if (a != 0 && b == 0){
//         document.write('pt xo nghiem x = 0')
//     }
//     else if (a == 0 && b != 0){
//         document.write('pt vo nghiem')
//     }
//     else if (a != 0 && b != 0){
//         var x = -b / a
//         document.write('pt co nghiem la: ',x)
//     }
// }
// ptbac2()

// function run(){
//     const a = document.querySelector('#title').value;
//     if (a == ''){
//         console.log('nhap lai a')
//         a.value = ' '
//     }
//     else{
//         document.querySelector('.result').insertAdjacentHTML('afterbegin',a)
//     }
// }

// function run() {
//     var a = document.getElementsByName('status')
//     for (var i = 0; i < a.length; i++){
//         if (a[i].checked === true){
//             console.log(a[i].value)
//         }
//     }
// }

// function generchage(obj){
//     var res = document.querySelector('.res')
//     var value = obj.value
//         if (value === ''){
//             res.innerHTML =  `<h1>${value}</h1>`
//         } else if (value === 'on'){
//             res.innerHTML = `<h1>${value}</h1>`
//         } else if (value === 'off'){
//             res.innerHTML = `<h1>${value}</h1>`
//         }
// }

// var array = [1, 2, 3, 4, 5]

// array = array.map(num => num*3)

// array = array.filter(num => num % 2 !== 0)


// array = array.reduce(function (acc,value){
//     return acc += value
// },0)
// console.log(array)

// function run() {
//     let a = document.querySelector('#data').value
//     let checked= true


//     for (let i = 2; i < a; ++i) {
//         if (a % i == 0){
//             checked = false
//             break;
//         }
//     }
//     if (checked == true){
//         console.log(a + " là số nguyên tố ");
//     }
//     else{
//         console.log(a + " không phải là số nguyên tố ");
//     }
// }

// function run() {
//     let a1 = 0
//     let a = document.getElementsByTagName('div')
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 !== 0) {
            
//             a1 = a1 + i
//             console.log(a1)
//         } else{
//             a[i].style.background='yellow'
//         }
//     }
// }

// var menu = document.querySelectorAll('#dropdown > li')
// for (let i = 0; i < menu.length; i++) {
//     menu[i].addEventListener('click', function(){
//         var menulist = document.querySelectorAll('#dropdown > li > ul')
//         for (let j = 0; j < menulist.length; j++){
//             menulist[j].style.display = 'none'
//         }
//         this.children[1].style.display = 'block'
//     })
// }

// var anh1= '../CloneYoutube/assets/img/tituc.webp'
// var anh2 = '../CloneYoutube/assets/img/music-channel.jpeg'
// var img = document.querySelector('#img')
// document.querySelector('#anhdep1').onclick = function(){
//     img.src = anh1
// }
// document.querySelector('#anhdep2').onclick = function(){
//     img.src = anh2
// }

// function run(){
//     let a = document.querySelector('#showSA')
//     let text = a.innerHTML;
//     let category = document.querySelector('#select_avanced')

//     if (text == 'nhan de tim kiem'){
//         category.style.display = 'table-row',
//         a.innerHTML='bo tim kiem'
//     } else if (text == 'bo tim kiem'){
//         category.style.display = 'none',
//         a.innerHTML='nhan de tim kiem'
//     }
//     return false;
// }

// let btn = document.querySelectorAll('#button')
// for (let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', function(){
//         return this.parentElement.parentElement.remove()
//     })
// }

// const s = '123456789'
// const n = 3
// let result = []
// for (let i = 0; i < s.length; i += n){
//     let ran=''
//     for (let j = i; j < n + i; j++){
//         ran= ran + s[j]
//     }
//     result.push(ran)
// }
// console.log(result)

// function getValue(id){
//     return document.getElementById(id).value.trim();
// }

// // Hiển thị lỗi
// function showError(key, mess){
//     document.getElementById(key + '_error').innerHTML = mess;
// }

// function validate()
// {
//     var flag = true;

//     // 1 username
//     var username = getValue('username');
//     if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
//         flag = false;
//         showError('username', 'Vui lòng kiểm tra lại Username');
//     }

//     // 2. password
//     var password = getValue('password');
//     var repassword = getValue('repassword');
//     if( password != repassword){
//         flag = false;
//         showError('repassword', 'mat khau k khop')
//     }
//     if (password == '' || password.length < 8){
//         flag = false;
//         showError('password', 'Vui lòng kiểm tra lại Password');
//     }

//     // 3. Phone
//     var phone = getValue('phone');
//     if (phone != '' &&  !/^[0-9]{10}$/.test(phone) ){
//         flag = false;
//         showError('phone', 'Vui lòng kiểm tra lại Phone');
//     }

//     // 4. Email
//     var email = getValue('email');
//     var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (!mailformat.test(email)){
//         flag = false;

//         showError('email', 'Vui lòng kiểm tra lại Email');
//     }

//     return flag;
// }



// function firstQuestion() {
// var curdate = new Date()
// var year = curdate.getFullYear()
// var month = curdate.getMilliseconds()
// var day = curdate.getMinutes()
// var a =  document.querySelector('#time');
// var tim = curdate.getSeconds()
//     a.innerHTML= day +'/ '+ tim
//     a.style.width="100px"
//     a.style.height="100px"
//     a.style.background='black'
// }
// setInterval(firstQuestion)
// console.log(firstQuestion.construction)

// console.log(Math.floor(Math.random() * 10))
// $('#button-dao-nguoc').click(function() {
//     var oj=$('div')
//     for (let i=0; i<oj.length; i++) {
//         if($(oj[i]).hasClass('yellow')){
//             $(oj[i]).removeClass('yellow').addClass('red')
//         }
//         else {
//             $(oj[i]).removeClass('red').addClass('yellow')
//         }
//     }
// })


// var checkbox = $(':radio')
// checkbox.on('click', function(){
//     var target= $('.' +this.value)
//     target.show()
//     $('.box').not(target).hide()
//     console.log(target)
// })



// stringify:JS --> JSON
// Parse; JSON ---> JS

// var promise = new Promise(function(resolve, reject) {
//     resolve()
// });

// promise
// .then(function(){
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve([{ten:'duc'}])
//         },2000)
//     })
// })
// .then(function(ss){
//     console.log(ss)
// })
// .catch(function(){
//     console.log('error')
// })
// .finally(function(){
//     console.log('done')
// })

// var postApi='https://6288a9b610e93797c15d8515.mockapi.io/api/id'

// fetch(postApi)
// .then(function(content){
//     return content.json()
// })
// .then(function(cont){
//     var impo = cont.map(function(conts){
//         return `
//         <h1>${conts.id}</h1>
//         `
//     })
//     $('.block').html(impo)
// })


var userApi = 'https://6288a9b610e93797c15d8515.mockapi.io/api/id'




function start(){
    getUser(function(users){
        render(users)
    })
    handerCreateForm()
}
start()

function getUser(callback){
    // console.log(callback)
    fetch(userApi)
    .then(function(reponsive){
        return reponsive.json()
    })
    .then(callback)
}

function createList(data,callback){
    console.log(callback)
    console.log(data)
    var options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch(userApi, options)
    .then(res => {
        res.json()
    })
    .then(callback)
}

function deleteUser(id){
    var user = $("#list-" + id)
    console.log(user)
    // console.log(user)
        if (user){
            user.remove()
            // console.log(user)
        }
    var options={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        // body:JSON.stringify(data)
    }
    fetch(userApi + "/" + id, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

function handerCreateForm(){
    let btn =$('#btn-creat')
    btn.on('click',function(){
    $("#modal").modal();

        var add = $('input[name="add"]').val()
        var name = $('input[name="name"]').val()
        
        var form = {
            name:name,
            add:add,
        }
        createList(form,function(){
            getUser(render)
        })
        
        $('input[name="add"]').val('')
        $('input[name="name"]').val('')
        $('input[name="name"]').focus()
    })
        
}

function render(users){
    var listUser = $('.table')
    
    var htmls =users.map(function(user){
        return `
        <tbody  id="list-${user.id}">
            <tr>
            <td>${user.id}</td>
            <td id="name-${user.id}">${user.name}</td>
            <td id="add-${user.id}">${user.add}</td>
                <td><div>
                    <button onclick="deleteUser(${user.id})" id="btn-delete" class="btn btn-danger">Xoá</button>
                    <button onclick="editusers(${user.id})" class="btn btn-warning" id="edit-btn">Sửa</button>
                    
                </div></td>
            </tr>
        </tbody>
        
        `
    })
    listUser.html(htmls)
    var title = $('.table')
    title.append(`<thead>
    <tr class="">
        <th>
            ID
        </th>
        <th>
            Họ Tên
        </th>
        <th>
            Giới tính
        </th>
        <th>
            <button onclick="runmodal()"class="btn btn-success" id="btn-creat">Thêm</button>
        </th>
    </tr>
</thead>`)
}

function editusers(id){
    console.log(id)
    $("#modal").modal();
    $('input[name="name"]').focus()
    $('input[name="name"]').val($('#name-' + id).text()) 
    $('input[name="add"]').val($('#add-' + id).text()) 
    let submitEdit = $('#btn-creat')
    var subbtn = $('#edit')
    submitEdit.hide()
    console.log($('#add-' + id))
    subbtn.show()
    subbtn.on('click', function(){
        var name1 = $('input[name="name"]').val()
    var add1 = $('input[name="add"]').val()
    console.log(name1)

        var form={
        name:name1,
        add:add1,
    }
    // console.log(form)
    var options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    }
    fetch(userApi + "/" + id, options)
    .then(response => response.json())
    .then(function(){
        getUser(render)
        submitEdit.show()
        subbtn.hide()
        $('input[name="add"]').val('')
        $('input[name="name"]').val('')
        console.log(id)
    })
    })
    
}
setInterval(function(){
    getUser(render)
},3000)
function runmodal(){
    $("#modal").modal();
}

// handerCreateForm(createComment())
// function createComment(data) {
//     var name = $('input[name="name"]').val()
//     var add = $('input[name="add"]').val()
//     if (name.value != "" && add.value != "") {
//       var options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       };
//       fetch(userApi, options).then(function (res) {
//           console.log(res)
//         return res.json();
//       });
//     }
//   }

// const getId = async (id)=> {
//     let res = await fetch(`https://6288a9b610e93797c15d8515.mockapi.io/api/id/`)
//     let data = await res.json()
//     console.log(data)
// }
// getId(3)
