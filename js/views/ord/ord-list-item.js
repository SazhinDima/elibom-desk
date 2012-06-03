window.OrdListItemView = Backbone.View.extend({

	tagName: "li",

    initialize: function() {
        this.template = _.template(tpl.get('ord/ord-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }

});