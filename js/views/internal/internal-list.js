window.InternalListView = Backbone.View.extend({

	filter : new InternalFilter(),

	events : {
		"click #filter" : "doFilter"
	},

	initialize : function() {
		this.template = _.template(tpl.get('internal/internal-list'));
		this.model.filter = this.filter;
	},

	render : function(eventName) {
		$(this.el).html(this.template());
		
		this.$('#pager').html(new PagerView({model: this.model, caller: this}).render().el);
		
		var list = this.$('#list');
		_.each(this.model.models, function(internal) {
			list.append(new InternalListItemView({
				model : internal
			}).render().el);
		}, this);
		return this;
	},

	doFilter : function() {
		var internalListView = this;
		layers.newLayer().html(new InternalListFilterView({
			model : internalListView.filter,
			onreturn : function() {
				internalListView.model.restorePaging({
					success : function() {
						internalListView.render();
					}
				});
			}
		}).render().el);
	}
});