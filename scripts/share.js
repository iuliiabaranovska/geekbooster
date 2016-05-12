var GeekBooster = GeekBooster || {};
GeekBooster.Share = (function() {

    function Share() {};

    Share.vkontakte = function(purl, ptitle, pimg, text) {
        var url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        popup(url);
    };

    Share.facebook = function(purl, ptitle, pimg, text) {
        var url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        popup(url);
    };

    Share.twitter = function(purl, ptitle) {
        var url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        popup(url);
    };

    Share.google = function(purl) {
        var url = 'https://plus.google.com/share?';
        url += 'url=' + encodeURIComponent(purl);
        //console.log(url);
        popup(url);
    };

    var popup = function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436,top=0,left=0');
    };

    return Share;
})();