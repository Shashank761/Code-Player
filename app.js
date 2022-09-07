$( () => {

  $('.toggleButton').hover(function() {
    $(this).toggleClass('btn-hover');
  });

  $('.toggleButton').click(function() {
    $(this).toggleClass('active');
    const $panelID = $(this).attr('id') + '-panel';
    $('#' + $panelID).toggleClass('hidden');
    const $activeCount = 4 - $('.hidden').length;
    $('.panel').width(($(window).width() / $activeCount) - 10);
  });

  $('textarea').on('change keyup paste', function() {
    updateOutput();
  })

const updateOutput = function() {
  $('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#css-panel').val() + "</style></head><body>" + $('#html-panel').val() + "</body></html>");

  document.getElementById('output-panel').contentWindow.eval($('#javascript-panel').val());

};

//Page Load with Default 2 Active
  $('.panel').height($(window).height() - $('nav').height() - 30);
  $('.panel').width(($(window).width() / 2) - 10);
  updateOutput();

});//