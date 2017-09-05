var batts = [
  {
    title: 'W650',
    shop: 'Down & Out',
    img: './img/batt/DO-W650-5-700x525.jpg',
    link: 'http://thebikeshed.cc/2014/07/01/down-out-cafe-racers-w650/',
  },
  {
    title: '1976 GS550',
    shop: 'For The Bold - dreegez',
    img: './img/batt/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=DXclkC1yZEI',
  },
  {
    title: '78 CB750',
    shop: 'Do The Ton - timdhawk',
    img: './img/batt/dtt-cb750.jpg',
    link: 'http://www.dotheton.com/forum/index.php?topic=48922.0',
  },
  {
    title: '1975 CB750',
    shop: 'SHOC4 - the architect',
    img: './img/batt/sohccb750.jpg',
    link: 'http://forums.sohc4.net/index.php?topic=68816.0',
  },
  {
    title: '1979 CB750kz',
    shop: 'Wrenchmonkees',
    img: './img/batt/honda_cb750_cafe_racer1.jpg',
    link: 'http://www.bikeexif.com/wrenchmonkees-honda-cb750-2',
  },
  {
    title: '1979 SR500 \'BRUTO\'',
    shop: 'ANALOG',
    img: './img/batt/AnalogMC-RSBruto-Seat-MS-800.jpg',
    link: 'http://thebikeshed.cc/2013/03/02/analog-motorcycles-sr500-bruto/',
  },
  {
    title: 'KZ400',
    shop: 'La Corona',
    img: './img/batt/kawasaki-kz400-lacorona.jpg',
    link: 'http://www.returnofthecaferacers.com/2013/03/kawasaki-kz400-by-la-corona.html',
  },
  {
    title: '1975 CB550 \'Fade To Black\'',
    shop: 'Federal Moto',
    img: './img/batt/cb-cafe-racer-7-625x417.jpg',
    link: 'http://www.bikeexif.com/cb-cafe-racer',
  },
  {
    title: '1976 cb750',
    shop: 'Bruce Farell',
    img: './img/batt/HondaCB750-035.jpg',
    link: 'http://www.returnofthecaferacers.com/2017/02/first-timer-honda-cb750-cafe-racer.html',
  },
  {
    title: '1981 CX500',
    shop: 'Michael Paraiso',
    img: './img/batt/mpcx500.jpg',
    link: 'http://www.motomucci.com/2011/04/feature-michael-paraisos-cx500-cafe.html',
  },
]

$(function () {
  setThumbails(shuffle(batts));
})
