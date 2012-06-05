window.PagerView = Backbone.View.extend({

	events : {
		"click #nextPage" : "nextPage",
		"click #prevPage" : "prevPage"
	},

	initialize : function() {
		this.template = _.template(tpl.get('pager/pager'));
	},

	render : function(eventName) {
		$(this.el).html(this.template());

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
				self.options.caller.render();
				self.render();
			}
		});
	},

	prevPage : function() {
		var self = this;
		this.model.prevPage({
			success : function() {
				self.options.caller.render();
				self.render();
			}
		});
	}
	
});