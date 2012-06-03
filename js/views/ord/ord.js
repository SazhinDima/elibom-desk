window.OrdView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('ord/ord'));
    },
    
    events: {
        "click #close": "close"
    },
    
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		var comments = this.model.get("comments");
		this.$('#comments').append(new CommentsView({model: comments}).render().el);
		return this;
    },

    close: function(e) {
    	Backbone.history.navigate("ord/" + this.model.id + "/leave");
    	layers.closeLayer();
    }

});