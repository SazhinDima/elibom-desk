window.InternalRouter = Backbone.Router.extend({

	routes: {
		"internal" : "journal",
		"internal/:id"	: "properties"
	},

	journal: function() {
		var self = this;
		layers.currentLayer().html(new WorkspaceView({selected: "internal"}).render().el);
		self.internalList = new InternalCollection();
		self.internalList.pagedFetch({success: function() {
			self.internalListView = new InternalListView({model: self.internalList})
			$('#content').html(self.internalListView.render().el);
        }});
  	},
	
	properties: function(id) {
		var self = this;
		if (self.internalList) {
			var internal = self.internalList.get(id);
		} else {
			var internal = new InternalModel({id: id});
		}
		internal.fetch({success: function() {
			layers.newLayer().html(new InternalView({model: internal, 
				onreturn: function() {
					if (self.internalListView) {
						self.internalListView.render();
					}
					}})
			.render().el);
        }});
  	}
	
});