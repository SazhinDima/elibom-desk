window.Comment = Backbone.Model.extend({
	defaults: {
		"id": null,
	    "text":  ""
	  }
});

window.CommentCollection = Backbone.Collection.extend({
	model: Comment
});