// document.querySelectorAll('[class=".modal-template"]').addEventListener('click', (a)=>{
//     a.preventDefault()
// })
const modalStop = document.querySelectorAll('.modal-template')
modalStop.forEach((btn)=>{
    btn.addEventListener('click', (a)=>{
            a.preventDefault()
        })
})
const footerStop = document.querySelectorAll('footer')
footerStop.forEach((e)=>{
    e.addEventListener('click',(b)=>{
        b.preventDefault()
    })
})
const linksStop = document.querySelectorAll('.links')
linksStop.forEach((a)=>{
    a.addEventListener('click', (b)=>{
        b.preventDefault()
    })
})



let modal = document.querySelector('.modal1 a')
modal.addEventListener('click', ()=>{
    document.querySelector('.hidden1').classList.toggle('display')
    document.querySelector('.hidden1').classList.toggle('opacity')
})

let modal2 = document.querySelector('.modal2 a')
modal2.addEventListener('click', ()=>{
    document.querySelector('.hidden2').classList.toggle('display')
    document.querySelector('.hidden2').classList.toggle('opacity')
})

let modal3 = document.querySelector('.modal3 a')
modal3.addEventListener('click', ()=>{
    document.querySelector('.hidden3').classList.toggle('display')
    document.querySelector('.hidden3').classList.toggle('opacity')
})

let modal4 = document.querySelector('.modal4 a')
modal4.addEventListener('click', ()=>{
    document.querySelector('.hidden4').classList.toggle('display')
    document.querySelector('.hidden4').classList.toggle('opacity')
})

let modal5 = document.querySelector('.modal5 a')
modal5.addEventListener('click', ()=>{
    document.querySelector('.hidden5').classList.toggle('display')
    document.querySelector('.hidden5').classList.toggle('opacity')
})



let main = document.querySelector('main .h1')
 function writer(elemento){
    const mainArray = main.textContent.split('');
    main.textContent= ""
    mainArray.forEach((letra, i)=>{
        setTimeout(function(){
            elemento.textContent += letra
        }, 100*i)
    })
}
let main2 = document.querySelector('main .h2')
function writer2(elemento2){
    const mainArray2 = main2.textContent.split('');
    main2.textContent= ""
    mainArray2.forEach((letra, i)=>{
        setTimeout(function(){
            elemento2.textContent += letra
        }, 300*i)
    })
}
writer(main)
writer2(main2)


