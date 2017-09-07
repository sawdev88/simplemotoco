var us = [
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
    shop: 'Test',
    location: 'C',
    img: './img/helemt_stripes.jpg',
    link: './bolierplater.html'
  },
  {
    shop: 'Test',
    location: 'A',
    img: './img/helemt_stripes.jpg',
    link: ''
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
