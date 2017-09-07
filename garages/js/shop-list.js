var us = [
  {
    shop: 'Kott Motorcycles',
    city: 'Santa Clarita',
    state: 'ca',
    img: './img/kott-garage.jpg',
    link: './kott-motorcycles.html'
  },
  {
    shop: 'Seaweed and Gravel',
    city: 'Encinitas',
    state: 'CA',
    img: './img/sg-garage.jpg',
    link: './seaweed-and-gravel.html'
  },
  {
    shop: 'Hazan Motorworks',
    city: 'Los Angeles',
    state: 'CA',
    img: './img/hazan-garage.jpg',
    link: './hazan-motorworks.html'
  },
  {
    shop: 'Garage Company',
    city: 'Inglewood',
    state: 'CA',
    img: './img/garage-company-garage.jpg',
    link: './garage-company.html'
  },
  {
    shop: 'Classified Moto',
    city: 'Richmond',
    state: 'VA',
    img: './img/classified-moto-garage.jpg',
    link: './classified-moto.html'
  },
]

var international = [
  {
    shop: 'Hookie Co.',
    location: 'Dresden, Germany',
    img: './img/hookie-garage.jpeg',
    link: './hookie-co.html'
  },
  {
    shop: 'Zeus Custom',
    location: 'Bangkok, Thailand',
    img: './img/zeus-garage.jpg',
    link: './zeus-custom.html'
  },
  {
    shop: 'Test',
    location: 'E',
    img: './img/helemt_stripes.jpg',
    link: ''
  }
]

$(function () {
  var city = sortByKey(us, 'state');
  var cityState = sortByKey(city, 'city');
  var intl = sortByKey(international, 'location')

  setListItems(cityState);
  setListItems(intl);
})
