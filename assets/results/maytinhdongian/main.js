// ngăn nhấn vào kết quả
$('.box-result').attr('disabled', 'true');

// hiển thị khi nhấn vô number
$('.number').on('click', function(){
    let cal = $('.box-calculator').val();
    let value = $(this).html();
    $('.box-calculator').val(cal + value);
})

// hiển thị khi nhấn vô toán tử
$('.operation').on('click', function(){
    let cal = $('.box-calculator').val();
    let value = $(this).html();
    $('.box-calculator').val(cal + value);
})

// xoá phép tính khi nhấn CE
$('.refresh').on('click', function(){
    $('.box-calculator').val('')
    $('.box-result').val(''); 
})

// xoá một ký tụ khi nhấn DE
$('.delete').on('click', function(){
    let cal = $('.box-calculator').val();
    $('.box-calculator').val(cal.substring(0,cal.length - 1))
})

// hiển thị kết quả khi nhấn bằng
$('.equal').on('click', function(){
    let cal = $('.box-calculator').val();
    $('.box-result').val(eval(cal)); 
})