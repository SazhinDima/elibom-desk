window.PositionListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('position/position-list'));
	},

	render : function(eventName) {
		positionListView = this;
		$(this.el).html(this.template());
		var ul = $('ul', $(this.el));
		_.each(this.model.models, function(position) {
			ul.append(new PositionListItemView({
				model : position,
				onreturn : function(id, desc) {
					positionListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		return this;
	}
});