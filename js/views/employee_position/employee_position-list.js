window.EmployeePositionListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('employee_position/employee_position-list'));
	},

	render : function(eventName) {
		employeePositionListView = this;
		$(this.el).html(this.template());
		var ul = $('ul', $(this.el));
		_.each(this.model.models, function(position) {
			ul.append(new EmployeePositionListItemView({
				model : position,
				onreturn : function(id, desc) {
					employeePositionListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		return this;
	}
});