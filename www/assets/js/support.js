$(function () {

    // SLIDER BANNER
    $(window).load(function(){

        if ($('.iosSlider .slider .item').length>=1)
        {
            $('.iosSlider').iosSlider({
                snapToChildren: true,
                infiniteSlider: true,
                desktopClickDrag: true,
                navNextSelector: $('#topSlide .next'),
                navPrevSelector: $('#topSlide .prev'),
                autoSlide: true,
                autoSlideTimer: 5000,
                onSlideChange: schange
            });

            $('#topSlide .item').fadeIn(200);
        }

        if ($('.iosSlider .slider .item').length > 1) $('#topSlide .next, #topSlide .prev').fadeIn(200);
    });

    function schange(arg)
    {
        if (arg.currentSlideObject.hasClass('video')) $(arg.currentSlideObject).find('video').get(0).play();
    }

    // VYBER ZNACKA | MODEL | MOTOR
    // Výběr značky
    $(document).on('change', '#imark', function () {
        let value = $(this).val();
        $.nette.ajax({
            url: '?do=carSelector-setManufacturer',
            data: {'carSelector-manId': value}
        })
    });


    // Výběr modelu
    $(document).on('change', '#imodel', function () {
        let value = $(this).val();
        $('#sel figure').slideUp(200);
        $.nette.ajax({
            url: '?do=carSelector-setModel',
            data: {'carSelector-modId': value}
        })
    });


    // Výběr motoru
    $(document).on('change', '#imotor', function () {
        let value = $(this).val();
        $('#carSelectorVehicleIdHidden').val(value);
        $('#csSelectVehicle').hide();
        // $('#sel').submit();
        $('#form2').addClass('shown');
        $.nette.ajax({
            url: '?do=carSelector-setMotor',
            data: {'carSelector-vehicleId': value}
        })
    });



    // KONFIGURATOR S KALKULACKOU
    $(document).on('change', '#pref', function () {
        let value = $(this).val();
        $('#pref').hide();
        $('#koule').addClass('sel');
        $.nette.ajax({
            url: '?do=calculator-setPref',
            data: {'calculator-pref': value}
        })
    });


});