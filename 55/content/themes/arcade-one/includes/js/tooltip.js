document.addEventListener('DOMContentLoaded', function() {
    var tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(function(element) {
        var tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        var updateTooltipPosition = function() {
            var elementRect = element.getBoundingClientRect();
            tooltip.style.top = (elementRect.top + window.scrollY - tooltip.offsetHeight - 15) + 'px';
            tooltip.style.left = (elementRect.left + window.scrollX + (element.offsetWidth - tooltip.offsetWidth) / 2) + 'px';
        };

        var showTooltip = function() {
            tooltip.style.visibility = 'visible';
            updateTooltipPosition();
        };

        var hideTooltip = function() {
            tooltip.style.visibility = 'hidden';
        };

        element.addEventListener('mouseover', showTooltip);
        element.addEventListener('mouseout', hideTooltip);
        element.addEventListener('mousemove', updateTooltipPosition);
    });

    const loadMoreButton = document.getElementById('load-more1');

    function autoVibrate() {
        loadMoreButton.classList.add('btn-vibrate');

        setTimeout(() => {
            loadMoreButton.classList.remove('btn-vibrate');
            setTimeout(autoVibrate, 4000); 
        }, 1200); 
    }

    window.addEventListener('load', autoVibrate);
});
