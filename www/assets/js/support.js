$(function () {

   // Výběr značky
    $(document).on('change', '#carSelectorManId', function () {
        let value = $(this).val();

        $.nette.ajax({
            url: '?do=carSelector-setManufacturer',
            data: {'carSelector-manId': value}
        })
    });


    // Výběr modelu
    $(document).on('change', '#carSelectorModId', function () {
        let value = $(this).val();
        $.ajax({
            url: '?do=carSelector-setModel',
            data: {'carSelector-modId': value}
        })
    });


    // Výběr motoru
    $(document).on('change', '#carSelectorVehicleId', function () {
        let val = $(this).val();
        $('#carSelectorVehicleIdHidden').val(val);
        /*$('#csSelectVehicle').hide();*/
        $('#csBar').css('width', '100%');
        $('#carSelectorForm').submit();
    });


    // Odeslani formulare vyberu auta
    $(document).on('submit', '#carSelectorForm', function (e) {
        e.preventDefault();
        let settings = {};
        $(this).netteAjax(e, settings);
    })
});