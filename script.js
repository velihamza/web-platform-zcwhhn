console.log('Hello!');
$(document).ready(() => {
  var _json = [];
  var that = this;
  $.getJSON('ililce.json', (json) => {
    _json = json.data;
    $.each(json.data, function (key, value) {
      $('#city-select').append(
        `<option value="${value.plaka_kodu}">${value.il_adi}</option>`
      );
    });
  });
  $('#city-select ').on('change', function () {
    console.log($(this).find(':selected').val());
    $('#town-select').empty();
    $('#town-select').append(`<option selected>--- İlçe Seçiniz ---</option>`);
    var foundedCity = _json.find((city) => city.plaka_kodu == $(this).val());
    if (foundedCity) {
      $.each(foundedCity.ilceler, function (key, value) {
        $('#town-select').append(
          `<option value="${value.ilce_kodu}">${value.ilce_adi}</option>`
        );
      });
    }
  });
});
