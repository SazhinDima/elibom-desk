window.TopDepartmentListView = Backbone.View.extend({

	events : {
		"click #nextPage" : "nextPage",
		"click #prevPage" : "prevPage"
	},
	
	initialize : function() {
		this.template = _.template(tpl
				.get('top_department/top_department-list'));
	},

	render : function(eventName) {
		self = this;
		$(this.el).html(this.template());		
		var list = this.$('#list');
		_.each(this.model.models, function(top_department) {
			list.append(new TopDepartmentListItemView({
				model : top_department,
				onreturn : function(id, desc) {
					self.options.onreturn.call(this, id, desc);
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