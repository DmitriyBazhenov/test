// const anchors = document.querySelectorAll('.scroll');


// // плавный скролл

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     closeModal();
//     const blockID = anchor.getAttribute('href').substr(1);
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

document.querySelectorAll('.scroll').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      // const topOffset = document.querySelector('.scrollto').offsetHeight;
      const topOffset = 70; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});