window.PagedAndFilterCollection = Backbone.Collection.extend({
	page: 0,
	itemsOnPage: 10,
	hasPrevPage: true,
	hasNextPage: true,
	filter: null,
	
	pagedFetch: function(options) {
		var coll = this;
		var opts = options ? _.clone(options) : {};
		var map = {
				from : coll.page * coll.itemsOnPage,
				to : (coll.page + 1) * coll.itemsOnPage
			};
		if (this.filter != null) {
			$.extend(map, this.filter.toMap());
		}
		options['data'] = $.param(map);
		options['success'] = function(collection, response) {
			coll.hasPrevPage = (coll.page > 0);
			if (collection.length > coll.itemsOnPage) {
				coll.hasNextPage = true;
			} else {
				coll.hasNextPage = false;
			}
			opts.success.call(this, collection, response);
        };
        this.fetch(options);
    },
	
	nextPage: function(options) {
		this.page++;
		this.pagedFetch(options);
	},
	
	prevPage: function(options) {
		this.page--;
		this.pagedFetch(options);
	},
	
	restorePaging: function(options) {
		this.page = 0;
		this.pagedFetch(options);
	},
});