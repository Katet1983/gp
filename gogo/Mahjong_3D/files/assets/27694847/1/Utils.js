var Utils = pc.createScript('utils');



pc.extend(Utils.prototype, {
    initialize: function() {
        pc.utils = this;
    },
    
    addButtonClickEvent: function(entity, callback, context) {
        entity.element.on('click', callback, context);
    },
});
