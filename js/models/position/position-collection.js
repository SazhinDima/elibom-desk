window.PositionCollection = Backbone.Collection.extend({
	model: PositionModel,
	url: RootURL + "positions"
});