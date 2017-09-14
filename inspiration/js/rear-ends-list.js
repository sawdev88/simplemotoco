var rearEnds = [
  {
    title: '1981 CB750',
    shop: 'STEEL BENT CUSTOMS',
    img: './img/rear-end/Honda-CB750-Cafe-Racer-rear.jpg',
    link: 'http://silodrome.com/honda-cb750-cafe-racers/',
  },
  {
    title: '1976 Honda CB750K \'Wabi-Sabi\'',
    shop: 'Powder Monkees',
    img: './img/rear-end/Wabi-Sabi-Honda-CB750K-Custom-Cafe-Racer-Rear.jpg',
    link: 'http://www.bike-urious.com/wabi-sabi-1976-honda-cb750k-custom-cafe-racer/',
  },
  {
    title: 'Harley-Davidson Sportster',
    shop: '',
    img: './img/rear-end/Harley-Davidson-Sporter-Cafe-Racer-9.jpg',
    link: 'http://silodrome.com/harley-davidson-sportster-cafe-racer/',
  },
  {
    title: 'CB750',
    shop: 'Rebellion of the Machines',
    img: './img/rear-end/Rebellion-of-the-Machines-CB750-Custom-Cafe-Racer-Tail-Section-Rear.jpg',
    link: 'http://rebellionofthemachines.com/',
  },
  {
    title: 'BMW R100 \'Vault\'',
    shop: 'KEVILS SPEED SHOP',
    img: './img/rear-end/vault.jpg',
    link: 'http://thebikeshed.cc/2013/12/23/kevils-r100-vault/',
  },
  {
    title: 'BMW R100/7 \'#27\'',
    shop: 'Cafe Racer Dreams',
    img: './img/rear-end/CRD-27-Rear-MS-800.jpg',
    link: 'http://thebikeshed.cc/2013/03/25/crd-27/',
  },
  {
    title: 'Moto Guzzi Le Mans 3',
    shop: 'KAFFEEMASCHINE',
    img: './img/rear-end/Moto-Guzzi-rear-end.jpeg',
    link: 'http://silodrome.com/moto-guzzi-cafe-racer-custom/',
  },
  {
    title: 'Triumph Thruxton',
    shop: 'DOWN & OUT',
    img: './img/rear-end/down-out-cafe-racers-8.jpg',
    link: 'http://www.bikeexif.com/down-out-cafe-racers',
  },
  {
    title: '1981 R100RS',
    shop: 'skrunkwerks',
    img: './img/rear-end/BMW_caferacer_rear-940x1203.jpg',
    link: 'http://skrunkwerks.com/skrunk/luftkopf-no-1/',
  },
  {
    title: 'Hero Karizma \'Silver\'',
    shop: 'Mean Green Designs',
    img: './img/rear-end/MGC-Sliver-Rear.jpg',
    link: 'http://www.pipeburn.com/home/2014/07/09/honda-karizma-sliver-by-mean-green-customs.html',
  },
  {
    title: 'Rebel Racer Limited Custom',
    shop: 'Zeus Custom',
    donor: 'Honda Rebel 300',
    img: './img/rear-end/zeus-rebel.jpg',
    link: 'http://zeuscustom.shop/portfolio/ibags-messenger-leather-bagsfor-men/',
  },
  {
    title: 'The Octane Racer',
    shop: 'Zeus Custom',
    donor: 'Stallions Centaur 150',
    img: './img/rear-end/zeus-octane.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-octane-ruster/',
  },
  {
    title: 'The Exocurious',
    shop: 'Zeus Custom',
    donor: 'Stallions Centaur 400',
    img: './img/rear-end/zeus-exocurious.jpg',
    link: 'http://zeuscustom.shop/portfolio/the-exocurious/',
  },
  {
    title: 'The Urban Brat',
    shop: 'Zeus Custom',
    donor: 'Stallions Max 250',
    img: './img/rear-end/zeus-urban.jpg',
    link: 'http://zeuscustom.shop/portfolio/tommy-highfilter-fashion-design-formen-project/',
  },
  {
    title: 'The Reticent',
    shop: 'Zeus Custom',
    donor: 'Stallions Max 250',
    img: './img/rear-end/zeus-reticent.jpg',
    link: 'http://zeuscustom.shop/portfolio/alexandra-stan-in-luxury-leather-stylefor-zara-fashion-brand/',
  },
  {
    title: 'Pharell Racer',
    shop: 'Zeus Custom',
    donor: 'Yamaha SR 400',
    img: './img/rear-end/zeus-pharell.jpg',
    link: 'http://zeuscustom.shop/portfolio/gentlemen-fashion-sets/',
  },
  {
    title: '1969 CB350',
    shop: 'Kott Motorcycles',
    img: './img/rear-end/kott-cb350.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2013/7/10/1969-cb350',
  },
  {
    title: 'Red Pearl',
    shop: 'Kott Motorcycles',
    img: './img/rear-end/kott-red-pearl.jpg',
    link: 'http://www.kottmotorcycles.com/builds/2014/4/23/red-pearl',
  },
  {
    title: '1978 CB750 Street Tracker',
    shop: 'Seaweed and Gravel',
    img: './img/rear-end/seaweed-street-tracker.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
  {
    title: '1973 Triumph T140',
    shop: 'Seaweed and Gravel',
    img: './img/rear-end/seaweed-triumph.jpg',
    link: 'https://seaweedandgravel.com/pages/custommotos',
  },
  {
    title: 'Frank',
    shop: 'Classified Moto',
    img: './img/rear-end/classified-frank.jpg',
    link: 'https://www.classifiedmoto.com/motorcycles/frank/',
  },
  {
    title: 'CM185T Tiny Moto',
    shop: 'Classified Moto',
    img: './img/rear-end/classified-cm185t.jpg',
    link: 'https://www.classifiedmoto.com/motorcycles/cm185t-tiny-moto/',
  },
]


$(function () {
  setListItems(shuffle(rearEnds));
})
