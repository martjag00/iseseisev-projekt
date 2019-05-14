(
  function($) {


    $('html').removeClass('no-js');

    $('header a').click(function(e) {

        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);


        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });




    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // timeline'i script
    $('#experience-timeline').each(function() {

        $this = $(this);
        $userContent = $this.children('div');

        // timeline blokkide tegemine
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // ikoonide lisamine
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // lisab kuupäevi timeline'i kui neid on
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { 
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

}
)(jQuery);
