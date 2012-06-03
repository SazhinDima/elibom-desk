window.TopDepartmentLocator = Locator.extend({

    init: function () {
        this.renderTopDepartments();
    },
    
    renderTopDepartments: function() {
    	view = this;
		var topDepartmentCollection = new TopDepartmentCollection();
		topDepartmentCollection.fetch({
			success : function() {
				var topDepartmentListView = new TopDepartmentListView({
					model : topDepartmentCollection,
					onreturn : function(id, desc) {
						layers.closeLayer();
						view.options.onreturn.call(this, id, desc);
					}
				})
				view.newLayer().html(topDepartmentListView.render().el);
			}
		});
    }
    
});