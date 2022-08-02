const sectionsArray = Array.from(document.querySelectorAll(".scrollTo"));
const scrollToElems = document.querySelectorAll('.scroll')

scrollToElems.forEach(function (el) {
  el.addEventListener('click', function (e) {
      e.preventDefault();
      if (header.classList.contains('open')) closeModal();
      let targetId = el.getAttribute('href');
      let target = document.querySelector(targetId);
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