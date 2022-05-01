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
let a = [1,3,22,31,4,6,5,54,]
function compares(a,b){
    return b-a
}
console.log(a.sort(compares))
let sum=0
a.forEach(function(element,index){
    if (element % 2 ===0 ){
        console.log(element)
        return index;
    
    };
    console.log('so nay k phai' ,element)
})

// console.log(sum)



// Trong lập trình nói chung và lập trình JavaScript nói riêng, việc học thuật toán vẫn luôn vô cùng quan trọng. Thuật toán giúp cho lập trình viên rèn luyện tư duy.

// Ngoài ra, khi thuật toán tốt thì chương trình viết ra sẽ chạy nhanh hơn, hoặc trông sẽ sáng sủa, dễ hiểu và dễ bảo trì hơn.

// Vì vậy, tiếp theo trong loạt bài Lập trình JavaScript với FCC, hôm nay, mình sẽ tổng hợp lại những bài toán thuộc chủ đề Basic Algorithm Scripting trên freeCodeCamp để các bạn tiện theo dõi và có thể tham khảo khi cần.

// Tuy nhiên, những bài toán này khá đơn giản nên mình sẽ không giải thích cách làm. Nếu các bạn có thắc mắc hay góp ý thì có thể để lại ở phần bình luận phía dưới.

// Trước khi đi vào tìm hiểu các bài toán, các bạn có thể đọc trước các bài viết sau. Chúng khá hữu ích vì các thuật toán sau đây sẽ sử dụng đến những kiến thức trong đó.

