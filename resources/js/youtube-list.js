var channels = [
  {
    title: 'BMCO',
    img: './img/youtube/bmco.jpg',
    link: 'https://www.youtube.com/channel/UCsJU17u9dqtsG8Dy7VF067A',
  },
  {
    title: 'Zeus Custom',
    img: './img/youtube/zeus.jpg',
    link: 'https://www.youtube.com/channel/UCPiuwLyzh6WzGpvMNLSthDQ',
  },
  {
    title: 'For The Bold',
    img: './img/youtube/for-the-bold.jpg',
    link: 'https://www.youtube.com/channel/UCaCeZbKO9L2QrozTYVv_pDQ',
  },
  {
    title: 'Hookie Co',
    img: './img/youtube/hookie-co.jpg',
    link: 'https://www.youtube.com/channel/UCe0Jz65ikdpymaFB9T5QoVA',
  },
  {
    title: 'Moto Channel',
    img: './img/youtube/moto-channel.jpg',
    link: 'https://www.youtube.com/user/themotochannel',
  },
  {
    title: 'Iron & Resin',
    img: './img/youtube/iron-resin.jpg',
    link: 'https://www.youtube.com/channel/UCOycCpG27BbdU6Twyw-v3vA',
  },
  {
    title: 'Seanweed and Gravel',
    img: './img/youtube/seaweed-and-gravel.jpg',
    link: 'https://www.youtube.com/channel/UC5M9KqYSHQbopZ1okdIvGDw',
  },
  {
    title: 'Lossa Engineering',
    img: './img/youtube/lossa.jpg',
    link: 'https://www.youtube.com/user/LossaEngineering',
  },
  {
    title: 'Racer TV',
    img: './img/youtube/racer-tv.jpg',
    link: 'https://www.youtube.com/user/10341037',
  },
  {
    title: 'CAFE RACER BRASIL',
    img: './img/youtube/cafe-racer-brasil.jpg',
    link: 'https://www.youtube.com/user/hleandro13',
  },
  {
    title: 'Revival',
    img: './img/youtube/revival.jpg',
    link: 'https://www.youtube.com/user/RevivalCyclesATX',
  },
  {
    title: 'Chris Chappell',
    img: './img/youtube/chappell.jpg',
    link: 'https://www.youtube.com/user/mikiflicky',
  },
  {
    title: 'The Cafe Racer',
    img: './img/youtube/the-cafe-racer.jpg',
    link: 'https://www.youtube.com/user/TheCafeRacerUK',
  },
]

$(function () {
  setRoundListItems(shuffle(channels));
})
