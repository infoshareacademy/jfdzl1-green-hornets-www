(function() {
    if (localStorage.acceptCookies) {
        $('.cookies').hide();
    }
})();

$('#accept').click(function(e) {
    e.preventDefault();
    $('.cookies').css('display', 'none')
    $('.try--fixed').css('bottom', '45px');
    var acceptCookies = { 'accept': "true" };
    localStorage.setItem('acceptCookies', acceptCookies.accept);
});

$('#more').click(function(e) {
    e.preventDefault();
    $('.more').css('display', 'block');
    $('body').css('overflow-y', 'hidden');
});

$('#cancel').click(function() {
    $('.more').css('display', 'none');
    $('body').css('overflow-y', 'auto');
});

$('#Label').click(function() {
    $('#Label').css('display', 'none');
});

$(window).click(function() {
    $('#Label').css('display', 'block');
});