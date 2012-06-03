window.EmployeePositionListItemView = Backbone.View.extend({

	tagName: "li",
	
    events: {
        "click .employeeposition": "chooseemployeeposition"
    },
    
    chooseemployeeposition: function(e) {
    	this.options.onreturn.call(this, this.model.id, this.model.get("description"));
    },

    initialize: function() {
        this.template = _.template(tpl.get('employee_position/employee_position-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, description: this.model.get("description")}));
		return this;
    }

});