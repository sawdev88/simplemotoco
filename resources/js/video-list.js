var videos = [
  {
    title: 'Brittown',
    author: 'Jeff Meatball Tulinius',
    img: './img/videos/britttown.jpg',
    link: 'http://amzn.to/2gOwTyf'
  },
  {
    title: 'The Best Bar in America',
    author: 'Choppertown Motorcycle Movies',
    img: './img/videos/best-bar.jpg',
    link: 'http://amzn.to/2wOrNLr'
  },
  {
    title: 'Isle of Man TT',
    author: 'Studio Kippenberger',
    img: './img/videos/isle.jpg',
    link: 'http://amzn.to/2gOCWTc'
  },
  {
    title: 'Café Racer',
    author: 'TV Series',
    img: './img/videos/cafe-racer-tv.png',
    link: 'http://amzn.to/2vTsFQe'
  },
  {
    title: 'A Twist of the Wrist II',
    author: 'Turbine Films',
    img: './img/videos/twist-2.jpg',
    link: 'http://amzn.to/2jaRXn2'
  },
  {
    title: 'Hitting the Apex',
    author: 'StudioCanal',
    img: './img/videos/apex.jpg',
    link: 'http://amzn.to/2gTeiV9'
  },
  {
    title: 'The Wild One',
    author: 'Mill Creek Entertainment',
    img: './img/videos/wild-one.jpg',
    link: 'http://amzn.to/2gQNLbf'
  },
  {
    title: 'Easy Rider',
    author: 'Columbia Pictures',
    img: './img/videos/easy-rider.jpg',
    link: 'http://amzn.to/2gQ6iR4'
  },
  {
    title: 'On Any Sunday',
    author: 'MONTEREY Video',
    img: './img/videos/sunday.jpg',
    link: 'http://amzn.to/2jaQnBA'
  },
]

$(function () {
  setListItems(shuffle(videos));
})
