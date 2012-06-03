window.InternalView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('internal/internal'));
    },
    
    events: {
        "click #close": "close",
        "click #checkout": "checkout",
        "click #save": "save"
    },
    
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		
		var object_name = this.model.get("object_name");
		this.$('#control_object_name').html(
				new TextInput({model: this.model, attributes: object_name}).render().el);
		
		var croc_doc_summary = this.model.get("croc_doc_summary");
		this.$('#control_croc_doc_summary').html(
				new TextInput({model: this.model, attributes: croc_doc_summary}).render().el);
		
		var croc_performer_id = this.model.get("croc_performer_id");
		this.$('#control_croc_performer_id').html(
				new ContextLookup({model: this.model, attributes: croc_performer_id}).render().el);
		
		var croc_reg_number = this.model.get("croc_reg_number");
		this.$('#control_croc_reg_number').html(
				new DateInput({model: this.model, attributes: croc_reg_number}).render().el);
		
		return this;
    },

    close: function(e) {
    	Backbone.history.navigate("internal/" + this.model.id + "/leave");
    	this.options.onreturn.call();
    	layers.closeLayer();
    },

    checkout: function(e) {
    	var self = this;
    	this.model.fetch({data: $.param({checkout: true}), success: function() {
    		self.render();
        }});
    },
    
    save: function(e) {
    	this.model.save();
    	Backbone.history.navigate("internal/" + this.model.id + "/leave");
    	this.options.onreturn.call();
    	layers.closeLayer();
    }

});