window.DepartmentCollection = Backbone.Collection.extend({
	model: DepartmentModel,
	url: RootURL + "departments"
});