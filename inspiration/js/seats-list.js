var seats = [
  {
    title: 'Type 2',
    shop: 'Auto Fabrica',
    donor: '',
    img: './img/seats/type-2.jpg',
    link: 'http://www.autofabrica.com/#/type-2/',
  },
  {
    title: 'Type 4a',
    shop: 'Auto Fabrica',
    donor: '',
    img: './img/seats/type-4a.jpg',
    link: 'http://www.autofabrica.com/#/new-gallery/',
  },
  {
    title: 'Falcon 550',
    shop: 'Kott Motorcycles',
    donor: 'CB550',
    img: './img/seats/kott-falcon.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2015/7/10/-baby-blue-cb750',
  },
  {
    title: 'Charcoal / Brown 750',
    shop: 'Kott Motorcycles',
    donor: 'CB750',
    img: './img/seats/kott-seat.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2014/6/10/charcoal-brown-750',
  },
  {
    title: 'The Flat Track',
    shop: 'Zues Custom',
    donor: 'GPX Legend 200',
    img: './img/seats/zeus-flat-track.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-flat-track/',
  },
  {
    title: 'The Urban Brat',
    shop: 'Zeus Custom',
    donor: 'Stallions Max 250',
    img: './img/seats/zeus-urban.jpg',
    link: 'http://zeuscustom.shop/portfolio/tommy-highfilter-fashion-design-formen-project/',
  },
  {
    title: 'Rebel Racer Limitd Custom',
    shop: 'Zeus Custom',
    donor: 'Honda Rebel 300',
    img: './img/seats/zeus-rebel.jpg',
    link: 'http://zeuscustom.shop/portfolio/ibags-messenger-leather-bagsfor-men/',
  },
  {
    title: 'Jackal',
    shop: 'Hookie co',
    donor: '1980 Yamaha SR250 SE',
    img: './img/seats/hookie-jackal.jpg',
    link: 'http://hookie.co/portfolio/jackal/',
  },
  {
    title: '6',
    shop: 'Hookie Co',
    donor: 'CB750',
    img: './img/seats/hookie-cb750.jpg',
    link: 'http://www.bikeexif.com/honda-cb750',
  },
  {
    title: 'Royal Enfield',
    shop: 'Hazan Motorworks',
    donor: 'Royal Enfield',
    img: './img/seats/hazan-seat.jpg',
    link: 'http://hazanmotorworks.com/?portfolio=royal-enfield-2',
  },
  {
    title: 'R100',
    shop: 'Hazan Motorworks',
    donor: 'BMW R100',
    img: './img/seats/hazan-r100.jpg',
    link: 'http://hazanmotorworks.com/?portfolio=r100',
  },
  {
    title: 'Ducati 900',
    shop: 'Hazan Motorworks',
    donor: 'Ducati 900',
    img: './img/seats/hazan-ducati.jpg',
    link: 'http://hazanmotorworks.com/?portfolio=ducati-900-2',
  },
]

$(function () {
  setListItems(shuffle(seats));
})
