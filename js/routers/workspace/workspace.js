window.WorkspaceRouter = Backbone.Router.extend({

	routes: {
		"" : "workspace"
	},

	workspace: function() {
		layers.currentLayer().html(new WorkspaceView().render().el);
  	}
	
});