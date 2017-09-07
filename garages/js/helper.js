function setListItems(ele) {
  $(ele).each(function (i, item) {
    if (item.city) {
      $('.items-list').append(
        '<li class="item" style="background: url(' + item.img + ') no-repeat center center / cover">' +
          '<div class="callout">' +
            '<h4>' + item.shop + '</h4>' +
            '<span>' + item.city + ', ' + item.state + '</span>' +
          '</div>' +
          '<a class="cover" href="' + item.link + '"></a>' +
        '</li>'
      )
    } else {
      $('.intl-list').append(
        '<li class="item" style="background: url(' + item.img + ') no-repeat center center / cover">' +
          '<div class="callout">' +
            '<h4>' + item.shop + '</h4>' +
            '<span>' + item.location + '</span>' +
          '</div>' +
          '<a class="cover" href="' + item.link + '"></a>' +
        '</li>'
      )
    }
  })
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
