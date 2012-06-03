window.WorkspaceView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('workspace/workspace'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
		this.$('#menu').html(new Menu({selected: this.options.selected}).render().el);			
		return this;
    }

});