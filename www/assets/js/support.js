var uint;

$(function () {

    // SLIDER BANNER
    $(window).load(function(){

        // window.addEventListener('wheel', { passive: false });

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

    // zobrazeni carSelectoru pri mobilnim zobrazeni
    $(document).on('click', '#frm-carSelector-carSelector input', function () {
        let width = $(document).width();
        if (width <= 480){
            console.log(width);
            $('#imark, #imodel, #imotor').prop("readonly", true);
        }
    })


    //
    // VYBER ZNACKA | MODEL | MOTOR
    //

    //zobrazeni prvku carSelectoru
    $(document).on('focus','#imark',function(){
        $('#mark').show();
        $('#model, #motor, #imodel, #imotor').hide();
    });

    $(document).on('blur', '#imark', function (){
        $('#mark').slideUp(300);
        $('#imodel, #imotor').show();
    });
    $(document).on('focus','#imodel',function(){
        $('#model').slideDown(300);
        $('#motor').slideUp(300);
        $('#imotor').hide();
    });
    $(document).on('blur', '#imodel', function (){
        $('#imotor').show();
    });
    $(document).on('focus','#imotor',function(){
        $('#motor').slideDown(300);
        $('#form2').addClass('loading').removeClass('shown');
        $('#frm-calculator-calculator :input').prop('disabled', true);
    });
    $(document).on('blur', '#imotor', function (){
        $('#motor').slideUp(300);
    });

    let $mb_to;

    // Výběr značky
    $(document).on('click', '.znackaLink', function (e) {
        // Tady tímto řádkem zakážu aby to udělalo default akci presmerovani
        e.preventDefault();

        $('#sel').addClass('loading');
        $('#motor').prop('disabled',true).val('').addClass('dis');

        // potrebuji snimat odkaz, nejcasteji se to dela data atributem
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');

        $.nette.ajax({
            url: '?do=carSelector-setManufacturer',
            data: {'carSelector-manId': value}
        }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax Akce
            $('#imark').val(title);
            $('html, body').animate({ scrollTop: $("#imark").offset().top }, 250);
            $('#mark').hide();
            $('#model').show();
            $('#sel').removeClass('loading');
            $('#form2').removeClass('shown');
        });

        console.log(value, title, '-> VYBER znacky');
    });
    // vyhledávání značky
    $(document).on('keyup', '#imark', function (e) {
        let value = $(this).val();
        clearTimeout($mb_to);

        // Enter
        if (e.keyCode == 13 && value){
            let s = value.toUpperCase();
            let id = false;
            let title = false;
            let last = false;
            let lastTitle = false;
            let i = 0;
            $('.znackaLink').each(function() {
                let op = $(this).attr('data-key');
                let optitle = $(this).attr('title');
                if (optitle !== "") {
                    i++;
                    if (s === optitle) {
                        title = optitle;
                        id = op;
                        return true;
                    }
                    last = op;
                    lastTitle = title;
                }
            });
            console.log(id);
            console.log(i);
            console.log(title);
            if (id || i === 1) {
                if (!id) {
                    id = last;
                }
                if (!title) {
                    title = lastTitle;
                }
                console.log(title);
                //$('#imark').val(id);
                $('#imodel').val('');
                $('#imotor').val('');
                //$('#mark').val(id).change();
                $.nette.ajax({
                    url: '?do=carSelector-setManufacturer',
                    data: {'carSelector-manId': id}
                }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax Akce
                    $('#imark').val(title);
                    $('html, body').animate({ scrollTop: $("#imark").offset().top }, 250);
                    $('#mark').hide();
                    $('#model').show();
                    $('#sel').removeClass('loading');
                    $('#form2').removeClass('shown');
                });
                return true;
            }
        }

        $('#imark').addClass('loading');

        $mb_to = setTimeout(function (){

            $.nette.ajax({
                url: '?do=carSelector-searchManuf',
                data: {'carSelector-search': value}
            }).then(function (){
                $('#imark').removeClass('loading');
                $('#mark').show();
            });
        }, 300)
    });

    // Výběr modelu
    $(document).on('click', '#model a.modelLink', function (e) {
        e.preventDefault();
        $('#sel').addClass('loading');
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');
        // $('#imodel').val(title);
        $('html, body').animate({ scrollTop: $("#imodel").offset().top }, 250);

        $.nette.ajax({
            url: '?do=carSelector-setModel',
            data: {'carSelector-modId': value}
        }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax Akce
            $('#model').slideUp(300);
            $('#motor').slideDown(300);
            $('#imodel').val(title);
            $('#sel').removeClass('loading');
            $('#form2').removeClass('shown');
        });
        console.log(value, title, '-> VYBER modelu');
    });
    // vyhledávání modelu
    $(document).on('keyup', '#imodel', function () {


        $('#imodel').addClass('loading');
        let manId = $('#manIdValue').text();
        let search = $(this).val();

        clearTimeout($mb_to);
        $mb_to = setTimeout(function (){


            $.nette.ajax({
                url: '?do=carSelector-setManufacturer',
                data: {'carSelector-manId': manId, 'carSelector-search': search}
            }).then(function () {
                console.log(manId, search);
                $('#imodel').removeClass('loading');
                if ($('#model').is(":hidden")){
                    $('#model').show();
                }
                $('#imodel').val(search).focus();
            });
        }, 300)
    });
    // Náhled vozidla u modelu
    $(document).on('hover', '#model .all > div', function (){
        $('#model .all figure').hide();
        $(this).children().show();
    })

    // vyhledavani v inputu motoru
    $(document).on('keyup', '#imotor', function () {

        $('#imotor').addClass('loading');

        let modId = $('#modIdValue').text();
        let search = $(this).val();
        console.log(modId, search);

        clearTimeout($mb_to);
        $mb_to = setTimeout(function() {

            $.nette.ajax({
                url: '?do=carSelector-setModel',
                data: { 'carSelector-modId': modId, 'carSelector-search': search }
            }).then(function() {
                $('#imotor').removeClass('loading');
                if ($('#motor').is(":hidden")) {
                    $('#motor').show();
                }
                $('#imotor').val(search).focus();
            });
        }, 300)
    });
    // Výběr motoru
    $(document).on('click', '#motor a.motorLink', function(e) {
        e.preventDefault();
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');

        $('#imotor').val(title);
        $('#motor').slideUp(300);
        $('#sel').addClass('loading');

        $.nette.ajax({
            url: '?do=carSelector-saveData',
            data: { 'carSelector-vehicleId': value }
        }).then(function() {
            $('#imotor').val(title);
            $('html, body').animate({ scrollTop: $("#imotor").offset().top }, 250);
            $('#pref-0, #koule-0, #el-0, #redukce-0').prop('checked', true);

            $('#frm-calculator-calculator :input').prop('disabled', false);
            $('#frm-orderForm-orderForm :input').prop('disabled', false);
            $('#redukce-0 , #redukce-1').prop('disabled', true);
            $('#sel').removeClass('loading');
            $('#form2').removeClass('loading').addClass('shown');
            $('#cenaPevne7').show();
        })
        console.log(value, title, '-> VYBER motoru');
    });


    // Komfortni vybava
    $(document).on('click', '#frm-carSelector-carSelector-komfort', function() {
        $('#form2').removeClass('shown');
        $('#sel').addClass('loading');

        let value = 0;
        if ($('#frm-carSelector-carSelector-komfort').is(':checked')) {
            value = 1;
        }
        $('#form2').addClass('loading');
        $.nette.ajax({
            url: '?do=carSelector-setComfort',
            data: { 'carSelector-comfort': value }
        }).then(function() {
            $('#cenaPevne7').show();
            $('#pref-0, #koule-0, #el-0, #redukce-0').prop('checked', true);
            $('#form2, #sel').addClass('shown').removeClass('loading');
        })
    });

    // KONFIGURATOR S KALKULACKOU
    $(document).on('click', '.radios div', function() {
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
    $(document).on('click', '.el', function() {
        if ($('#el-1').is(':checked')) {
            $('#redukce-1').prop('checked', true);
        } else {
            $('#redukce-0').prop('checked', true);
        }
    });


    // odeslani vyplnenych dat po zadani mailu / prefinal request
    $(document).on('blur', '#frm-orderForm-orderForm-email', function() {
        // zjistim co vse vyplnil v kontaktu
        let email = document.querySelector('#frm-orderForm-orderForm-email').value;
        console.log(email);
        // handlerem poslu data k dalsimu zpracovani
        $.nette.ajax({
            url: '?do=orderForm-sendMail',
            data: { 'orderForm-email': email }
        });
    })

    // zablokovani odeslani formulare enterem
    $('#form2').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });


    // kontrola jestli jsou vyplneny povinne udaje, nastylovani
    $('#form2 .cta').click(function(e) {

        e.preventDefault();

        // zjistim jestli je vyplneny email
        let mailId = $('#frm-orderForm-orderForm-email');
        let mail = mailId.val();
        if (!mail || mail.length === 0) {
            mailId.parent().addClass('error');
            $('.inputs p.complete').show();
        } else {
            mailId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }
        console.log(mail);

        // zjistim jestli je vyplneny telefon
        let telId = $('#frm-orderForm-orderForm-tel');
        let tel = telId.val();
        if (!tel || tel.length === 0) {
            telId.parent().addClass('error');
            $('.inputs p.complete').show();
        } else {
            telId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }

        // potvrzeno GDPR?
        let gdpr = 0;
        if ($('#frm-orderForm-orderForm-gdpr').is(':checked')) {
            gdpr = 1;
        }
        if (gdpr === 0) {
            $('.poptavka span > p').show().addClass('error');
            $('.inputs p.complete').show();
        } else {
            $('.poptavka span > p').removeClass('error');
            $('.poptavka span > p.hidden').hide();

        }
        let vehicleId = $('#imotor').val();

        // pro odeslani pozadavku musi byt vyplnen email, telefon a zvolen motor
        if (mail && tel) {
            $('.inputs p.complete').hide();
            if (gdpr === 1) {
                if (vehicleId) {
                    $('#frm-orderForm-orderForm').addClass('loading').submit();
                    $('.final_loader').stop(true).delay(1000).fadeIn(200);
                }
            }
        }

        // vytahnu info o zvolenych preferencich
        value = get_selected_radios_array();
        param = JSON.stringify(value);
        $.nette.ajax({
            url: '?do=calculator-setPref',
            data: { 'calculator-preference': param }
        });

    });



    // kontrola jestli jsou vyplneny povinne udaje v kontaktnim formulari
    $('#frm-contactForm .cta').click(function(e) {
        e.preventDefault();

        // zjistim jestli je vyplneny email
        let mailId = $('#frm-contactForm-email');
        let mail = mailId.val();
        if (!mail || mail.length === 0) {
            mailId.parent().addClass('error');
            $('.inputs p.complete').show();
        } else {
            mailId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }
        console.log(mail);

        // zjistim jestli je vyplneny telefon
        let telId = $('#frm-contactForm-tel');
        let tel = telId.val();
        if (!tel || tel.length === 0) {
            telId.parent().addClass('error');
            $('.inputs p.complete').show();
        } else {
            telId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }

        // potvrzeno GDPR?
        let gdpr = 0;
        if ($('#frm-contactForm-gdpr').is(':checked')) {
            gdpr = 1;
        }
        if (gdpr === 0) {
            $('.poptavka span > p').show().addClass('error');
            $('.inputs p.complete').show();
        } else {
            $('.poptavka span > p').removeClass('error');
            $('.poptavka span > p.hidden').hide();

        }

        if (mail && tel) {
            $('.inputs p.complete').hide();
            if (gdpr === 1) {
                $('#frm-contactForm').addClass('loading').submit();
                $('.final_loader').stop(true).delay(1000).fadeIn(200);
            }
        }
    });


    // navbar
    $('#navmail').on('hover', function() {
        $('.navmail').toggleClass('shown');
    });


    // //otevreni modalu s detailem strediska
    // var modal = $('#modal');
    // $('#more').on('click', function (){
    //     if (modal.hasClass('selected')){
    //         modal.removeClass('selected');
    //     } else {
    //         modal.addClass('selected');
    //     }
    // });
    //
    // // zavreni modalu na ESC
    // $(document).on('keyup', function(e) {
    //     if (e.key == "Escape") {
    //         $('#modal').removeClass('selected');
    //     }
    // });
    // // zavreni modalu krizkem
    // $('.close').on('click', function() {
    //     $('#modal').removeClass('selected');
    // });



    // FUNKCE

    // vytahuju hodnoty vsech radio buttonu na strance
    function get_selected_radios_array() {
        var ch_list = Array();
        $("input:radio[type=radio]:checked").each(function() { ch_list.push($(this).val()); });
        return ch_list;
    }

})