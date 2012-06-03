window.InternalListFilterView = Backbone.View.extend({
	
	initAttributes: null,
	
    events: {
        "click #close": "close",
        "click #filter": "filter"
    },
    
    initialize: function() {
        this.template = _.template(tpl.get('internal/internal-list-filter'));
        this.initAttributes = jQuery.extend(true, {}, this.model.attributes);
    },
    
    render: function(eventName) {
        $(this.el).html(this.template());
        
		var object_name = this.model.get("object_name");
		this.$('#control_object_name').html(
				new TextInput({model: this.model, attributes: object_name}).render().el);

		return this;
    },
    
    close: function(e) {
    	this.model.attributes = this.initAttributes;
    	layers.closeLayer();
    },
    
    filter: function(e) {
    	internalListFilterView = this;
    	layers.closeLayer();
    	internalListFilterView.options.onreturn.call();
    }
    
});