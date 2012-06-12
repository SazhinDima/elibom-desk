window.InternalContainerView = Backbone.View.extend({

	initialize : function() {
		var internalContainerView = this;
		this.tab = new InternalTabView({
			onreturn : function() {
				internalContainerView.$('#internal-content').html(
						new internalContainerView.tab.tabClass({
							model : internalContainerView.model
						}).render().el);
			}
		});
		this.template = _.template(tpl.get('internal/internal-container'));
	},
    
    events: {       
        "click #close": "close",
        "click #checkout": "checkout",
        "click #save": "save"
    },
    
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		this.$('#internal-content').html(new this.tab.tabClass({model: this.model}).render().el);
		this.$('#internal-tab').html(this.tab.render().el);
		return this;
    },

    close: function(e) {
    	Backbone.history.navigate("internal/" + this.model.id + "/leave");
    	this.options.onreturn.call();
    	layers.closeLayer();
    },

    checkout: function(e) {
    	var self = this;
    	this.model.fetch({data: $.param({checkout: true}), success: function() {
    		self.render();
        }});
    },
    
    save: function(e) {
    	this.model.save();
    	Backbone.history.navigate("internal/" + this.model.id + "/leave");
    	this.options.onreturn.call();
    	layers.closeLayer();
    }

});