window.OrdCollection = Backbone.Collection.extend({
	model: OrdModel,
	url: RootURL + "ords"
});