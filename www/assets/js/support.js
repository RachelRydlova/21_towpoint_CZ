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

    $(document).on('click', '#snippet-carSelector-manufacturer', function (e){
        e.preventDefault()
    })
    $(document).on('blur', '#imark', function (){
        $('#preffered').slideUp(300);
    })


    // Výběr značky
    // Musím zachytit klik na odkaz!
    $(document).on('click', '#preffered a.znackaLink', function (e) {
        // Tady tímto řádkem zakážu aby to udělalo default akci presmerovani
        e.preventDefault();

        // potrebuji snimat odkaz, nejcasteji se to dela data atributem
        let value = $(this).attr('data-key');
        $('#imark').val(value);


        $.nette.ajax({
            url: '?do=carSelector-setManufacturer',
            data: {'carSelector-manId': value}
        }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax akce
            $('#preffered').slideUp(300);
            $('#selmodely').slideDown(300);
        });


    });


    // Výběr modelu
    $(document).on('click', '#selmodely a.modelLink', function (e) {
        e.preventDefault();
        let value = $(this).attr('data-key');
        $('#imodel').val(value);

        $.nette.ajax({
            url: '?do=carSelector-setModel',
            data: {'carSelector-modId': value}
        }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax akce
            $('#selmodely').slideUp(300);
            $('#selmotory').slideDown(300);
        });
    });

    $(document).on('focus','#imodel',function(){
        $('#selmodely').slideDown(300);
    });
    $(document).on('blur', '#imodel', function (){
        $('#selmodely').slideUp(300);
    })


    // Výběr motoru
    $(document).on('click', '#selmotory a.motorLink', function (e) {
        e.preventDefault();
        let value = $(this).attr('data-key');
        $('#imotor').val(value);
        $('#nabidka').addClass('loading');
        $('#selmotory').slideUp(300);


        $.nette.ajax({
            url: '?do=carSelector-saveData',
            data: {'carSelector-vehicleId': value}
        }).then(function (){
            $('#form2').addClass('shown');
            $('#nabidka').removeClass('loading');
        })
    });

    $(document).on('focus','#imotor',function(){
        $('#selmotory').slideDown(300);
    });
    $(document).on('blur', '#imotor', function (){
        $('#selmotory').slideUp(300);
    })




    // Komfortni vybava
    $(document).on('click', '#frm-carSelector-carSelector-komfort', function (){
        let value = 0;
        if ($('#frm-carSelector-carSelector-komfort').is(':checked')) {
            value = 1;
        }
        $('#nabidka').addClass('loading');
        $.nette.ajax({
            url: '?do=carSelector-setComfort',
            data: {'carSelector-comfort': value}
        }).then(function (){
            $('#nabidka').removeClass('loading');
        })
        console.log(value);
    })




    // KONFIGURATOR S KALKULACKOU
    $(document).on('click', '.pref div input', function () {
        // let value = 'cena';
        if ($('#pref-0').is(':checked')) {
            value = 'cena';
        }
        if ($('#pref-1').is(':checked')) {
            value = 'kvalita';
        }

        console.log(value);
        // $('#frm-calculator-calculator').submit();
        $.nette.ajax({
            url: '?do=calculator-setPref',
            data: {'calculator-pref': value}
        })
    });

    // zasuvka prepina redukci
    $(document).on('change', '.radios el', function (){
        $('.redukce > input').attr( 'checked', true );
    })







    // ODESLANI POPTAVKY
    $('.poptavka .yesno div, .poptavka .yesno a').click(function(){
        $(this).parent().toggleClass('sel');
        return false;
    });




    $('#form2 .cta').click(function(e) {
        e.preventDefault();
        //zkontroluju jestli je vyplnen email
        if ($('#frm-orderForm-orderForm-email').empty()) {
            $('#errorEmail').show();
            $('#frm-orderForm-orderForm-email').parent().addClass('error');
            }
        // zkontroluju jestli je vyplneno telefonni cislo
        if ($('#frm-orderForm-orderForm-tel').empty()) {
            $('#errorTel').show();
            $('#frm-orderForm-orderForm-tel').parent().addClass('error');
            //zkontroluju gdpr
            if (!$('.poptavka .yesno').hasClass('sel')) {
                $('.poptavka .yesno').addClass('error');
                $('.poptavka .yesno p').show();
            } else {
                $('.poptavka .yesno').removeClass('error');
                $('#frm-orderForm-orderForm-tel').parent().removeClass('error');
                $('#frm-orderForm-orderForm-email').parent().removeClass('error');
                $('.poptavka .yesno p, #errorTel, #errorEmail').hide();

            }
        } else {
            $('.final_loader').stop(true).delay(1000).fadeIn(200);
            $(this).submit();


// //		clearTimeout(uint);
            if (!$(this).hasClass('loading')) {
                $(this).addClass('loading');
                $('.final_loader').stop(true).delay(1000).fadeIn(200);
                $(this).submit();
                $('#form .yesno, #form .inputs > div, .poptavka .yesno').removeClass('error');
    //             // $.get(pprefix+'helpers/inquiry.php?isf=1',function(data){
    //             //     if (data!='')
    //             //     {
    //             //         $('.final_loader').stop(true).fadeOut(200);
    //             //         pole=data.split('***');
    //             //         $('.poptavka .yesno').each(function(){
    //             //             if (pole.indexOf($(this).attr('data'))>=0) $(this).addClass('error');
    //             //         });
    //             //         $('#form input').each(function(){
    //             //             if (pole.indexOf($(this).attr('data'))>=0) $(this).parent().addClass('error');
    //             //         });
    //             //         if (pole.includes('full-data')) $('#form .inputs p.complete').show().addClass('error');
    //             //         if ($(".error").length>0) $('html, body').animate({ scrollTop: $(".error").offset().top }, 250);
    //             //
    //             //         if (pole=='req_api'||pole=='reqid') alert('Vyskytla se chyba při předávání poptávky. Zkuste odeslat formulář později.');
    //             //     }
    //             //     $('#form2 .cta').removeClass('loading');
    //             // });
            }
        }
        return false;
    });



});