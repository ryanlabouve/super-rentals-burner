import Controller from '@ember/controller';

export default Controller.extend({
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  years: Array(...Array(80)).map((_, i) => `${i + 1940}`),

  actions: {
    changeCenter(unit, calendar, e) {
      let newCenter = calendar.center.clone()[unit](e.target.value);
      calendar.actions.changeCenter(newCenter);
    },

    bookNow({rental, selectedDate}) {
      this.store.createRecord('booking', {
        rental,
        date: selectedDate
      }).save().then(booking => {
        console.log("created booking", booking)
        // debugger;
      }).catch(error => {
        console.error(error);
      })
    }
  }
});
