window.InternalFilter = Backbone.Model.extend({
	
	defaults: {
		croc_reg_number: {value: ""},
		reg_date_to: {},
		reg_date_from: {}

    },
    
    initialize:function(){
    	var now = new Date();
    	var from = new Date();
    	from.setDate(now.getDate() - 20);
    	var reg_date_from = this.get('reg_date_from');
    	reg_date_from['value'] = from;
    	var reg_date_to = this.get('reg_date_to');
    	reg_date_to['value'] = now;
    },
    
    toMap: function() {
    	var map = new Object();
    	var croc_reg_number = this.get("croc_reg_number").value;
    	if (croc_reg_number != "") {
    		map['croc_reg_number'] = croc_reg_number;
    	}
    	var reg_date_from = this.get('reg_date_from').value;
    	map['reg_date_from'] = reg_date_from.format('dd.mm.yyyy');
    	var reg_date_to = this.get('reg_date_to').value;
    	map['reg_date_to'] = reg_date_to.format('dd.mm.yyyy');
    	return map;
    }
    
});