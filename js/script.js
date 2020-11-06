import { slideNav, Slide } from './slide.js';
import initAnimaNumeros from './anima-numeros.js';
import initAnimacaoScroll from './scroll-animacao.js';
import introAnimation from './introAnimation.js';

const slides = new slideNav('.slide', '.slide-wrapper');
slides.init();
slides.addArrow('.prev', '.next')
introAnimation();
initAnimacaoScroll();
initAnimaNumeros();
