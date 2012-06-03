layers = {

	initialize : function() {
		this.layersDiv = $('#layers');
		this.stack = [];
	},

	currentLayer : function() {
		if (this.stack.length == 0) {
			var newdiv = $("<div></div>");
			this.layersDiv.append(newdiv)
			this.stack.unshift(newdiv);
		}
		return this.stack[0];
	},
	
	newLayer : function() {
		if (this.stack.length > 0) {
			this.currentLayer().hide();
		}
		var newdiv = $("<div></div>");
		this.layersDiv.append(newdiv)
		this.stack.unshift(newdiv);
		return this.stack[0];
	},
	
	closeLayer : function() {
		this.stack.shift().remove();
		if (this.stack.length > 0) {
			this.currentLayer().show();
		}
	}

};