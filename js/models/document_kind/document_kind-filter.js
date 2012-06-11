window.DocumentKindFilter = Backbone.Model.extend({
    
	defaults: {
		document_id: {value: ""}
    },
    
    toMap: function() {
    	var map = new Object();
    	map['document_id'] = this.get("document_id").value;
    	return map;
    }
    
});