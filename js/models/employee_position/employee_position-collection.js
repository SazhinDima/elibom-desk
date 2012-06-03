window.EmployeePositionCollection = Backbone.Collection.extend({
	model: EmployeePositionModel,
	url: RootURL + "employee_positions"
});