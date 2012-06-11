window.DocumentKindLocator = Locator.extend({

	filter : new DocumentKindFilter(),
	
    init: function () {
    	this.filter.get("document_id").value = this.model.id;
        this.renderDocumentKinds();
    },
    
    renderDocumentKinds: function() {
    	view = this;
		var documentKindCollection = new DocumentKindCollection();
		documentKindCollection.filter = view.filter;
		documentKindCollection.pagedFetch({
			success : function() {
				var documentKindListView = new DocumentKindListView({
					model : documentKindCollection,
					onreturn : function(id, desc) {
						layers.closeLayer();
						view.options.onreturn.call(this, id, desc);
					}
				})
				view.newLayer().html(documentKindListView.render().el);
			}
		});
    }
    
});