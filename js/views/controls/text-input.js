window.TextInput = Backbone.View.extend({
    
    events: {
        "change input": "change"
    },
    
	change: function(e) {
		this.attributes.value = e.srcElement.value;
	},
	
    render: function(eventName) {
    	if (this.attributes.enabled || (this.attributes.enabled === undefined)) {
    		$(this.el).html(_.template(tpl.get('controls/text-input'))(this.attributes));
    	} else {
    		$(this.el).html(_.template(tpl.get('controls/label'))(this.attributes));
    	}
		return this;
    }

});