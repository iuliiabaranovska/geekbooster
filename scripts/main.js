var GeekBooster = GeekBooster || {};
GeekBooster.Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        var url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        GeekBooster.Share.popup(url);
    },

    facebook: function(purl, ptitle, pimg, text) {
        var url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        GeekBooster.Share.popup(url);
    },

    twitter: function(purl, ptitle) {
        var url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        GeekBooster.Share.popup(url);
    },

    me: function(el) {
        console.log(el.href);
        GeekBooster.Share.popup(el.href);
        return false;
    },

    popup: function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};
