window.TopDepartmentListItemView = Backbone.View.extend({

	tagName: "li",
	
    events: {
        "click .top_department": "choosetopdepartment"
    },
    
    choosetopdepartment: function(e) {
    	this.options.onreturn.call(this, this.model.id, this.model.get("description"));
    },

    initialize: function() {
        this.template = _.template(tpl.get('top_department/top_department-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, description: this.model.get("description")}));
		return this;
    }

});