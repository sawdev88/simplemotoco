var exhausts = [
  {
    title: 'ROYT',
    shop: 'Hookie Co',
    donor: '1972 Honda CB250',
    img: './img/exhausts/hookie-royt.jpg',
    link: 'http://hookie.co/portfolio/yt-honda-cb250/',
  },
  {
    title: 'Pharell Racer',
    shop: 'Zeus Custom',
    donor: 'Yamaha SR 400',
    img: './img/exhausts/zeus-sr400.jpg',
    link: 'http://zeuscustom.shop/portfolio/gentlemen-fashion-sets/',
  },
  {
    title: 'The Passon Of Rocker',
    shop: 'Zeus Custom',
    donor: 'Ducati Scrambler',
    img: './img/exhausts/zeus-ducati.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-passion-of-rocker/',
  },
  {
    title: 'Falcon 550',
    shop: 'Kott Motorcycles',
    donor: 'CB550',
    img: './img/exhausts/kott-cb750.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2015/7/10/-baby-blue-cb750',
  },
  {
    title: 'Naked Speed 750',
    shop: 'Kott Motorcycles',
    donor: 'CB750',
    img: './img/exhausts/kott-naked-speed.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2015/4/17/naked-speed-750',
  },
  {
    title: 'Type 4a',
    shop: 'Auto Fabrica',
    donor: '',
    img: './img/exhausts/af-4a.jpg',
    link: 'http://www.autofabrica.com/#/new-gallery/',
  },
  {
    title: 'Type 10a',
    shop: 'Auto Fabrica',
    donor: '',
    img: './img/exhausts/af-10a.jpg',
    link: 'http://www.autofabrica.com/#/type-10a/',
  },
  {
    title: 'BMW R100 Ba\'R\'a',
    shop: 'Blitz Motorcycles',
    donor: 'BMW R100',
    img: './img/exhausts/blitz-bara.jpeg',
    link: 'http://www.blitz-motorcycles.com/bikes/bmw-r100-bara',
  },
  {
    title: 'The Blue Raven',
    shop: 'Blitz Motorcycles',
    donor: 'W650',
    img: './img/exhausts/blitz-w650.jpg',
    link: 'http://www.blitz-motorcycles.com/bikes/the-blue-raven',
  },
  {
    title: '',
    shop: 'Purpose Built Moto',
    donor: '',
    img: './img/exhausts/purpose-double.jpg',
    link: 'https://purposebuiltmoto.com/cafe-racer-scrambler-muffler/',
  },
  {
    title: 'GL1000 "dirty"',
    shop: 'Seaweed and Gravel',
    donor: 'Suzuki GL1000',
    img: './img/exhausts/sg-gl.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
  {
    title: 'CB750 "Babe Blue"',
    shop: 'Seaweed and Gravel',
    donor: 'Honda CB750',
    img: './img/exhausts/sg-babe-blue.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
]

$(function () {
  setThumbails(shuffle(exhausts));
})
