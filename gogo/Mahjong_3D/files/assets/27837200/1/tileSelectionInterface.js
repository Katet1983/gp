var TileSelectionInterface = pc.createScript('tileSelectionInterface');

TileSelectionInterface.attributes.add('selectedTile', { type: 'entity' });
TileSelectionInterface.attributes.add('selectedTileIcon', { type: 'entity' });

pc.extend(TileSelectionInterface.prototype, {
    initialize: function() {
        this.selectedTile.enabled = false;
        this.app.on('MahjongGroup:onTileSelected', this.onTileSelected, this);
        this.app.on('MahjongGroup:onTileMatch', this.onTileMatch, this);
    },
    
    onTileSelected: function(texture) {
        this.selectedTile.enabled = true;
        this.selectedTileIcon.element.texture = texture;
    },
    
    onTileMatch: function() {
        this.selectedTile.enabled = false;
    }
});