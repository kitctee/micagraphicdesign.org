// Shortcut for
// $(document.ready(function (){});
$(function () {
    $('.h-entry.story').find('.segment.gallery').append('<button class="reveal gallery">See the Gallery</button>');
    $('.h-entry.story').on('click', '.reveal.gallery', function () {
        $(this).parent().addClass('expanded');
        
        $('.segment.gallery .lightbox').nivoLightbox();
    });

    
    $('h1.page.heading').hide();

    $('nav.social ul.menu li.item a.link').empty();
    //remove the text of those social icons
    
    $('input#mce-EMAIL').attr( 'placeholder', 'Your email address' ).attr('spellcheck', 'false');
    //add attr to the email <input>
    
    $('nav.tags.menus.segment h2.heading').html('Tags');
    //change the Interests into tags
    
    $('nav.formats.menus ul.menu li.item').detach().prependTo('nav.tags.menus ul.menu');
    //move event formats link to the tags section
    
    $('.archives.segment').detach().appendTo('nav.tags.menus.segment ul.menu');
    //move view all event into the tags section

    
    $('td.day').on('click', '.link.day',function (event) {    
        event.preventDefault();
        $('.mini.cal.ui').find('.active').removeClass('active');
        
        $(this).parent().toggleClass('clicked');
        $(this).siblings('.eventLinkCon').addClass('active');
        //THESE ARE NOT WORKING!!!
        
//        if ($('.eventLinkCon').hasClass('active')) {
//            $(this).parent('td.event.day').click(function() {
//                $('.eventLinkCon').removeClass('active');
//                console.log('sdsdssss');
//            }); 
//        };
        

    }).each(function (i) {
        var eventDiv = $('<div class="eventLinkCon" />');
        var links = $(this).find('.event.link');
        var width = links.length < 10 ? links.length * 7 : 100;
        var dotSpan = $('<span />', { class: 'eventDot', style: 'width:' + width + '%;'});
        
        eventDiv.append(links);
        
        if ($(this).find('a').length != 0) {
            $(this).append(eventDiv);
        };//only append eventDiv to days that have event(s)
        
        $(this).find('.date').append(dotSpan);
    });
    
    $('.mini.cal.ui').on('mouseleave', function() {
        $('.eventLinkCon').removeClass('active');
        console.log('sfuhskdf');
    });
    
    
    $('aside.profiles .profile.card .content li.item a').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    $('aside.profiles .profile.card .content li.item:first-child a').text('Website');
    //remove the text of those social networks

});