export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top - this.windowMetade;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
