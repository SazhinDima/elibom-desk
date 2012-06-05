window.DepartmentListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('department/department-list'));
	},

	render : function(eventName) {
		departmentListView = this;
		$(this.el).html(this.template());
		
		this.$('#pager').html(new PagerView({model: this.model, caller: this}).render().el);
		
		var list = this.$('#list');
		_.each(this.model.models, function(department) {
			list.append(new ListItemView({
				model : department,
				onreturn : function(id, desc) {
					departmentListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		
		return this;
	}
});