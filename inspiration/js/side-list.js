var sidess = [
  {
    title: 'W650',
    shop: 'Down & Out',
    img: './img/sides/DO-W650-5-700x525.jpg',
    link: 'http://thebikeshed.cc/2014/07/01/down-out-cafe-racers-w650/',
  },
  {
    title: '1979 CB750kz',
    shop: 'Wrenchmonkees',
    img: './img/sides/honda_cb750_cafe_racer1.jpg',
    link: 'http://www.bikeexif.com/wrenchmonkees-honda-cb750-2',
  },
  {
    title: '1979 SR500 \'BRUTO\'',
    shop: 'ANALOG',
    img: './img/sides/AnalogMC-RSBruto-Seat-MS-800.jpg',
    link: 'http://thebikeshed.cc/2013/03/02/analog-motorcycles-sr500-bruto/',
  },
  {
    title: 'KZ400',
    shop: 'La Corona',
    img: './img/sides/kawasaki-kz400-lacorona.jpg',
    link: 'http://www.returnofthecaferacers.com/2013/03/kawasaki-kz400-by-la-corona.html',
  },
  {
    title: '1975 CB550 \'Fade To Black\'',
    shop: 'Federal Moto',
    img: './img/sides/cb-cafe-racer-7-625x417.jpg',
    link: 'http://www.bikeexif.com/cb-cafe-racer',
  },
  {
    title: '1976 cb750',
    shop: 'Bruce Farell',
    img: './img/sides/HondaCB750-035.jpg',
    link: 'http://www.returnofthecaferacers.com/2017/02/first-timer-honda-cb750-cafe-racer.html',
  },
  {
    title: '1981 CX500',
    shop: 'Michael Paraiso',
    img: './img/sides/mpcx500.jpg',
    link: 'http://www.motomucci.com/2011/04/feature-michael-paraisos-cx500-cafe.html',
  },
  {
    title: 'Pharell Racer',
    shop: 'Zeus Custom',
    donor: 'Yamaha SR 400',
    img: './img/sides/zeus-pharell.jpg',
    link: 'http://zeuscustom.shop/portfolio/gentlemen-fashion-sets/'
  },
  {
    title: 'The Zeno Racer',
    shop: 'Zeus Custom',
    donor: 'Royal Enfield Continental GT 535',
    img: './img/sides/zeus-zeno.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-zeno-racer/'
  },
  {
    title: 'Rebel Racer Limited Custom',
    shop: 'Zeus Custom',
    donor: 'Honda Rebel 300',
    img: './img/sides/zeus-rebel.jpg',
    link: 'http://zeuscustom.shop/portfolio/ibags-messenger-leather-bagsfor-men/'
  },
  {
    title: 'The Octane Ruster',
    shop: 'Zeus Custom',
    donor: 'Stallions Centaur 150',
    img: './img/sides/zeus-ruster.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-octane-ruster/'
  },
]

$(function () {
  setListItems(shuffle(sidess));
})
