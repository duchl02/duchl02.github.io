// Kiến trong file này được mình chắt lọc qua trang https://completejavascript.com

// PHẦN 1 - CÁC KHÁI NIỆM CƠ BẢN

// 1.Biến
// có 8 loại kiểu dữ liệu

// 2. Một số phương thức cơ bản của array
// arr.pop() :Lấy ra và trả về phần tử cuối cùng của mảng.
// let letters = ["a", "b", "c"];
// let item = letters.pop();
// console.log(item); // c
// console.log(letters); // (2) ['a', 'b']

// array.push(): Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
// let letters = ["a", "b", "c"];
// length = letters.push("e", "f");
// console.log(length); // 6
// console.log(letters); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

// arry.shift(): Lấy ra và trả về phần tử đầu tiên của mảng.
// let letters = ["a", "b", "c"];
// let item = letters.shift();
// console.log(item); // a
// console.log(letters); // (2) ['b', 'c']

// arr.unshift(): thêm phần tử vào đẩu mảng và trả lại độ dài mới
// length = letters.unshift("e", "f");
// console.log(length); // 6
// console.log(letters); // (6) ['e', 'f', 'd', 'a', 'b', 'c']

// duyệt tất cả các phàn tử trong mang
// let arr= ['a', 'b', 'c']
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }

// for of  and for in
// var languages = [
//     'js',
//     'css',
//     "html",
// ]
// for (var key in languages) {
//     console.log(key) // 1 ,2 ,3
// }
// for (var key ò languages) {
//     console.log(key) // js css html
// }

// Mảng nhiều chiều
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   // truy cập phần tử ở hàng 1, cột 1
//   console.log(matrix[1][1]); // 5

// Phương thức tostring()
// console.log(typeof("" +1 ))

// tính tổng 
// function sumInput() {
//     let result = [];
//     while(true){
//         let n = prompt("Please type your number, type esc to sum: ", 0);
//         if (n === '' || n === undefined || n === null || !isFinite(n)){
//             break;
//         }
//         result.push(+n);
//     }
//     let s =0
//     for (let sum of result){
//         s = sum + s
//     }
//     console.log('sum your input: ', s);
// }
// sumInput()

// setInterval(() => {
//     const todays = new Date()
//     console.log(todays.getMilliseconds().toFixed(11))
// });
// 
// 
// let a = [1,3,22,31,4,6,5,54]
// // let b = [1,2,3,4,5]
// let b = a.map(Math.sqrt)
// console.log(b)
// b.forEach(function(number,i){
//     console.log(b[i].toFixed(2))
// })
// function b(value){
//     return value>=3
// }
// console.log(a.filter(b))
// function compares(a,b){
//     return b-a
// }
// console.log(a.sort(compares))
// let sum=0
// a.forEach(function(element,index){
//     if (element % 2 ===0 ){
//         console.log(element); 
//     };
// })
// let b = a.entries()
// for (let c of b){
//     console.log(c)// [0, 1]0: 01: 1length: 2[[Prototype]]: Array(0)
//     main.js:100 (2) [1, 3]
//     main.js:100 (2) [2, 22]
//     main.js:100 (2) [3, 31]
//     main.js:100 (2) [4, 4]0: 41: 4length: 2[[Prototype]]: Array(0)
//     main.js:100 (2) [5, 6]
//     main.js:100 (2) [6, 5]
//     main.js:100 (2) [7, 54]
// }
// console.log(sum)
// reduce
// const topics = [
//     {
//       topic: "ReactJS",
//       posts: [
//         { postID: "id1", title: "title1" },
//         { postID: "id2", title: "title2" },
//       ],
//     },
//     {
//       topic: "Vue.js",
//       posts: [
//         { postID: "id3", title: "title3" },
//         { postID: "id4", title: "title4" },
//       ],
//     },
// ];
//hoclai
// const posts = [
//     { postID: "id1", title: "title1" },
//     { postID: "id2", title: "title2" },
//     { postID: "id3", title: "title3" },
//     { postID: "id4", title: "title4" },
// ];
// const dictionary=posts.reduce((acc,cur)=>{
//     const postID=cur.postID;
//     return {...acc,[postID]: cur}
// },[])
//     // console.log(dictionary)
//     const getPost = function(postID, dictionary) {
//         return dictionary[postID];
//       };
//     console.log(getPost("id1", dictionary).title) ;
// const getPost = (postID, posts) => {
//     for (let i = 0; i < posts.length; i++) {
//        const post=posts[i]
//        if (post.postID === postID){
//            return post;
//        }
//     }
//     return null;
// };
// console.log(getPost("id1", posts).title)

// const allPost = topics.reduce((acc,cur,index)=>{
//     return [...acc, ...cur.posts];
// },[])

