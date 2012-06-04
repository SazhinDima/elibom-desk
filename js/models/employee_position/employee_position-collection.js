window.EmployeePositionCollection = PagedAndFilterCollection.extend({
	model: EmployeePositionModel,
	url: RootURL + "employee_positions"
});