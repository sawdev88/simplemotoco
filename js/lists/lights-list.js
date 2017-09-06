var lights = [
  {
    title: 'm.blaze disc',
    shop: 'moto gadget',
    img: './img/lights/mg.jpg',
    link: 'https://motogadget.com/shop/en/turn-signal-lights.html',
  },
  {
    title: 'Panther',
    shop: 'Hookie co',
    img: './img/lights/panther-brake.jpg',
    link: 'http://hookie.co/portfolio/panther-2/',
  },
  {
    title: 'Alcedo',
    shop: 'Hookie co',
    img: './img/lights/alcedo-brake.jpg',
    link: 'http://hookie.co/portfolio/alcedo-2/',
  },
  {
    title: 'Wild Dog',
    shop: 'Hookie co',
    img: './img/lights/wild-dog-brake.jpg',
    link: 'http://hookie.co/portfolio/wild-dog/',
  },
  {
    title: 'Wild Dog',
    shop: 'Hookie co',
    img: './img/lights/wild-dog-front.png',
    link: 'http://hookie.co/portfolio/wild-dog/',
  },
  {
    title: 'RHCB820',
    shop: 'Kott Motorcycles',
    img: './img/lights/RHCB820.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2014/4/23/rhcb820',
  },
  {
    title: 'The Valentino',
    shop: 'Kott Motorcycles',
    img: './img/lights/valentino.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2013/9/5/the-valentino',
  },
  {
    title: '1969 cb350',
    shop: 'Kott Motorcycles',
    img: './img/lights/kott-cb350.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2013/7/10/1969-cb350',
  },
  {
    title: 'CB750 Street Tracker',
    shop: 'Seaweed and Gravel',
    img: './img/lights/sw-tracker.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
  {
    title: 'CB750k',
    shop: 'Seaweed and Gravel',
    img: './img/lights/sw-cb750k.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
  {
    title: 'BMW r100gsr',
    shop: 'Blitz',
    img: './img/lights/bmw-r100gsr.jpeg',
    link: 'http://www.blitz-motorcycles.com/bikes/bmw-r100gsr',
  },
  {
    title: 'Suzuki Street Dracker',
    shop: 'Blitz',
    img: './img/lights/suzuki-street-dracker.jpg',
    link: 'http://www.blitz-motorcycles.com/bikes/suzuki-street-dracker',
  },
  {
    title: 'Type 13',
    shop: 'Auto Fabrica',
    img: './img/lights/af-type13.jpg',
    link: 'http://www.autofabrica.com/#/type-13/',
  },
  {
    title: 'Type 14',
    shop: 'Auto Fabrica',
    img: './img/lights/af-type14.jpg',
    link: 'http://www.autofabrica.com/#/type-14/',
  },
]


$(function () {
  setThumbails(shuffle(lights))
})
