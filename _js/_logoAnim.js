const logo = document.querySelector('.hero__logo')
const hero = document.querySelector('.hero')
const trigger = document.querySelector('body')

const controller = new ScrollMagic.Controller({

})

// TWEENS
let logoTween = TweenMax.fromTo(logo, 1,
	{ css: { 'opacity': 1,'transform': 'translateY(0)','transform': 'scale(1)' }},
	{ css: { 'opacity': 0,'transform': 'translateY(-200px)','transform': 'scale(2)'}}
)
// TWEENS
let heroTween = TweenMax.fromTo(hero, 1,
	{ css: { 'background': 'linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)' }},
	{ css: { 'background': 'linear-gradient(180deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)'}}
)
// Build scene Separator
const sceneLogo = new ScrollMagic.Scene({
	triggerElement : trigger,
	duration       : 300,
	offset         : 600
})
.setClassToggle(logo, 'logo--animated')
.setTween(logoTween)
.addIndicators({name: '1 (duration: 0)'})

const sceneHero = new ScrollMagic.Scene({
	triggerHook : .8,
	duration       : 200,
	offset         : 0
})
.setClassToggle(hero, 'hero--animated')
.setTween(heroTween)
.addIndicators({name: 'hero (duration: 100)'})
// Add Scenes to ScrollMagic Controller
controller.addScene([
	sceneLogo,
	sceneHero
])
