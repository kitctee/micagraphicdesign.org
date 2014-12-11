// Shortcut for
// $(document.ready(function (){});
$(function () {
    
    $('.brand').detach().prependTo('.shim').html('MICA GD');
    $('form[role="search"]').detach().prependTo('.shim').after('<div class="searchIconToggle"><div class="searchIcon2" /></div>');
    $('button.control').html('&emsp;').append('<div class="searchIcon" />');
    $('nav.social.menus').detach().prependTo('.shim');
    
    $('header.masthead').wrap('<div class="mastheadWrap" />');    
    $('header.masthead').before('<div class="mastheadToggle" />');
    $('.mastheadToggle').append('<span>&#9776;</span><h1>Menu</h1>');
    $('header.masthead').after('<div class="mastheadAfter" />');
    $('header.masthead').after('<div class="mastheadBg" />');

    $('.content .footer nav.tags').each(function() {
        var $categories = $(this).prev();
        if ($(this).children().length > 0) {
            $(this).children().detach().appendTo($categories);
        };
    });

    $('.mastheadToggle').on('click', function(){
        $('form[role="search"]').removeClass('active');
        $('.masthead, nav.social').toggleClass('active');
    });
    $('.searchIconToggle').on('click', function(){
        $('.masthead, nav.social').removeClass('active');
        $('form[role="search"]').toggleClass('active');
    });
    //mobile menu & search toggle
    
    $('.navigation .dropdown').on('click', function(){
        $('.navigation .dropdown.content').toggleClass('active');
    });
    $('.utility .dropdown').on('click', function(){
        $('.utility .dropdown.content').toggleClass('active');
    });
    
    $('nav.social ul.menu li.item a.link').empty();
    //remove the text of those social icons
    
    $('input#mce-EMAIL').attr( 'placeholder', 'Your email address' ).attr('spellcheck', 'false');
    //add attr to the email <input>
    
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
    
    $('main, .main').on('click', function(){
        $('.masthead, nav.social').removeClass('active');
        $('form[role="search"]').removeClass('active');
    });
    
    $('.h-entry.story').find('.segment.gallery').append('<button class="reveal gallery">See the Gallery</button>');
    
    $('.h-entry.story').on('click', '.reveal.gallery', function () {
        $('.segment.gallery ul.slides a').attr('data-lightbox-gallery','gallery1').nivoLightbox().eq(0).click();
    });



    
});