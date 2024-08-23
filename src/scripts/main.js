document.addEventListener('astro:page-load', () => {
	// Menu Dropdown
	// const menuItems = document.querySelectorAll('.header__menu-item')
	// menuItems.forEach((menuItem) => {
	// 	const submenu = menuItem.querySelector('.header__submenu')
	// 	const link = menuItem.querySelector('.header__menu-link')

	// 	if (submenu && link) {
	// 		link.addEventListener('mouseover', function () {
	// 			// event.preventDefault()
	// 			menuItem.classList.add('open')
	// 		})
	// 	}
	// })
	// document.addEventListener('mouseout', function (event) {
	// 	const target = event.target

	// 	menuItems.forEach((menuItem) => {
	// 		const submenu = menuItem.querySelector('.header__submenu')
	// 		if (submenu && !menuItem.contains(target)) {
	// 			menuItem.classList.remove('open')
	// 		}
	// 	})
	// })
	// document.addEventListener('click', function (event) {
	// 	const target = event.target

	// 	menuItems.forEach((menuItem) => {
	// 		const submenu = menuItem.querySelector('.header__submenu')
	// 		if (submenu && !menuItem.contains(target)) {
	// 			menuItem.classList.remove('open')
	// 		}
	// 	})
	// })

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

// dark/light mode
// if (document.documentElement.classList.contains('mode-auto')) {
// 	const applyTheme = () => {
// 		if (
// 			localStorage.theme === 'dark' ||
// 			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// 		) {
// 			document.documentElement.classList.add('dark')
// 		} else {
// 			document.documentElement.classList.remove('dark')
// 		}
// 	}
// 	const setupThemeSwitcher = () => {
// 		const themeSwitcher = document.getElementById('theme-selector')
// 		if (themeSwitcher) {
// 			themeSwitcher.addEventListener('click', () => {
// 				if (localStorage.theme === 'dark') {
// 					localStorage.theme = 'light'
// 					document.documentElement.classList.remove('dark')
// 				} else {
// 					localStorage.theme = 'dark'
// 					document.documentElement.classList.add('dark')
// 				}
// 			})
// 		}
// 	}
// 	document.addEventListener('DOMContentLoaded', () => {
// 		applyTheme()
// 		setupThemeSwitcher()
// 	})
// 	document.addEventListener('astro:page-loaded', () => {
// 		applyTheme()
// 		setupThemeSwitcher()
// 	})
// 	document.addEventListener('astro:after-swap', () => {
// 		applyTheme()
// 		setupThemeSwitcher()
// 	})
// } else if (document.documentElement.classList.contains('mode-dark')) {
// 	document.documentElement.classList.add('dark')
// } else if (document.documentElement.classList.contains('mode-light')) {
// 	document.documentElement.classList.remove('dark')
// }

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
