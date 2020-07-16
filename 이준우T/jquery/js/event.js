// $('#button').click(function () {
//     $('h2').hide();
// })

// $('#button').mouseover(function () {
//     $('h2').css('color', 'red')
// })

// $('#button').mouseleave(function () {
//     $('h2').css('color', 'black')
// })

// $('#button').click(function () {
//     $('h2').toggle()
// })

// $('#button').dblclick(function () {
//     $('p').fadeOut();
// })
//dblclick 더블클릭

// $('#button').mouseover(function () {
//     $('h1').text('HTML')
// }).mouseleave(function () {
//     $('h1').text('Jquery')
// })

// $('#button').hover(function () {
//     $('h1').toggle()
// })

// $('#button').mouseover(function () {
//     $('#heading1').css('color', 'red')
//     $('#heading1').text('헤딩1')
// }).mouseleave(function () {
//     $('#heading1').css('color', 'black')
//     $('#heading1').text('Heading1')
// })

// $(document).mousemove(function (e) {
//     let bg = 'red'
//     if (e.clientY < 300) {
//         bg = 'green'
//     }

//     $("#dot").css({
//         top: event.clientY - 50,
//         left: event.clientX - 50,
//         background: bg
//     })
// })

// $("li").click(function () {
//     $(this).css("color", "red")
// })

// $("li").click(function () {
//     $('li').removeClass('active')
//     $(this).addClass('active')
// })
$('#button2').click(function () {
    $('li:last').remove()
})
$('#button').click(function () {
    // const last = $('li:last').index();
    // console.log(last);
    // $('#list').append(`<li>list item${last+2}</li>`)
    const text = $('h1').text();
    $('#dot').text(text)
    $('li').text(text)
})