const burger = document.querySelector('.burger')
const mobile_menu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const register = document.querySelector('.register')


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

window.onscroll = () =>{
    if(window.innerWidth > 768){
        window.pageYOffset > 250 
        ? header.classList.add('fix')
        : header.classList.remove('fix')
    }
}

if(window.innerWidth < 768){
    header.classList.add('fix')
}

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener("click", () => {
        register.classList.remove('active')
        body.classList.remove('overflow-h')
    
    })
})
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener("click", () => {
        register.classList.remove('active')
        body.classList.remove('overflow-h')
    
    })
})


document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener("click", () => {
        register.classList.add('active')
        body.classList.add('overflow-h')
        burger.classList.add('active')
        mobile_menu.classList.add('active')
    })
})

document.querySelectorAll('.reg-btn').forEach(btn => {
    btn.addEventListener("click", () => {
        register.classList.add('active')
        body.classList.add('overflow-h')
        burger.classList.add('active')
        mobile_menu.classList.add('active')

    })
})
document.querySelectorAll('.mobile-menu__item a').forEach(btn => {
    btn.addEventListener("click", () => {
        mobile_menu.classList.remove('active')
        burger.classList.remove('active')
    })
})

document.querySelector('.register-form form').addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const phone = document.querySelector('#phone').value
    const email = document.querySelector('#email').value

    const text = `Имя: ${name}, Номер телефона: ${phone}, e-mail: ${email} `

    const token = '1627937060:AAHKzCOO7oGesPNwtjTyqEtlNEaOvZLghhk';
    let url = 'https://api.telegram.org/bot'+token  +'/sendMessage?chat_id=-551769308&text=';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + text, true);
    xhttp.send();

    document.querySelector('.register-form').classList.add('hide')
    document.querySelector('.register-succes').classList.remove('hide')
    
})

//ПЛАВНЫЙ СКРОЛЛ    
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//АКТИВНЫЙ КЛАСС ПРИ СКРОЛИНГЕ
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.nav a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
			}
		});
	
});

//БОТ ОТПРАВКИ СООБЩЕНИЙ

