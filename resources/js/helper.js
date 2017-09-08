function setListItems(ele) {
  $(ele).each(function (i, item) {
    $('.items-list').append(
      '<li class="item" style="background: url(' + item.img + ') no-repeat center center / contain">' +
        '<div class="callout">' +
          '<h4>' + item.title + '</h4>' +
          '<span>' + item.author + '</span>' +
        '</div>' +
        '<a class="cover" href="' + item.link + '"></a>' +
      '</li>'
    );
  });
}
