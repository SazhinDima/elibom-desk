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
    'pager/pager',
    'item/list-item',
    'controls/text-input', 'controls/label',
    'controls/checkbox-enabled', 'controls/checkbox-disabled',
    'controls/context-lookup-enabled', 'controls/context-lookup-disabled',
    'controls/date-input-enabled', 'controls/date-input-disabled',
    'controls/locator/locator',
	'comment/comments', 'comment/comment-item',
	'workspace/workspace', 'menu/menu',
	'internal/internal-list', 'internal/internal-list-item','internal/internal', 'internal/internal-list-filter',
	'top_department/top_department-list',
	'document_kind/document_kind-list',
	'department/department-list',
	'position/position-list',
	'employee_position/employee_position-list',
	'department-and-position/department-and-position-list',
	'ord/ord-list', 'ord/ord-list-item','ord/ord'
	], function() {
        new WorkspaceRouter();
		new InternalRouter();
		new OrdRouter();
        Backbone.history.start();
    });
}