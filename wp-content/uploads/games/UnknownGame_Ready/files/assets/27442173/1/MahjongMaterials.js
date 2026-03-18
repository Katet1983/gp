var MahjongMaterials = pc.createScript('mahjongMaterials');

MahjongMaterials.attributes.add('icons', {type: 'asset', array: true});

pc.extend(MahjongMaterials.prototype, {

    initialize: function() {
        pc.mahjongMaterials = this;
        
        this._iconList = [];
        
        for (var i = 0; i < this.icons.length; i++) {
            this._iconList.push({ id: i, material: this.icons[i].resource });
        }
    },

    getMaterials: function(name, amountUnique) {
        return this._iconList;
    },
});
