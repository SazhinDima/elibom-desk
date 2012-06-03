window.Menu = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('menu/menu'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        this.$('#menu_' + this.options.selected).toggleClass("active");
		return this;
    }

});