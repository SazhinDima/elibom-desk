window.InternalListItemView = Backbone.View.extend({

	tagName: "tr",
	
    initialize: function() {
        this.template = _.template(tpl.get('internal/internal-list-item'));
    },

    render: function(eventName) {
		$(this.el).html(this.template({id: this.model.id, 
			croc_reg_number: this.model.get("croc_reg_number")["value"],
			croc_doc_summary: this.model.get("croc_doc_summary")["value"],
			state: this.model.get("state")["value"]}));
		return this;
    }

});