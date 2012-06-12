window.AddresseeView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('common/addressee'));
    },
    
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }

});