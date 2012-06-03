window.EmployeePositionLocator = PositionLocator.extend({

    renderPositionsTo: function(renderTo) {
    	employeePositionLocatorView = this;
		var positionCollection = new PositionCollection();
		positionCollection.fetch({
			success : function() {
				var positionListView = new PositionListView({
					model : positionCollection,
					onreturn : function(id, desc) {
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
		employeePositionCollection.fetch({
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