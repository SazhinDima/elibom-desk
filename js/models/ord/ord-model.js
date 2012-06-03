window.OrdModel = Backbone.Model.extend({
	urlRoot: RootURL + "ord",
	defaults: {
		"id": null,
	    "name":  "",
	    "grapes":  "",
	    "country":  "USA",
	    "region":  "California",
	    "year":  "",
	    "description":  "",
	    "picture":  ""
	},

	initialize: function(){
	    this.set({comments: new CommentCollection()});
	}

});