document.addEventListener('astro:page-load', () => {

	// Menu toggle
	const headerToggle = document.querySelector('.header__toggle')
	const headerMenu = document.querySelector('.header__menu')
	if (headerToggle && headerMenu) {
		headerToggle.addEventListener('click', () => {
			headerToggle.classList.toggle('header__toggle--open')
			const isExpanded = headerToggle.getAttribute('aria-expanded') === 'true'
			const newExpandedValue = isExpanded ? 'false' : 'true'
			headerToggle.setAttribute('aria-expanded', newExpandedValue)
			headerMenu.classList.toggle('header__menu--open')
		})
	}

	// Modals
	function openModal(modal) {
		if (modal && modal.classList.contains('modal')) {
			modal.classList.add('open')
		}
	}
	function closeModal(modal) {
		if (modal && modal.classList.contains('modal')) {
			modal.classList.remove('open')
		}
	}
	const modalButtons = document.querySelectorAll('[data-modal]')

	modalButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			const modalId = button.getAttribute('data-modal')
			const modal = document.getElementById(modalId)
			openModal(modal)
		})
	})
	document.querySelectorAll('.modal').forEach(function (modal) {
		modal.addEventListener('click', function (event) {
			if (event.target === modal) {
				closeModal(modal)
			}
		})
		const close = modal.querySelector('.modal__close')
		close.addEventListener('click', function (event) {
			event.stopPropagation()
			closeModal(modal)
		})
	})
})

// Scroll animations
const initializeObserver = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('scroll-animated')
			}
		})
	})

	const elements = document.querySelectorAll('.scroll-animation .col')

	elements.forEach((element) => {
		observer.observe(element)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	initializeObserver()
})

// document.addEventListener('astro:page-loaded', () => {
// 	initializeObserver()
// })

document.addEventListener('astro:after-swap', () => {
	initializeObserver()
})

// Lenis
import Lenis from 'lenis'
const lenis = new Lenis()

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Motion One
import { animate, inView } from 'motion'

const clipUp = () => {
	inView('[data-clipUp]', ({ target }) => {
		animate(
			target,
			{ clipPath: ['inset(100% 0 0 0)', 'inset(0)'] },
			{ delay: 0.3, duration: 0.8, easing: [1, 0, 0.4, 1] }
		)
	})
}

// document.addEventListener('DOMContentLoaded', () => {
// 	clipUp()
// 	alert('DOMContentLoaded')
// })
// document.addEventListener('astro:before-swap', () => {
// 	document.removeEventListener()
// })
document.addEventListener('astro:after-swap', () => {
	document.removeEventListener('astro:page-load', () => {
		clipUp()
	})
})
document.addEventListener('astro:page-load', () => {
	clipUp()
})
