var mirrors = [
  {
    title: 'Gazelle',
    shop: 'Hookie co',
    donor: '1983 Yamaha XT250',
    img: './img/mirrors/gazelle-2.jpg',
    link: 'http://hookie.co/portfolio/gazelle-2/',
  },
  {
    title: 'Alcedo',
    shop: 'Hookie co',
    donor: '1981 Honda CB750',
    img: './img/mirrors/alcedo.jpg',
    link: 'http://hookie.co/portfolio/alcedo-2/',
  },
  {
    title: 'Bar-end Mirrors',
    shop: 'Rizoma',
    donor: '',
    img: './img/mirrors/rizoma.jpg',
    link: 'http://www.rizoma.com/universal/mirrors/en',
  },
  {
    title: 'Eight Ball',
    shop: 'Gazzz Garage',
    donor: 'Yamaha XJ',
    img: './img/mirrors/8-ball.jpg',
    link: 'http://www.gazzz-garage.com/2014/12/29/in-details/',
  },
  {
    title: 'CBX1000',
    shop: 'CRSS',
    donor: '1979 Honda CBX1000',
    img: './img/mirrors/cbx1000.jpg',
    link: 'http://www.bikebound.com/2016/11/01/honda-cbx1000-custom/',
  },
  {
    title: 'The Urban Brat',
    shop: 'Zeus Custom',
    donor: 'Stallions Max 250',
    img: './img/mirrors/max-250.jpg',
    link: 'http://zeuscustom.shop/portfolio/tommy-highfilter-fashion-design-formen-project/',
  },
  {
    title: '79 Cafe Racer',
    shop: 'DP CUSTOMS',
    donor: '\’79 Harley',
    img: './img/mirrors/79-harley.jpg',
    link: 'http://www.bikeexif.com/harley-davidson-ironhead',
  },
  {
    title: 'The Zeno Racer',
    shop: 'Zeus Custom',
    donor: 'Royal Enfield Continental GT 535',
    img: './img/mirrors/zeno.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-zeno-racer/',
  },
  {
    title: '82′ BMW R100RS',
    shop: 'Route 62 Customs',
    donor: '82′ BMW R100RS',
    img: './img/mirrors/route-62.jpg',
    link: 'http://www.pipeburn.com/home/2016/04/20/82-bmw-r100rs-route-62-customs.html',
  },
  {
    title: '’79 CX 500',
    shop: 'Garret Dietz',
    donor: '’79 CX 500',
    img: './img/mirrors/garret-cx.jpg',
    link: 'http://www.pipeburn.com/home/2012/11/24/garret-dietzs-79-cx-500.html',
  },
  {
    title: 'Cafe Racer',
    shop: 'TADAOCERN',
    donor: 'CX500',
    img: './img/mirrors/tado.jpg',
    link: 'https://www.behance.net/gallery/11668557/TADAOCERN-CAFERACER',
  },
  {
    title: 'Unknown',
    shop: '',
    donor: '',
    img: './img/mirrors/unkn.jpg',
    link: 'http://www.elakiri.com/forum/showthread.php?p=18092448',
  },
]

$(function () {
  setThumbails(shuffle(mirrors))
})
