// {{ with .Site.Params.markmap }}
// {{ if .enable }}


(function($) {
    var needMarkmap = false;
    $('.language-markmap').parent().replaceWith(function() {
        needMarkmap = true;
        return $('<div class="markmap">').text($(this).text());
    });

    const { markmap } = window;
    if(needMarkmap) {
        markmap.autoLoader.renderAll();
    }

})(jQuery);


// var needMarkmap = false;
// document.querySelector('.language-markmap').parent().replaceWith(function() {
//     needMarkmap = true;
//     return document.querySelector('<div class="markmap">').text(document.querySelector(this).text());
// });

// const { markmap } = window;
// if(needMarkmap) {
//     markmap.autoLoader.renderAll();
// }
// {{ end }}
// {{ end }}
