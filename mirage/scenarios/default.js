export default function(server) {
  server.create('rental', {
    title: 'StarSpace46',
    owner: 'StarSpace46',
    city: 'Oklahoma City',
    category: 'Co-Working',
    image: 'https://com-ryanlabouve-blog.s3.amazonaws.com/ember-conf/starspace46.jpg',
    description: 'OKC\'s Premier Entrepreneurial & Technology CoWorking Hub',
  });

  server.create('rental', {
    title: '36 Degrees North',
    owner: '36 Degrees North',
    city: 'Tulsa',
    category: 'Co-Working',
    image:
      'https://static1.squarespace.com/static/55085720e4b0813599644fae/56ccba3c4d088e1e42e718ce/56ccc08c27d4bd75712d55bc/1456260877991/36+Degrees+North+Small+Conference_20160215_FullSize.jpg?format=1500w',
    description:
      'Tulsa\'s Basecamp for Entrepreneurs',
  })

  server.create('rental', {
    title: 'The Clockhouse',
    owner: 'Envoy',
    city: 'San Francisco',
    category: 'Office',
    image:
      'https://www.officelovin.com/wp-content/uploads/2015/05/envoy-san-francisco-office-7.jpg',
    description:
      'From people to packages, Envoy helps you handle everything that comes through your company’s front door. But we’re not stopping with the lobby, and we hope you won’t either.',
  })
}
