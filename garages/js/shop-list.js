var us = [
  {
    shop: 'Kott Motorcycles',
    city: 'Santa Clarita',
    state: 'ca',
    img: './img/kott-garage.jpg',
    link: './kott-motorcycles.html'
  },
  {
    shop: 'Test',
    city: 'LA',
    state: 'CA',
    img: './img/helemt_stripes.jpg',
    link: ''
  },
  {
    shop: 'Test',
    city: 'San Diego',
    state: 'CA',
    img: './img/helemt_stripes.jpg',
    link: ''
  },
  {
    shop: 'Test',
    city: 'San Diego',
    state: 'ca',
    img: './img/helemt_stripes.jpg',
    link: './bolierplater.html'
  },
  {
    shop: 'Test',
    city: 'LA',
    state: 'CA',
    img: './img/helemt_stripes.jpg',
    link: ''
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
