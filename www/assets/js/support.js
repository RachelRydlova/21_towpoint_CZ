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

    //
    // VYBER ZNACKA | MODEL | MOTOR
    //

    //zobrazeni znacek
    $(document).on('focus','#imark',function(){
        $('#preffered').slideDown(300);
    });


    // Výběr značky
    // Musíš zachytit klik na odkaz!
    $(document).on('click', '#preffered a.znackaLink', function (e) {
        // Tady tímto řádkem zakážeš aby to udělalo default akci presmerovani
        e.preventDefault();

        // Tento radek je blbost, protoze val() snima hodnotu form. prvku, ale ty snimas odkaz
        //let value = $(this).val();

        // Takze to musis vyresit jinak, nejcasteji se to dela data atributem
        let value = $(this).attr('data-key');
        $('#imark').val(value);

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
        $('#nabidka').addClass('loading');
        let value = $(this).val();
        $('#carSelectorVehicleIdHidden').val(value);
        //$('#csSelectVehicle').hide();
        $.nette.ajax({
            url: '?do=carSelector-saveData',
            data: {'carSelector-vehicleId': value}
        })
        $('#form2').addClass('shown');
        $('#nabidka').removeClass('loading');
    });




    // Komfortni vybava
    $(document).on('click', '#komfort', function (){
        let value = $(this).val();
        $('#komfort').toggleClass('sel');
        // $('#frm-carSelector-carSelector').submit()
        $.nette.ajax({
            url: '?do=carSelector-setKomfort',
            data: {'carSelector-komfort': value}
        })
    })












    // KONFIGURATOR S KALKULACKOU
    $(document).on('change', '.radios', function () {
        let value = $(this).val();
       // $(this).toggleClass('sel');
        $.nette.ajax({
            url: '?do=calculator-setParam',
            data: {'calculator-param': value}
        })
    });
















    // ODESLANI POPTAVKY
    $('.poptavka .yesno div, .poptavka .yesno a').click(function(){
        $(this).parent().toggleClass('sel');
        return false;
    });

    $('#form2 .cta').click(function(){
//		clearTimeout(uint);
        if (!$(this).hasClass('loading'))
        {
            $(this).addClass('loading');
            $('.final_loader').stop(true).delay(1000).fadeIn(200);
            $('#form .yesno, #form .inputs > div, .poptavka .yesno').removeClass('error');
            // $.get(pprefix+'helpers/inquiry.php?isf=1',function(data){
            //     if (data!='')
            //     {
            //         $('.final_loader').stop(true).fadeOut(200);
            //         pole=data.split('***');
            //         $('.poptavka .yesno').each(function(){
            //             if (pole.indexOf($(this).attr('data'))>=0) $(this).addClass('error');
            //         });
            //         $('#form input').each(function(){
            //             if (pole.indexOf($(this).attr('data'))>=0) $(this).parent().addClass('error');
            //         });
            //         if (pole.includes('full-data')) $('#form .inputs p.complete').show().addClass('error');
            //         if ($(".error").length>0) $('html, body').animate({ scrollTop: $(".error").offset().top }, 250);
            //
            //         if (pole=='req_api'||pole=='reqid') alert('Vyskytla se chyba při předávání poptávky. Zkuste odeslat formulář později.');
            //     }
            //     $('#form2 .cta').removeClass('loading');
            // });
        }
        return false;
    });


});