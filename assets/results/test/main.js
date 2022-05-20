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

function run() {
    let a = document.querySelector('#data').value
    let checked= true


    for (let i = 2; i < a; ++i) {
        if (a % i == 0){
            checked = false
            break;
        }
    }
    if (checked == true){
        console.log(a + " là số nguyên tố ");
    }
    else{
        console.log(a + " không phải là số nguyên tố ");
    }
}