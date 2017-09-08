var books = [
  {
    title: 'Motorcycle Fuel Systems TechBook',
    author: 'John Robinson',
    img: './img/books/fuel-systems.jpg',
    link: 'https://www.amazon.com/Motorcycle-Fuel-Systems-TechBook-carburettor/dp/085733915X/ref=as_sl_pc_tf_til?tag=smco06c-20&linkCode=w00&linkId=98914c2bc0a4d20cb7f7b9cd9ced7f69&creativeASIN=085733915X'
  },
  {
    title: 'Motorcycle Electrical Techbook',
    author: 'Tony Tranter',
    img: './img/books/ele-tech.jpg',
    link: 'http://amzn.to/2jb1sSX'
  },
  {
    title: 'Motorcycle Basics Techbook',
    author: 'Haynes',
    img: './img/books/basics-tech.jpg',
    link: 'http://amzn.to/2f97Nd7'
  },
  {
    title: 'The Build: How the Masters Design Custom Motorcycles',
    author: 'Robert Hoekman Jr',
    img: './img/books/the-build.jpg',
    link: 'http://amzn.to/2gOm2o1'
  },
  {
    title: 'How to Set Up Your Motorcycle Workshop',
    author: 'C G Masi',
    img: './img/books/garage-setup.jpg',
    link: 'http://amzn.to/2xig8WO'
  },
  {
    title: 'How to Rebuild and Restore Classic Japanese Motorcycles ',
    author: 'Sid Young',
    img: './img/books/classic-japanese-moto.jpg',
    link: 'http://amzn.to/2weycfi'
  },
  {
    title: 'How to Restore Your Motorcycle: Second Edition',
    author: 'Mark Zimmerman',
    img: './img/books/restore-2.jpg',
    link: 'http://amzn.to/2xTOUTr'
  },
  {
    title: 'The Beginner\'s Guide to Classic Motorcycle Restoration',
    author: 'Ricky Burns',
    img: './img/books/classic-restore.jpg',
    link: 'http://amzn.to/2jaBQpm'
  },
  {
    title: 'How to restore Honda Fours',
    author: 'Ricky Burns',
    img: './img/books/honda-fours.jpg',
    link: 'http://amzn.to/2eSzYR1'
  },
  {
    title: 'How to Troubleshoot, Repair, and Modify Motorcycle Electrical Systems',
    author: 'Tracy Martin',
    img: './img/books/moto-ele.jpg',
    link: 'http://amzn.to/2wO4FwK'
  },
  {
    title: 'Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values',
    author: 'Robert M. Pirsig',
    img: './img/books/zen.jpg',
    link: 'http://amzn.to/2jbMEDw'
  },
  {
    title: 'Cafe Racers: Speed, Style, and Ton-Up Culture',
    author: 'Michael Lichter',
    img: './img/books/cafe-racer.jpg',
    link: 'http://amzn.to/2jajHrW'
  },
  {
    title: 'The Art of the Racing Motorcycle: 100 Years of Designing for Speed',
    author: 'Phillip Tooth',
    img: './img/books/art-racing.jpg',
    link: 'http://amzn.to/2gQ47Ru'
  },
  {
    title: 'The Ride: New Custom Motorcycles and their Builders',
    author: 'Chris Hunter',
    img: './img/books/the-ride.png',
    link: 'http://amzn.to/2xUjix6'
  },
  {
    title: 'The Ride 2nd Gear: New Custom Motorcyclesand Their Builders. Gentlemen Edition',
    author: 'Robert Klanten',
    img: './img/books/the-ride-g.jpg',
    link: 'http://amzn.to/2gPcfOm'
  },
  {
    title: 'The Ride 2nd Gear: New Custom Motorcycles and Their Builders. Rebel Edition',
    author: 'Robert Klanten',
    img: './img/books/the-ride-r.jpg',
    link: 'http://amzn.to/2j9oUQF'
  },
  {
    title: 'Cafe Racer: How to Build Your Own Basic Cafe Racer With Timeless Style',
    author: 'Devin Blast',
    img: './img/books/cafe-racer-devin.jpg',
    link: 'http://amzn.to/2wNZeOo'
  },
  {
    title: 'McQueen\'s Motorcycles: Racing and Riding with the King of Cool',
    author: 'Matt Stone',
    img: './img/books/king-of-cool.jpg',
    link: 'http://amzn.to/2xiDHia'
  },
  {
    title: 'Proficient Motorcycling: The Ultimate Guide to Riding Well',
    author: 'David L. Hough',
    img: './img/books/ultimate-riding.jpg',
    link: 'http://amzn.to/2eSVHbs'
  },
  {
    title: 'Total Control: High Performance Street Riding Techniques, 2nd Edition',
    author: 'Lee Parks',
    img: './img/books/total-control.jpg',
    link: 'http://amzn.to/2weSm96'
  },
  {
    title: 'Motorcycle Engineering',
    author: 'P.E. Irving',
    img: './img/books/moto-eng.jpg',
    link: 'http://amzn.to/2jbzJBK'
  },
]

$(function () {
  setListItems(shuffle(books));
})
