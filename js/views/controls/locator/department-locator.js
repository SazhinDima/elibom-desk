window.DepartmentLocator = TopDepartmentLocator.extend({
	
    renderTopDepartments: function() {
    	view = this;
		var topDepartmentCollection = new TopDepartmentCollection();
		topDepartmentCollection.fetch({
			success : function() {
				var topDepartmentListView = new TopDepartmentListView({
					model : topDepartmentCollection,
					onreturn : function(id, desc) {
						view.renderDepartments();
					}
				})
				view.newLayer().html(topDepartmentListView.render().el);
			}
		});
    },
    
    renderDepartments: function() {
    	view = this;
		var topDepartmentCollection = new DepartmentCollection();
		topDepartmentCollection.fetch({
			success : function() {
				var departmentListView = new DepartmentListView({
					model : topDepartmentCollection,
					onreturn : function(id, desc) {
						layers.closeLayer();
						view.options.onreturn.call(this, id, desc);
					}
				})
				view.newLayer().html(departmentListView.render().el);
			}
		});
    }
    
});