// console.log(allPost)

// var arrays = [[1, 2, 3], [4, 5], [6]];
// var newarr= []
// for(let i = 0; i < arrays.length; i++) {
//     for(let t = 0; t < arrays[i].length; t++){
//         newarr.push(arrays[i][t])
//     }
// }
// console.log(newarr)
// function guitar(day,kep,dan){
//     return{
//         day,
//         kep,
//         dan,
//     }
// }
// console.log(guitar(1,2,3))
// let desktop={
//     pen:"mypen",
//     phone:"xiaomi",
//     laptop:"macbook",
// }
// console.log(desktop.length)

// for (var ok in desktop){
//     console.log(ok)
// }
// function leg(){
//     let x=-1
//     for (let i=0; i < arguments.length; i++) {
//         if (arguments[i] > x) x=arguments.length
//     }
//     return x
// }

// console.log(leg(1,2,3,4,4,2,2,2,2)) 
// var newArray = arrays.reduce(function(a, b){
// 	return a.concat(b);
// });
// console.log(newArray);console.log(newArray);

// console.log(newArray);

// let point={
//     x:2,
//     y: 3,
// };
// point['z Index']=1000;
// point.x=1
// // delete point.y
// // console.log(point.x)
// let start=0;
// for(sum in point ){
//     start +=point[sum]
//     console.log(start)
// }
// console.log(start);
// var re = new RegExp('abc')
// // console.log(re)
// console.log(/\d/.test('abcbdess'))

// var date= /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
// console.log(date.test("11-11-2w11 20:22"))

// dao nguowc string
// function reverString(str){
//    return str.split('').reverse().join('');
  
// }
// console.log(reverString('hello xin chao mn'))
// tinh giai thua
// function giaithhua(num){
//     if (num == 0) return 1;
//     let start =1
//     for(var i = 1;i <= num; i++){
//         start=i*start
//     }
//     console.log(start)
// }
// giaithhua(5)
// var name = "lampv";
// var text = "LamPV is a suspicious character.";
// var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "laa$1"));
// function text(str){
    
//     let newstr = str.split('').reverse().join('')
//     return newstr === str
// }
// console.log(text('hllh'))
// function maxlength(str){
//     var word= str.split(' ')
//     var maxlength = word.reduce(function(acc, cur){
//         return cur.length > acc ? cur.length : acc
//     },[])
//     return maxlength;
// }
// console.log(maxlength(" d hd hdd hdhd hdhdhd dhd]hdhdh"))

// let bk=[1,2,3]
// let tongdientich=[]
// bk.map(function(r){
//     let dientich = (Math.PI * r * r).toFixed(3)
//     tongdientich.push(dientich)
// })
// console.log(tongdientich)
// function viethoa(str){
//     let word= str.split(' ')
//     let nword = word.map(function(acc){
//         var char = acc.split('')
//         char[0]=char[0].toUpperCase()
//         return char.join('')
//     })
//     return console.log(nword.join(' '))
// }
// viethoa('Tôi yêu em')
// function largestOfFour(arr) {
//   var answer =[]
//     for (var i=0; i<arr.length; i++){
//       var max=0
//         for (var j=0; j<arr[i].length; j++){
//           if  (arr[i][j] > max) max = arr[i][j]
//         }
//        answer.push(max)
//     }
//     return console.log(answer)
//   }
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ]);
// function demkitu(str,i){
//   var word= str.slice(i) + '...'
//   console.log(word)
// }
// demkitu('toi yeu em',4)

// Trong lập trình nói chung và lập trình JavaScript nói riêng, việc học thuật toán vẫn luôn vô cùng quan trọng. Thuật toán giúp cho lập trình viên rèn luyện tư duy.

// Ngoài ra, khi thuật toán tốt thì chương trình viết ra sẽ chạy nhanh hơn, hoặc trông sẽ sáng sủa, dễ hiểu và dễ bảo trì hơn.

// Vì vậy, tiếp theo trong loạt bài Lập trình JavaScript với FCC, hôm nay, mình sẽ tổng hợp lại những bài toán thuộc chủ đề Basic Algorithm Scripting trên freeCodeCamp để các bạn tiện theo dõi và có thể tham khảo khi cần.

// Tuy nhiên, những bài toán này khá đơn giản nên mình sẽ không giải thích cách làm. Nếu các bạn có thắc mắc hay góp ý thì có thể để lại ở phần bình luận phía dưới.

// Trước khi đi vào tìm hiểu các bài toán, các bạn có thể đọc trước các bài viết sau. Chúng khá hữu ích vì các thuật toán sau đây sẽ sử dụng đến những kiến thức trong đó.

// su khac nhau giua const ngoai vong lap va trong vong lap