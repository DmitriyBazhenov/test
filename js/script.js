const scrollToElements = document.querySelectorAll(".scroll");
const sectionsArray = Array.from(document.querySelectorAll("scrollto"));

scrollToElements.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = el.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
            sectionsArray.forEach(function (section, index) {
                if (section.id === targetId.replace('#', '')) {
                    currentSectionIndex = index;
                }
            });
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});