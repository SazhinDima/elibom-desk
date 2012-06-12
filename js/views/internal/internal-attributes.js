window.InternalAttributesView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('internal/internal-attributes'));
    },
    
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		
		var document_kind = this.model.get("document_kind");
		this.$('#control_document_kind').html(
				new ContextLookup({type: DocumentKindLocator, model: this.model, attributes: document_kind}).render().el);
		
		var state = this.model.get("state");
		this.$('#control_state').html(
				new TextInput({model: this.model, attributes: state}).render().el);
		
		var paper = this.model.get("paper");
		this.$('#control_paper').html(
				new CheckBox({model: this.model, attributes: paper}).render().el);
		
		var croc_doc_summary = this.model.get("croc_doc_summary");
		this.$('#control_croc_doc_summary').html(
				new TextInput({model: this.model, attributes: croc_doc_summary}).render().el);
		
		var croc_performer_id = this.model.get("croc_performer_id");
		this.$('#control_croc_performer_id').html(
				new ContextLookup({type: EmployeePositionLocator, model: this.model, attributes: croc_performer_id}).render().el);
		
		return this;
    }

});