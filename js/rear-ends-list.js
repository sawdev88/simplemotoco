var rearEnds = [
  {
    title: '1981 CB750',
    shop: 'STEEL BENT CUSTOMS',
    img: '../img/rear-end/Honda-CB750-Cafe-Racer-rear.jpg',
    link: 'http://silodrome.com/honda-cb750-cafe-racers/',
  },
  {
    title: '1976 Honda CB750K \'Wabi-Sabi\'',
    shop: 'Powder Monkees',
    img: '../img/rear-end/Wabi-Sabi-Honda-CB750K-Custom-Cafe-Racer-Rear.jpg',
    link: 'http://www.bike-urious.com/wabi-sabi-1976-honda-cb750k-custom-cafe-racer/',
  },
  {
    title: 'Harley-Davidson Sportster',
    shop: '',
    img: '../img/rear-end/Harley-Davidson-Sporter-Cafe-Racer-9.jpg',
    link: 'http://silodrome.com/harley-davidson-sportster-cafe-racer/',
  },
  {
    title: 'CB750',
    shop: 'Rebellion of the Machines',
    img: '../img/rear-end/Rebellion-of-the-Machines-CB750-Custom-Cafe-Racer-Tail-Section-Rear.jpg',
    link: 'http://rebellionofthemachines.com/',
  },
  {
    title: 'BMW R100 \'Vault\'',
    shop: 'KEVILS SPEED SHOP',
    img: '../img/rear-end/Kevils-‘Vault’-BMW-R100-Café-Racer-Rear.jpg',
    link: 'http://thebikeshed.cc/2013/12/23/kevils-r100-vault/',
  },
  {
    title: 'BMW R100/7 \'#27\'',
    shop: 'Cafe Racer Dreams',
    img: '../img/rear-end/CRD-27-Rear-MS-800.jpg',
    link: 'http://thebikeshed.cc/2013/03/25/crd-27/',
  },
  {
    title: 'Moto Guzzi Le Mans 3',
    shop: 'KAFFEEMASCHINE',
    img: '../img/rear-end/Moto-Guzzi-rear-end.jpeg',
    link: 'http://silodrome.com/moto-guzzi-cafe-racer-custom/',
  },
  {
    title: 'Triumph Thruxton',
    shop: 'DOWN & OUT',
    img: '../img/rear-end/down-out-cafe-racers-8.jpg',
    link: 'http://www.bikeexif.com/down-out-cafe-racers',
  },
  {
    title: '1981 R100RS',
    shop: 'skrunkwerks',
    img: '../img/rear-end/BMW_caferacer_rear-940x1203.jpg',
    link: 'http://skrunkwerks.com/skrunk/luftkopf-no-1/',
  },
  {
    title: 'Hero Karizma \'Silver\'',
    shop: 'Mean Green Designs',
    img: '../img/rear-end/MGC-Sliver-Rear.jpg',
    link: 'http://www.pipeburn.com/home/2014/07/09/honda-karizma-sliver-by-mean-green-customs.html',
  },
]


$(function () {
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

  var list = shuffle(rearEnds);

  $(list).each(function (i, item) {
    $('.front-ends-list').append(
      '<li data-src="' + item.img + '" class="item" style="background: url(' + item.img + ') no-repeat center center / cover"data-sub-html="<h4>' + item.title + '</h4><h4>' + item.shop + '</h4>">' +
        '<div class="callout">' +
        item.title +
        '<span>' + item.shop + '</span>' +
        '</div>' +
      '</li>'
    )
  })
})
