$('#fadeOut').click(function () {

    $('#item').fadeOut();
})
$('#fadeIn').click(function () {
    $('#item').fadeIn();
})
$('#slideUp').click(function () {

    $('#item').slideUp();
})
$('#slideDown').click(function () {
    $('#item').slideDown();
})

$('#moveRight').click(function () {
    $('#item').animate({
        left: 500

    }, 1000)
})
$('#moveLeft').click(function () {
    $('#item').animate({
        left: 0
    }, 1000)
})

$('#moveReturn').click(function () {
    $('#item').animate({
        left: 500,

    }, 1000).animate({
        left: 0
    }, 1000)
})

$('#animation').click(function () {
    $('#item').animate({
        left: 200,
        top: 200


    }, 500).animate({
        left: 400,
        top: 0,

    }, 500).animate({
        left: 0,
        top: 100
    }, 500).animate({
        top: 100,
        left: 400

    }, 500).animate({
        top: 0,
        left: 0
    }, 500)
})