window.ListItemView = Backbone.View.extend({

    events: {
        "click .item": "chooseitem"
    },
    
    chooseitem: function(e) {
    	this.options.onreturn.call(this, this.model.id, this.model.get("description"));
    },

    initialize: function() {
        this.template = _.template(tpl.get('item/list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({description: this.model.get("description")}));
		return this;
    }

});