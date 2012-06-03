window.InternalFilter = Backbone.Model.extend({
	defaults: {
		object_name: {value: ""}
    },
    
    toMap: function() {
    	var map = new Object();
    	var object_name = this.get("object_name").value;
    	if (object_name != "") {
    		map['object_name'] = object_name;
    	}
    	return map;
    }
});