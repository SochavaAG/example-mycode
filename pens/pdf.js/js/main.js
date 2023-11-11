(function ($) {
  $(function () {


    /* Custom PDF Reader */
    var pdfjsLib = window['pdfjs-dist/build/pdf'];

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';

    $(document).ready(function () {
      var onloadHref = $('.js-ag-pdf-docs_box').first().find('.js-pdf-tab_link').first().attr('href');
      $('.js-ag-pdf-docs_box').first().find('.js-pdf-tab_link').first().addClass('js-ag-pdf-tab_link__active');

      $('.js-ag-pdf-docs_box').first().find('.js-ag-not-first-frame').hide();
      $('.js-ag-pdf-docs_box').first().find('.js-ag-spinner').show();
      $('.js-ag-pdf-docs_box').first().find('.js-ag-pdf-loading-info').show();

      $(onloadHref).css('display', 'block');
      $(onloadHref).addClass('js-ag-pdf-frame_item__active');

      var $page = $('html, body');
      $('a[href*="#"]').click(function() {
        $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top -120}, 500);
        return false;
      });

      generateCurrentPdf(onloadHref);
    });

    $('.js-pdf-tab_title-list').on('click', function () {
      if ($(this).closest('li').hasClass('js-ag-pdf-tab-cat_item__active')) {
        $('.js-ag-pdf-tab-cat_item').removeClass('js-ag-pdf-tab-cat_item__active');
      } else {
        $('.js-ag-pdf-tab-cat_item').removeClass('js-ag-pdf-tab-cat_item__active');
        $(this).closest('li').addClass('js-ag-pdf-tab-cat_item__active');
      }
    });



    $('.js-pdf-tab_link').on('click', function () {
      var thisHref = $(this).attr('href');
      $(this).closest('.js-ag-pdf_box').find('.js-pdf-tab_link').removeClass('js-ag-pdf-tab_link__active');
      $(this).addClass('js-ag-pdf-tab_link__active');

      $(this).closest('.js-ag-pdf_box').find('.js-ag-pdf-frame_item__active').hide();
      $(this).closest('.js-ag-pdf_box').find('.js-ag-not-first-frame').hide();
      $(this).closest('.js-ag-pdf_box').find('.js-ag-pdf-loading-info').show();
      $(this).closest('.js-ag-pdf_box').find('.js-ag-spinner').show();
      $(this).closest('.js-ag-pdf_box').find('.js-ag-pdf-frame_item').removeClass('js-ag-pdf-frame_item__active');
      $(thisHref).show();
      $(thisHref).addClass('js-ag-pdf-frame_item__active');

      $(this).closest('.js-ag-pdf_box').find('#js-pdf-loader').show();

      if ($(thisHref).find('canvas').length > 0) {
        $(this).closest('.js-ag-pdf_box').find('#js-pdf-loader').fadeOut();
      } else {
        generateCurrentPdf(thisHref);
      }
    });

    function generateCurrentPdf(href) {
      var url = $(href).data('file');
      var tabId = $(href).attr('id');

      var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        disableAutoFetch = true,
        disableStream = true,
        scale = 1.5;

      function renderPage(num, canvas) {
        var ctx = canvas.getContext('2d');

        pageRendering = true;
        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function (page) {
          var viewport = page.getViewport({
            scale: scale,
            disableAutoFetch: disableAutoFetch,
            disableStream: disableStream
          });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);

          // Wait for rendering to finish
          renderTask.promise.then(function () {
            pageRendering = false;
            if (pageNumPending !== null) {
              // New page rendering is pending
              renderPage(pageNumPending);
              pageNumPending = null;
            }

            $(href).closest('.js-ag-pdf_box').find('#js-pdf-loader').fadeOut();
          });
        });
      }

      pdfjsLib.getDocument(url, tabId).promise.then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;

        const pages = parseInt(pdfDoc.numPages);

        var canvasHtml = '';
        for (var i = 0; i < pages; i++) {
          canvasHtml += '<canvas id="' + tabId + '-canvas_' + i + '"></canvas>';
        }

        document.getElementById('js-pdf-canvases-' + tabId).innerHTML = canvasHtml;

        for (var i = 0; i < pages; i++) {
          var canvas = document.getElementById(tabId + '-canvas_' + i);
          renderPage(i + 1, canvas);

        }
      });
    }
    /* /Custom PDF Reader */


  });
})(jQuery);