function setListItems(ele) {
  $(ele).each(function (i, item) {
    var author = '';
    if (item.author) { author = item.author };

    $('.items-list').append(
      '<li class="item dark-bg-color" style="background: url(' + item.img + ') no-repeat center center / contain; background-color: #fff !important; box-shadow: none; margin-bottom: 3rem;">' +
        '<div class="callout">' +
          '<h4>' + item.title + '</h4>' +
          '<span>' + author + '</span>' +
        '</div>' +
        '<a class="cover" href="' + item.link + '" target="_blank"></a>' +
      '</li>'
    );
  });
}

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
