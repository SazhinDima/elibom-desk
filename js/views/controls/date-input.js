window.DateInput = Backbone.View.extend({
    
    render: function(eventName) {
    	var di = this;
    	var value = di.attributes['value'].format('dd.mm.yyyy');
    	if (this.attributes.enabled || (this.attributes.enabled === undefined)) {
    		$(this.el).html(_.template(tpl.get('controls/date-input-enabled'))({value: value}));
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
    	        	var date = di.attributes['value'];
    	        	date.setDate(inst.values[0]);
    	        	date.setMonth(inst.values[1]);
    	        	date.setYear(inst.values[2]);
    	        }
    	    });
    	    
    	} else {
    		$(this.el).html(_.template(tpl.get('controls/date-input-disabled'))({value: value}));
    	}
		return this;
    }

});