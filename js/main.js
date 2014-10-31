// Shortcut for
// $(document.ready(function (){});
$(function () {
    $('.h-entry.story').find('.segment.gallery').append('<button class="reveal gallery">See the Gallery</button>');
    $('.h-entry.story').on('click', '.reveal.gallery', function () {
        $(this).parent().addClass('expanded');
        
        $('.segment.gallery .lightbox').nivoLightbox();
    });



//                $('nav.social.menus').detach().prependTo('.sub');
//                $('form.form').detach().prependTo('.sub');
                $('nav.formats.menus.segment ul.menu li.item').detach().prependTo('nav.tags.menus.segment ul.menu');
                $('.archives.segment').detach().appendTo('nav.tags.menus.segment ul.menu');
                $('nav.social ul.menu li.item a.link').empty();
//                $('div.calendar.segment').click(function () {
//                    $(this).toggleClass('fullsize');
//                });

                $('h1.page.heading').hide();
                $('nav.tags.menus.segment h2.heading').html('Tags');
                $('input#mce-EMAIL').attr( 'placeholder', 'Your email address' );
                $('input#mce-EMAIL').attr( 'spellcheck', 'false' );



});