function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function setListItems(ele) {
  $(ele).each(function (i, item) {
    $('.items-list').append(
      '<li data-src="' + item.img + '" data-link="' + item.link + '" class="item" style="background: url(' + item.img + ') no-repeat center center / cover"data-sub-html="<h4>' + item.title + '</h4><span>' + item.shop + '</span>">' +
        '<img src="' + item.img + '" alt="' + item.shop + ' ' + item.title + ' ' + item.donor + '">' +
        '<div class="callout">' +
        item.title +
        '<span>' + item.shop + '</span>' +
        '</div>' +
      '</li>'
    )
  })
}
