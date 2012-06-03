window.InternalListView = Backbone.View.extend({

	filter : new InternalFilter(),

	events : {
		"click #nextPage" : "nextPage",
		"click #prevPage" : "prevPage",
		"click #filter" : "doFilter"
	},

	initialize : function() {
		this.template = _.template(tpl.get('internal/internal-list'));
		this.model.filter = this.filter;
	},

	render : function(eventName) {
		$(this.el).html(this.template());
		var list = this.$('#list');
		_.each(this.model.models, function(internal) {
			list.append(new InternalListItemView({
				model : internal
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
	},

	doFilter : function() {
		var internalListView = this;
		layers.newLayer().html(new InternalListFilterView({
			model : internalListView.filter,
			onreturn : function() {
				internalListView.model.restorePaging({
					success : function() {
						internalListView.render();
					}
				});
			}
		}).render().el);
	}
});