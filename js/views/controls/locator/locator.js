window.Locator = Backbone.View.extend({
	
    events: {
        "click #lvlup": "levelup",
        "click #close": "close"
    },
    
    initialize: function() {
		this.stack = [];
        this.template = _.template(tpl.get('controls/locator/locator'));
        this.init();
    },
    
    render: function(eventName) {
		$(this.el).html(this.template());
		return this;
    },
    
    levelup: function(e) {
    	this.closeLayer();
    },
    
    close: function(e) {
    	layers.closeLayer();
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
			this.$('#levelup').css("visibility", "visible");
		}
		var newdiv = $("<div></div>");
		$('#layers-locator').append(newdiv)
		this.stack.unshift(newdiv);
		return this.stack[0];
	},
	
	closeLayer : function() {
		this.stack.shift().remove();
		if (this.stack.length > 0) {
			this.currentLayer().show();
		}
		if (this.stack.length == 1) {
			this.$('#levelup').css("visibility", "hidden");
		}
	}
});