const c = new IntersectionObserver((t) => {
		t.forEach((e) => {
			e.isIntersecting && e.target.classList.add('show')
		})
	}),
	i = () => {
		document.querySelectorAll('.animationHidden').forEach((e) => {
			c.observe(e)
		})
	}
i()
document.addEventListener('astro:after-swap', () => {
	i()
})
const s = document.querySelector("[data-id='hamburger']"),
	n = document.querySelector("[data-id='nav']"),
	d = () => {
		const t = s?.getAttribute('data-visible')
		t === 'true'
			? (s?.setAttribute('data-visible', 'false'), n?.setAttribute('data-visible', 'false'))
			: t === 'false' &&
				(s?.setAttribute('data-visible', 'true'), n?.setAttribute('data-visible', 'true'))
	}
s?.addEventListener('click', d)
class l extends HTMLElement {
	constructor() {
		super()
		let e = !1
		const a = this.querySelector('[data-faq-button]'),
			r = this.querySelector('[data-faq-accordion]')
		if (r == null) return
		r.style.gridTemplateRows = '0fr'
		const o = () => {
			;(e = !e), (r.style.gridTemplateRows = e ? '1fr' : '0fr')
		}
		a?.addEventListener('click', o)
	}
}
customElements.define('faq-card', l)
