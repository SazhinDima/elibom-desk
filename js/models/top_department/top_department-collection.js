window.TopDepartmentCollection = Backbone.Collection.extend({
	model: TopDepartmentModel,
	url: RootURL + "top_departments"
});