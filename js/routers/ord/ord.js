window.OrdRouter = Backbone.Router.extend({

	routes: {
		"ord" : "journal",
		"ord/:id"	: "properties"
	},

	journal: function() {
		var self = this;
		layers.currentLayer().html(new WorkspaceView({selected: "ord"}).render().el);
		self.ordList = new OrdCollection();
		self.ordList.fetch({success: function() {
			$('#content').html(new OrdListView({model: self.ordList}).render().el);
        }});
  	},
	
	properties: function(id) {
		var self = this;
		if (self.ordList) {
			var ord = self.ordList.get(id);
		} else {
			var ord = new OrdModel({id: id});
		}
		ord.fetch({success: function() {
			layers.newLayer().html(new OrdView({model: ord}).render().el);
        }});
  	}
	
});