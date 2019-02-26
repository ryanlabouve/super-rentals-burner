export default function(server) {
  let rental = server.create('rental', {
    title: 'Downtown charm',
    owner: 'Violet Beuregargde',
    city: 'Portland',
    category: 'Apartment',
    bedrooms: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
    description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.',
  });

  server.create('booking', { rental });
  server.create('booking', { rental });
  server.create('booking', { rental });

  server.create('rental', {
    title: 'Urban Living',
    owner: 'Mike Teavee',
    city: 'Seattle',
    category: 'Condo',
    bedrooms: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
    description:
      'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.',
  })

  server.create('rental', {
    title: 'Grand Old Mansion',
    owner: 'Veruca Salt',
    city: 'San Francisco',
    category: 'Estate',
    bedrooms: 15,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    description:
      'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
  })
}
