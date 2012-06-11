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
        
		var croc_reg_number = this.model.get("croc_reg_number");
		this.$('#control_croc_reg_number').html(
				new TextInput({model: this.model, attributes: croc_reg_number}).render().el);

		var reg_date_from = this.model.get("reg_date_from");
		this.$('#control_reg_date_from').html(
				new DateInput({model: this.model, attributes: reg_date_from}).render().el);
		
		var reg_date_to = this.model.get("reg_date_to");
		this.$('#control_reg_date_to').html(
				new DateInput({model: this.model, attributes: reg_date_to}).render().el);
		
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