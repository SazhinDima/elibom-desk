window.TopDepartmentListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('top_department/top_department-list'));
	},

	render : function(eventName) {
		self = this;
		$(this.el).html(this.template());
		var ul = $('ul', $(this.el));
		_.each(this.model.models, function(top_department) {
			ul.append(new TopDepartmentListItemView({
				model : top_department,
				onreturn : function(id, desc) {
					self.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		return this;
	}
});