window.DocumentKindListView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl
				.get('document_kind/document_kind-list'));
	},

	render : function(eventName) {
		self = this;
		$(this.el).html(this.template());
		
		this.$('#pager').html(new PagerView({model: this.model, caller: this}).render().el);
		
		var list = this.$('#list');
		_.each(this.model.models, function(document_kind) {
			list.append(new ListItemView({
				model : document_kind,
				onreturn : function(id, desc) {
					self.options.onreturn.call(this, id, desc);
				}
			}).render().el);
		}, this);
		
		return this;
	}
});