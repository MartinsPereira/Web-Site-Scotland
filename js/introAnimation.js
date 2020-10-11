export default function introAnimation() {
  let montain = document.querySelector('.montain');
  let montain1 = document.querySelector('.montain1');
  let escocia = document.querySelector('.escocia');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    escocia.style.top = value * 0.5 + 'px';
  });
}
