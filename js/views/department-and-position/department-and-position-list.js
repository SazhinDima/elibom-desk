window.DepartmentAndPositionListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('department-and-position/department-and-position-list'));
	},

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	}
});