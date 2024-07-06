
// --------------- category sidebar -------------------//


document.addEventListener('DOMContentLoaded', function() {
  var categoryIcon = document.querySelector('.category-icon a');
  var gContent = document.querySelector('.g-content');
  var leftSidebar = document.querySelector('.left-sidebar');
  var rotateIcon = document.querySelector('.rotate-icon');

  // استعادة الحالة من localStorage
  if (localStorage.getItem('gContentFullWidth') === 'true') {
    gContent.classList.add('full-width');
    if (leftSidebar) {
      leftSidebar.classList.add('hidden');
    }
  }

  categoryIcon.addEventListener('click', function(event) {
    event.preventDefault();
    gContent.classList.toggle('full-width');
    if (leftSidebar) {
      leftSidebar.classList.toggle('hidden');
    }

    // تدوير الصورة 360 درجة عندما تكون مفعلة الفئة full-width
    if (gContent.classList.contains('full-width')) {
      rotateIcon.style.transform = 'rotate(180deg)';
      localStorage.setItem('gContentFullWidth', 'true');
    } else {
      rotateIcon.style.transform = 'rotate(0deg)';
      localStorage.removeItem('gContentFullWidth');
    }
  });
});

// ---------end ------ category sidebar -------------------//

