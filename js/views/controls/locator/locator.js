window.Locator = Backbone.View.extend({
	
    initialize: function() {
		this.stack = [];
        this.template = _.template(tpl.get('controls/locator/locator'));
        this.init();
    },
    
    render: function(eventName) {
		$(this.el).html(this.template());
		return this;
    },
	
	currentLayer : function() {
		if (this.stack.length == 0) {
			var newdiv = $("<div></div>");
			$('#layers-locator').append(newdiv)
			this.stack.unshift(newdiv);
		}
		return this.stack[0];
	},
	
	newLayer : function() {
		if (this.stack.length > 0) {
			this.currentLayer().hide();
		}
		var newdiv = $("<div></div>");
		$('#layers-locator').append(newdiv)
		this.stack.unshift(newdiv);
		return this.stack[0];
	},
	
	closeLayer : function() {
		this.stack.shift().remove();
		if (this.stack.length > 0) {
			currentLayer().show();
		}
	}
});