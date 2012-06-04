window.EmployeePositionLocator = PositionLocator.extend({

    renderPositionsTo: function(renderTo) {
    	employeePositionLocatorView = this;
		var positionCollection = new PositionCollection();
		positionCollection.filter = employeePositionLocatorView.filter;
		positionCollection.pagedFetch({
			success : function() {
				var positionListView = new PositionListView({
					model : positionCollection,
					onreturn : function(id, desc) {
						view.filter.get("folder_id").value = id;
						employeePositionLocatorView.renderEmployeePositions();
					}
				})
				renderTo.html(positionListView.render().el);
			}
		});
    },
    
    renderEmployeePositions: function() {
    	employeePositionLocatorView = this;
		var employeePositionCollection = new EmployeePositionCollection();
		employeePositionCollection.filter = employeePositionLocatorView.filter;
		employeePositionCollection.pagedFetch({
			success : function() {
				var employeePositionListView = new EmployeePositionListView({
					model : employeePositionCollection,
					onreturn : function(id, desc) {
						layers.closeLayer();
						view.options.onreturn.call(this, id, desc);
					}
				})
				employeePositionLocatorView.newLayer().html(employeePositionListView.render().el);
			}
		});
    }

});