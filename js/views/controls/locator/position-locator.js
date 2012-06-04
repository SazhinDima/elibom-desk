window.PositionLocator = DepartmentLocator.extend({
    
    renderDepartments: function() {
    	positionLocatorView = this;
    	positionLocatorView.renderDepartmentsTo(view.newLayer());
    },
    
    renderDepartmentsAndPositions: function() {
    	positionLocatorView = this;
		var departmentAndPositionListView = new DepartmentAndPositionListView();
		positionLocatorView.newLayer().html(departmentAndPositionListView.render().el);
		positionLocatorView.renderPositionsTo(departmentAndPositionListView.$('#positions'));
		positionLocatorView.renderDepartmentsTo(departmentAndPositionListView.$('#departments'));
    },
    
    renderPositionsTo: function(renderTo) {
    	positionLocatorView = this;
		var positionCollection = new PositionCollection();
		positionCollection.fetch({
			success : function() {
				var positionListView = new PositionListView({
					model : positionCollection,
					onreturn : function(id, desc) {
						layers.closeLayer();
						positionLocatorView.options.onreturn.call(this, id, desc);
					}
				})
				renderTo.html(positionListView.render().el);
			}
		});
    },
    
    renderDepartmentsTo: function(renderTo) {
    	positionLocatorView = this;
		var departmentCollection = new DepartmentCollection();
		departmentCollection.filter = positionLocatorView.filter;
		departmentCollection.pagedFetch({
			success : function() {
				var departmentListView = new DepartmentListView({
					model : departmentCollection,
					onreturn : function(id, desc) {
						positionLocatorView.filter.get("folder_id").value = id;
						positionLocatorView.renderDepartmentsAndPositions();
					}
				})
				renderTo.html(departmentListView.render().el);
			}
		});
    }
    
});