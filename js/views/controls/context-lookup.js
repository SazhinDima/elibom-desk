window.ContextLookup = Backbone.View.extend({

    events: {
        "click #select": "select"
    },
    
    select: function(e) {
    	cl = this;
    	layers.newLayer().html(new EmployeePositionLocator({
			onreturn : function(id, descr) {
				cl.attributes.value = id;
				cl.attributes.description = descr;
				cl.render();
			}
		}).render().el);
	},
	
    render: function(eventName) {
    	attributes = this.attributes;
    	if (this.attributes.enabled) {
    		$(this.el).html(_.template(tpl.get('controls/context-lookup-enabled'))(this.attributes));
    	} else {
    		$(this.el).html(_.template(tpl.get('controls/context-lookup-disabled'))(this.attributes));
    	}
		return this;
    }

});