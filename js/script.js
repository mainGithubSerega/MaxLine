function addClass(selList, selBurger, selBody, selLogo){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)
          mainBody = document.querySelector(selBody)
          logo = document.querySelector(selLogo)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')
        logo.classList.toggle('active')
        mainBody.classList.toggle('lock')

    })
}
addClass('.header__nav', '.header__humburger', 'body','.header__logo')
