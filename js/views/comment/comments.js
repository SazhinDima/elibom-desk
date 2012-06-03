window.CommentsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('comment/comments'));
        this.model.bind('add', this.render, this);
    },
    
    events: {
        "click #addComment": "addComment"
    },
    
	render: function(eventName) {		
        $(this.el).html(this.template(this.model.toJSON()));
        var ul = $('ul', $(this.el));
		_.each(this.model.models, function(comment) {
           ul.append(new CommentItemView({model: comment}).render().el);
		}, this);
		return this;
	},

    addComment: function(e) {
    	var text = this.$("#comment").val();
    	var comment = new Comment({text: text});
    	this.model.add(comment);
    }
    
});

window.CommentItemView = Backbone.View.extend({

	tagName: "li",

    initialize: function() {
        this.template = _.template(tpl.get('comment/comment-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }

});