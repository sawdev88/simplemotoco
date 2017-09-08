var websites = [
  {
    title: 'Iron and Resin',
    img: './img/websites/iron-and-resin.png',
    link: 'https://ironandresin.com/'
  },
  {
    title: 'Seaweed and Gravel',
    img: './img/websites/seaweed-and-gravel.png',
    link: 'https://seaweedandgravel.com/'
  },
  {
    title: 'Bikeexif',
    img: './img/websites/bikeexif.jpg',
    link: 'http://www.bikeexif.com/'
  },
  {
    title: 'Dime City Cycles',
    img: './img/websites/dime-city-cycles.png',
    link: 'https://www.dimecitycycles.com/'
  },
  {
    title: 'Do The Ton',
    img: './img/websites/do-the-ton.png',
    link: 'http://www.dotheton.com/'
  },
  {
    title: 'Dan\'s Motorcycle Repair Web Page',
    img: '../img/helmet.png',
    link: 'http://www.dansmc.com/'
  },
  {
    title: 'Pipeburn',
    img: './img/websites/pipeburn.png',
    link: 'http://www.pipeburn.com/'
  },
  {
    title: 'Return of The Cafe Racers',
    img: './img/websites/return-of-the-cafe-racers.png',
    link: 'http://www.returnofthecaferacers.com/'
  },
  {
    title: 'Honda Cafe Racers',
    img: '../img/helmet.png',
    link: 'http://hondacaferacers.com/'
  },
  {
    title: 'Deus Ex Machina',
    img: './img/websites/deus.png',
    link: 'http://deuscustoms.com/'
  },
  {
    title: 'Revival',
    img: './img/websites/revival.png',
    link: 'https://revivalcycles.com/'
  },
  {
    title: 'Garage Company',
    img: './img/websites/garage-company.png',
    link: 'http://www.garagecompany.com/'
  },
]

$(function () {
  setListItems(shuffle(websites));
})
