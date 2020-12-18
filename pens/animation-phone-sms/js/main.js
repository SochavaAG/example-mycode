(function ($) {
  $(function () {


    var agRandomInteger = function(argMin, argMax) {
      var agRand = argMin + Math.random() * (argMax + 1 - argMin);

      return Math.floor(agRand);
    };

    setInterval(function () {
      var agInteger1, agInteger2, agInteger3, agInteger4, agInteger5,
        agDecimalNumber1, agDecimalNumber2, agDecimalNumber3, agDecimalNumber4, agDecimalNumber5;

      agInteger1 = agRandomInteger(500, 999);
      agInteger2 = agRandomInteger(500, 999);
      agInteger3 = agRandomInteger(500, 999);
      agInteger4 = agRandomInteger(500, 999);
      agInteger5 = agRandomInteger(500, 999);
      agDecimalNumber1 = agRandomInteger(11, 99);
      agDecimalNumber2 = agRandomInteger(11, 99);
      agDecimalNumber3 = agRandomInteger(11, 99);
      agDecimalNumber4 = agRandomInteger(11, 99);
      agDecimalNumber5 = agRandomInteger(11, 99);

      if($('.ag-primary-phone_item-1').css('opacity') == 0) {
        agSum1 = "+" + agInteger1 + "." + agDecimalNumber1;
      }
      if($('.ag-primary-phone_item-2').css('opacity') == 0) {
        agSum2 = "+" + agInteger2 + "." + agDecimalNumber2;
      }
      if($('.ag-primary-phone_item-3').css('opacity') == 0) {
        agSum3 = "+" + agInteger3 + "." + agDecimalNumber3;
      }
      if($('.ag-primary-phone_item-4').css('opacity') == 0) {
        agSum4 = "+" + agInteger4 + "." + agDecimalNumber4;
      }
      if($('.ag-primary-phone_item-5').css('opacity') == 0) {
        agSum5 = "+" + agInteger5 + "." + agDecimalNumber5;
      }

      $('.js-primary-phone_sum-1').text(agSum1);
      $('.js-primary-phone_sum-2').text(agSum2);
      $('.js-primary-phone_sum-3').text(agSum3);
      $('.js-primary-phone_sum-4').text(agSum4);
      $('.js-primary-phone_sum-5').text(agSum5);
    }, 5000);


  });
})(jQuery);