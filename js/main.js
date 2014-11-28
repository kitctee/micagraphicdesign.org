// Shortcut for
// $(document.ready(function (){});
$(function () {
    
    
    $('header.masthead').before('<div class="mastheadBefore" />');
    $('.mastheadBefore').append('<h1>MICA GD </h1>');
    $('header.masthead').after('<div class="mastheadAfter" />');
    
//    $('li.slide img').each(function (){
//        $(this).wrap('<div class="liIMG" />');
//        var bgURL = $(this).attr('src');
//        $('.liIMG').css('background-image', 'url(bgURL)');
//        console.log($(this).attr("src"));
//        $(this).hide();
//    });
    //THIS IS NOT WORKING!!
    
    
    
    $('.navigation .dropdown').on('click', function(){
        $('.navigation .dropdown.content').toggleClass('active');
    });
    $('.utility .dropdown').on('click', function(){
        $('.utility .dropdown.content').toggleClass('active');
    });
    
    
    $('.h-entry.story').find('.segment.gallery').append('<button class="reveal gallery">See the Gallery</button>');
    $('.h-entry.story').on('click', '.reveal.gallery', function () {
        $(this).parent().addClass('expanded');
        
        $('.segment.gallery .lightbox').nivoLightbox();
    });

    


    $('nav.social ul.menu li.item a.link').empty();
    //remove the text of those social icons
    
    $('input#mce-EMAIL').attr( 'placeholder', 'Your email address' ).attr('spellcheck', 'false');
    //add attr to the email <input>
    
//    $('nav.tags.menus.segment h2.heading').html('Tags');
    //change the Interests into tags
    
    $('nav.months.menu.ui a.prev.link.item').html('&#9664;');
    $('nav.months.menu.ui a.next.link.item').html('&#9654;');
    //change text into arrow

    
    
    $('nav.formats.menus ul.menu li.item').detach().prependTo('nav.tags.menus ul.menu');
    //move event formats link to the tags section
    
    $('.archives.segment').detach().appendTo('nav.tags.menus.segment ul.menu');
    //move view all event into the tags section

    
    
    $('td.day').on('click', '.link.day',function (event) {    
        var $parent = $(this).parent();
        event.preventDefault();
        
        if ($parent.hasClass('clicked')) {
            $parent.removeClass('clicked');
        } else {
            $parent.addClass('clicked');
            $('.mini.cal.ui').find('.active').removeClass('active');
        }
        $(this).siblings('.eventLinkCon').toggleClass('active');

        

    }).each(function (i) {
        var eventDiv = $('<div class="eventLinkCon" />');
        var links = $(this).find('.event.link');
        var width = links.length < 10 ? links.length * 4 : 100;
        var dotSpan = $('<span />', { class: 'eventDot', style: 'width:' + width + '%;'});
        
        eventDiv.append(links);
        
        if ($(this).find('a').length != 0) {
            $(this).append(eventDiv);
        };//only append eventDiv to days that have event(s)
        
        $(this).find('.date').append(dotSpan);
    });
    
    $('.mini.cal.ui').on('mouseleave', function() {
        $('.eventLinkCon').removeClass('active');
    });
    
    
    $('aside.profiles .profile.card .content li.item a').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    $('aside.profiles .profile.card .content li.item:first-child a').text('Website');
    //remove the text of those social networks

    
    
//    $('.masthead').hide();

    
    $('.mastheadBefore').on('click', function(){
        $('.masthead').toggleClass('active');
        $(this).css('padding', '0 0 0 270px');
    });
    
    
    
    
    

//    $('aside.segment.gallery li a').nivoLightbox();
//        $('a').nivoLightbox();

    
    
    
//    <a href="img/angles-in-atrium.jpg" data-lightbox-gallery="gallery1">
//    <img src="img/angles-in-atrium.jpg" alt="" />
//</a>
//<a href="img/brown-southeast-vertex.jpg" data-lightbox-gallery="gallery1">
//    <img src="img/brown-southeast-vertex.jpg" alt="" />
//</a>
//<a href="img/Unknown.jpeg" data-lightbox-gallery="gallery1">
//    <img src="img/Unknown.jpeg" alt="" />
//</a>
    
    
    
    
    
    
    
});