(function() {
if (localStorage.acceptCookies) {
$('.cookies').hide();
}
})();



var onAcceptClick = function ()
{
    $('.cookies').css('display', 'none')
    $('.try--fixed').css('bottom', '45px');
    event.preventDefault();
    var acceptCookies = { 'accept': "true" };
    localStorage.setItem('acceptCookies', acceptCookies.accept);
}