window.DepartmentLocator = TopDepartmentLocator.extend({
	
	filter : new FolderFilter(),
	
    renderTopDepartments: function() {
    	view = this;
		var topDepartmentCollection = new TopDepartmentCollection();
		topDepartmentCollection.pagedFetch({
			success : function() {
				var topDepartmentListView = new TopDepartmentListView({
					model : topDepartmentCollection,
					onreturn : function(id, desc) {
						view.filter.get("folder_id").value = id;
						view.renderDepartments();
					}
				})
				view.newLayer().html(topDepartmentListView.render().el);
			}
		});
    },
    
    renderDepartments: function() {
    	view = this;
		var departmentCollection = new DepartmentCollection();
		departmentCollection.pagedFetch({
			success : function() {
				var departmentListView = new DepartmentListView({
					model : departmentCollection,
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