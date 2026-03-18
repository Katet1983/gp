/*! deePool
    v2.2.0 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
    Source: https://github.com/getify/deePool
*/


var ObjectPool = pc.createScript('objectPool');

ObjectPool.attributes.add('templateEntity' , { type: 'entity', title: 'Template Entity', });
ObjectPool.attributes.add('initialLength', { type: 'number', default: 16, });
ObjectPool.attributes.add('growCount', { type: 'number', default: 5 });
ObjectPool.attributes.add('disableOnInit', { type: 'boolean', default: true, title: 'Disable on Init'});

/**
 * ObjectPool
 * Creates re-usable objects of type Entity.
 * Pre-/allocation behaviours can be set using the prototype's attributes.
 */

pc.extend(ObjectPool.prototype, {

    initialize: function() {
        this._pool = [];
        this._nextFreeSlot = null;

        if (!this.templateEntity) {
            console.warn('ObjectPool: template is null (aborting initialization...)');
            return; 
        }

        this._grow(this.initialLength);
    },

    _grow: function(count) {
        if (count > 0 && this._nextFreeSlot === null) {
            this._nextFreeSlot = 0;
        }

        if (count > 0) {
            var currentLength = this._pool.length;
            this._pool.length += Number(count);

            for (var i = currentLength; i < this._pool.length; i += 1) {
                // add new obj to pool
                var clonedEntity = this.templateEntity.clone();
                this._pool[i] = clonedEntity;
                
                if (this.disableOnInit) {
                    clonedEntity.enabled = false;
                    clonedEntity.reparent(null);
                } else {
                    clonedEntity.reparent(this.entity);
                }
            }
        }

        return this._pool.length;
    },

    /**
     * Retrieves an available object instance from the pool
     */
    use: function() {
        if (this._nextFreeSlot === null || this._nextFreeSlot === this._pool.length) {
            this._grow(this.growCount);
        }

        var objToUse = this._pool[this._nextFreeSlot];
        this._pool[this._nextFreeSlot] = null;
        this._nextFreeSlot += 1;
        return objToUse;
    },

    /**
     * Inserts an object instance back into the pool for later reuse.
     */
    recycle: function(obj) {
        if (obj.enabled) {
            console.warn("This object is not disabled", obj.name);
        }
                
        if (this._nextFreeSlot === null || this._nextFreeSlot === -1) {
            this._pool[this._pool.length] = obj;
        } else {
            this._pool[this._nextFreeSlot -= 1] = obj;
        }  
    },
    
    /**
     * Return the size of the pool. For debugging purposes.
     */
    size: function() {
      return this._pool.length;
    }
});