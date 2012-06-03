window.DateInput = Backbone.View.extend({
    
    render: function(eventName) {
    	var di = this;
    	if (this.attributes.enabled) {
    		$(this.el).html(_.template(tpl.get('controls/date-input-enabled'))(this.attributes));
    		this.$('#dateinput').scroller({
    	        preset: 'date',
    	        theme: 'android-ics light',
    	        display: 'modal',
    	        mode: 'scroller',
    	        dateFormat: 'dd.mm.yy',
    	        dateOrder: 'ddMMyy',
    	        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    	        cancelText: 'Отмена',
    	        setText: 'Выбрать',
    	        onSelect: function(valueText, inst) {
    	        	di.attributes.value = valueText;
    	        }
    	    });
    	    
    	} else {
    		$(this.el).html(_.template(tpl.get('controls/date-input-disabled'))(this.attributes));
    	}
		return this;
    }

});