window.EmployeePositionListView = Backbone.View.extend({

	events : {
		"click #nextPage" : "nextPage",
		"click #prevPage" : "prevPage"
	},
	
	initialize : function() {
		this.template = _.template(tpl
				.get('employee_position/employee_position-list'));
	},

	render : function(eventName) {
		employeePositionListView = this;
		$(this.el).html(this.template());
		
		var list = this.$('#list');
		_.each(this.model.models, function(employeeposition) {
			list.append(new EmployeePositionListItemView({
				model : employeeposition,
				onreturn : function(id, desc) {
					employeePositionListView.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		
		if (this.model.hasNextPage) {
			this.$('#nextPage').css("visibility", "visible");
		}
		if (this.model.hasPrevPage) {
			this.$('#prevPage').css("visibility", "visible");
		}
		
		return this;
	},
	
	nextPage : function() {
		var self = this;
		this.model.nextPage({
			success : function() {
				self.render();
			}
		});
	},

	prevPage : function() {
		var self = this;
		this.model.prevPage({
			success : function() {
				self.render();
			}
		});
	}
	
});