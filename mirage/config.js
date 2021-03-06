export default function() {
  this.logging = true;
  this.namespace = '/api';
  this.passthrough('https://api.mapbox.com/**');

  this.get('/rentals', function(db, request) {
    let city = request.queryParams.city;
    if (city !== undefined) {
      return db.rentals.all().filter(rental => {
        return rental.attrs.city.toLowerCase().indexOf(city) > -1;
      });
    } else {
      return db.rentals.all();
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function(db, request) {
    return db.rentals.find(request.params.id);
  });

  this.post('/bookings');
}
