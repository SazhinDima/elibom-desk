window.PositionListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('position/position-list'));
	},

	render : function(eventName) {
		positionListView = this;
		$(this.el).html(this.template());
		
		this.$('#pager').html(new PagerView({model: this.model, caller: this}).render().el);
		
		var list = this.$('#list');
		_.each(this.model.models, function(position) {
			list.append(new ListItemView({
				model : position,
				onreturn : function(id, desc) {
					positionListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		
		return this;
	}
});