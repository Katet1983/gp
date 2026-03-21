var StatisticsManager = pc.createScript('statisticsManager');

pc.extend(StatisticsManager.prototype, {

    initialize: function() {
        StatisticsManager.instance = this;

        this.app.on('StatisticsManager:incrementStatistic', this.incrementStatistic, this);
        this.app.on('StatisticsManager:setStatistic', this.setStatistic, this);
    },

    incrementStatistic: function(key, value) { 
        var oldValue = pc.storageManager.get(key);

        value += oldValue;

        pc.storageManager.set(key, value);

        window.famobi_analytics.trackStats(key, value);
    },

    setStatistic: function(key, value, higherOnly) {
        var oldValue = pc.storageManager.get(key);
        
        if (oldValue === value) {
            return;
        }
        
        if (higherOnly && oldValue > value) {
            return;
        }
        
        pc.storageManager.set(key, value);

        window.famobi_analytics.trackStats(key, value);
    },
});