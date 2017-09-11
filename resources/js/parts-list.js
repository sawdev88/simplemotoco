var parts = [
  {
    title: 'Dime City Cycles',
    img: './img/parts/dime-city-cycles.png',
    link: 'https://www.dimecitycycles.com/'
  },
  {
    title: 'Mikes XS',
    img: './img/parts/mikes-xs.jpeg',
    link: 'https://www.mikesxs.net/'
  },
  {
    title: '4 into 1',
    author: 'Vitange Honda Parts',
    img: './img/parts/4-1.png',
    link: 'http://4into1.com/'
  },
  {
    title: 'Old Bike Barn',
    img: './img/parts/old-bike-barn.png',
    link: 'http://www.oldbikebarn.com/'
  },
  {
    title: 'Vintage CB750',
    img: './img/parts/vintage-cb750.png',
    link: 'http://www.vintagecb750.com/'
  },
  {
    title: 'Deadbeat Customs',
    img: './img/parts/deadbeat-customs.jpg',
    link: 'https://www.deadbeatcustoms.com/'
  },
  {
    title: 'Biltwell Inc.',
    img: './img/parts/biltwell.png',
    link: 'https://www.biltwellinc.com/'
  },
  {
    title: 'RYCA Motors',
    img: './img/parts/ryca.png',
    link: 'http://www.rycamotors.com/'
  },
  {
    title: 'Revival Cycles',
    img: './img/parts/revival.png',
    link: 'https://revivalcycles.com/collections/featured-products'
  },
  {
    title: 'Hagon Shocks',
    img: './img/parts/hagon.jpg',
    link: 'http://www.hagonshocksusa.com/'
  },
  {
    title: 'Moto Gadget',
    img: './img/parts/moto-gadget.jpeg',
    link: 'https://motogadget.com/en/'
  },
  {
    title: 'Cognito Moto',
    img: './img/parts/cognito.jpeg',
    link: 'https://cognitomoto.com/'
  },
  {
    title: 'All Balls Racing',
    img: './img/parts/all-balls-racing.jpg',
    link: 'http://www.allballsracing.com/'
  }
]

$(function () {
  setListItems(shuffle(parts));
})
