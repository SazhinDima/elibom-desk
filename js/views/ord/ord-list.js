window.OrdListView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('ord/ord-list'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        var ul = $('ul', $(this.el));
		_.each(this.model.models, function(ord) {
           ul.append(new OrdListItemView({model: ord}).render().el);
		}, this);
		return this;
    }
});