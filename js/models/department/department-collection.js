window.DepartmentCollection = PagedAndFilterCollection.extend({
	model: DepartmentModel,
	url: RootURL + "departments"
});