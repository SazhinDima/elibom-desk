window.EmployeePositionListView = Backbone.View.extend({
	
	initialize : function() {
		this.template = _.template(tpl
				.get('employee_position/employee_position-list'));
	},

	render : function(eventName) {
		employeePositionListView = this;
		$(this.el).html(this.template());
		
		this.$('#pager').html(new PagerView({model: this.model, caller: this}).render().el);
		
		var list = this.$('#list');
		_.each(this.model.models, function(employeeposition) {
			list.append(new ListItemView({
				model : employeeposition,
				onreturn : function(id, desc) {
					employeePositionListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		
		return this;
	}
});