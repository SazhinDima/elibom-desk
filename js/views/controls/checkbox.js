window.CheckBox = Backbone.View.extend({
    
    events: {
        "change input": "change"
    },
    
	change: function(e) {
		this.attributes.value = e.srcElement.checked;
	},
	
    render: function(eventName) {
    	if (this.attributes.enabled || (this.attributes.enabled === undefined)) {
    		$(this.el).html(_.template(tpl.get('controls/checkbox-enabled'))(this.attributes));
    	} else {
    		$(this.el).html(_.template(tpl.get('controls/checkbox-disabled'))(this.attributes));
    	}
		if (this.attributes['value'] == true) {
    		this.$('input').attr('checked', true);	
		}
		return this;
    }

});