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

    $(window).load(function (){
        $('#snippet-calculator-summaryBox > div').hide();
    });


    //
    // VYBER ZNACKA | MODEL | MOTOR
    //

    //zobrazeni znacek
    $(document).on('focus','#imark',function(){
        $('#preffered').slideDown(300);

    });

    $(document).on('blur', '#imark', function (){
        $('#preffered').slideUp(300);
    });


    // Výběr značky
    // Musím zachytit klik na odkaz!
    $(document).on('click', '#preffered a.znackaLink', function (e) {
        // Tady tímto řádkem zakážu aby to udělalo default akci presmerovani
        e.stopImmediatePropagation();

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
            $('#cenaPevne7').show();
            $('#pref-0, #koule-0, #el-0').prop('checked', true);
        })
    });
    $(document).on('focus','#imotor',function(){
        $('#selmotory').slideDown(300);
    });
    $(document).on('blur', '#imotor', function (){
        $('#selmotory').slideUp(300);
    });


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
            $('#cenaPevne7').show();
            $('#pref-0, #koule-0, #el-0, #redukce-0').prop('checked', true);
        })
        console.log(value);
    });


    // KONFIGURATOR S KALKULACKOU
    $(document).on('click', '.radios div > div', function () {
        // prvni schovam vsechny ceny
        $('#snippet-calculator-summaryBox > div').hide();

        // vyber a zobrazeni spravne ceny

        // CENA?
        if ($('#pref-0').is(':checked')) {


            // pevne?
            if ($('#koule-0').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#cenaPevne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#cenaPevne13').show();
                }
            }
            // odnimatelne?
            if ($('#koule-1').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#cenaOdnimatelne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#cenaOdnimatelne13').show();
                }
            }
        }
        // KVALITA?
        if ($('#pref-1').is(':checked')) {

            // pevne?
            if ($('#koule-0').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#kvalitaPevne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#kvalitaPevne13').show();
                }
            }
            // odnimatelne?
            if ($('#koule-1').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#kvalitaOdnimatelne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#kvalitaOdnimatelne13').show();
                }
            }
        }
    })


    // zasuvka prepina redukci
    $(document).on('click', '.el', function (){
        if ($('#el-1').is(':checked')) {
            $('#redukce-1').prop('checked', true);
        } else {
            $('#redukce-0').prop('checked', true);
        }
    });



    // ODESLANI POPTAVKY
    $('.poptavka .yesno div, .poptavka .yesno a').click(function(){
        $(this).parent().toggleClass('sel');
        return false;
    });




    $('#form2 .cta').click(function() {


       // zkontroluju jestli je vyplnen email
        if ($('#frm-orderForm-orderForm-email').empty()) {
            $('#errorEmail').show();
            $('#frm-orderForm-orderForm-email').parent().addClass('error');

           // zkontroluju jestli je vyplneno telefonni cislo
            if ($('#frm-orderForm-orderForm-tel').empty()) {
                $('#errorTel').show();
                $('#frm-orderForm-orderForm-tel').parent().addClass('error');

                //zkontroluju gdpr
                if (!$('.poptavka .yesno').hasClass('sel')) {
                    $('.poptavka .yesno').addClass('error');
                    $('.poptavka .yesno p').show();


                } else {
                    let value = val(value);
                    sessionStorage.setItem("key", "value");
                    console.log($value);
                    $('.poptavka .yesno').removeClass('error');
                    $('#frm-orderForm-orderForm-tel').parent().removeClass('error');
                    $('#frm-orderForm-orderForm-email').parent().removeClass('error');
                    $('.poptavka .yesno p, #errorTel, #errorEmail').hide();

                }
            }
        }


    });

})
