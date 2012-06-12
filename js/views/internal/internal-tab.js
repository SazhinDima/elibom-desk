window.InternalTabView = Backbone.View.extend({
	
	tabClass: InternalAttributesView,
	curElementId: '#attributes-tab',
	
    initialize: function() {
    	this.template = _.template(tpl.get('internal/internal-tab'));
    },
    
    events: {
        "click #attributes-tab": "chooseAttributes",
        "click #addressee-tab": "chooserAddressee"
    },
    
    render: function(eventName) {
		$(this.el).html(this.template());
		this.$(this.curElementId).parent().attr("class", "active");
		return this;
    },
    
    chooseAttributes: function(e) {
    	this.tabClass = InternalAttributesView;
    	this.options.onreturn.call();
    	this.curElementId = '#attributes-tab';
    	this.render();
    },
    
    chooserAddressee: function(e) {
    	this.tabClass = AddresseeView;
    	this.options.onreturn.call();
    	this.curElementId = '#addressee-tab';
    	this.render();
    }
    
});