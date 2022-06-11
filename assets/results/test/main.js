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

