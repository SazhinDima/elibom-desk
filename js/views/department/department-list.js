window.DepartmentListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('department/department-list'));
	},

	render : function(eventName) {
		departmentListView = this;
		$(this.el).html(this.template());
		var ul = $('ul', $(this.el));
		_.each(this.model.models, function(department) {
			ul.append(new DepartmentListItemView({
				model : department,
				onreturn : function(id, desc) {
					departmentListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		return this;
	}
});