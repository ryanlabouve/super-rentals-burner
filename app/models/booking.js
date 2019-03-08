import DS from "ember-data";

export default DS.Model.extend({
  rental: DS.belongsTo(),
  user: DS.belongsTo(),
  createdAt: DS.attr("date")
});
