window.DepartmentListView = Backbone.View.extend({

	events : {
		"click #nextPage" : "nextPage",
		"click #prevPage" : "prevPage"
	},
	
	initialize : function() {
		this.template = _.template(tpl
				.get('department/department-list'));
	},

	render : function(eventName) {
		departmentListView = this;
		$(this.el).html(this.template());
		var list = this.$('#list');
		_.each(this.model.models, function(department) {
			list.append(new DepartmentListItemView({
				model : department,
				onreturn : function(id, desc) {
					departmentListView.options.onreturn.call(this, id, desc);
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