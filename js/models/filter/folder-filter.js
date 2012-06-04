window.FolderFilter = Backbone.Model.extend({
	defaults: {
		folder_id: {value: ""}
    },
    
    toMap: function() {
    	var map = new Object();
    	var folder_id = this.get("folder_id").value;
    	if (folder_id != "") {
    		map['folder_id'] = folder_id;
    	}
    	return map;
    }
});