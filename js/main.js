window.RootURL = 'http://192.168.1.33:8080/proba1/service/';

Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

function startApp() {
	layers.initialize();
    tpl.loadTemplates([
    'controls/text-input', 'controls/label',
    'controls/context-lookup-enabled', 'controls/context-lookup-disabled',
    'controls/date-input-enabled', 'controls/date-input-disabled',
    'controls/locator/locator',
	'comment/comments', 'comment/comment-item',
	'workspace/workspace', 'menu/menu',
	'internal/internal-list', 'internal/internal-list-item','internal/internal', 'internal/internal-list-filter',
	'top_department/top_department-list', 'top_department/top_department-list-item',
	'department/department-list', 'department/department-list-item',
	'position/position-list', 'position/position-list-item',
	'employee_position/employee_position-list', 'employee_position/employee_position-list-item',
	'department-and-position/department-and-position-list',
	'ord/ord-list', 'ord/ord-list-item','ord/ord'
	], function() {
        new WorkspaceRouter();
		new InternalRouter();
		new OrdRouter();
        Backbone.history.start();
    });
}