window.InternalListItemView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('internal/internal-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, object_name: this.model.get("object_name")["value"]}));
		return this;
    }

});