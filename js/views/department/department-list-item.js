window.DepartmentListItemView = Backbone.View.extend({

	tagName: "li",
	
    events: {
        "click .department": "choosedepartment"
    },
    
    choosedepartment: function(e) {
    	this.options.onreturn.call(this, this.model.id, this.model.get("description"));
    },

    initialize: function() {
        this.template = _.template(tpl.get('department/department-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, description: this.model.get("description")}));
		return this;
    }

});