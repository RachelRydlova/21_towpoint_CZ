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
        e.preventDefault();

    });

    $(document).on('focus','#imodel',function(){
        $('#selmodely').slideDown(300);
    });

    $(document).on('blur', '#imark', function (e){
        $('#preffered').slideUp(300);
    })

    $(document).on('blur', '#imodel', function (e){
        $('#selmodely').slideUp(300);
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




    // Komfortni vybava
    $(document).on('change', '#komfort input', function (){
        // let value = $(this).val();
        var value = document.querySelector('#komfort input:checked').value;
        // let value = $("input[type='checkbox']").val();
        // $('#komfort div input').toggleClass('sel');
        $.nette.ajax({
            url: '?do=carSelector-setKomfort',
            data: {'carSelector-komfort': value}
        })
    })



    // KONFIGURATOR S KALKULACKOU
    $(document).on('change', '.radios', function () {
        let value = $(this).val();
        // $('#frm-calculator-calculator').submit();
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