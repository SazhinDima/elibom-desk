window.PositionListItemView = Backbone.View.extend({
	
    events: {
        "click .position": "chooseposition"
    },
    
    chooseposition: function(e) {
    	this.options.onreturn.call(this, this.model.id, this.model.get("description"));
    },

    initialize: function() {
        this.template = _.template(tpl.get('position/position-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, description: this.model.get("description")}));
		return this;
    }

});