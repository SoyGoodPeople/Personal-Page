export default function smoothScroll() {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  document.querySelectorAll('.scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });
}