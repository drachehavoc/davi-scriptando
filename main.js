let videos = document.querySelector('.videos')
let video = document.querySelector('.video')
let i = 6
let allAudio = false

while (i--) {
    videos.appendChild( video.cloneNode(true) )
}

document.querySelectorAll('.video i.light').forEach(el => el.addEventListener('click', ev => {
    let img = ev.target.closest('.video').querySelector('img')
    img.classList.toggle('light')
}))

document.querySelector('.all-light').addEventListener('click', ev => {
    let imgs = document.querySelectorAll('.video img')
    if (!allAudio) {
        ev.target.classList.add('on')
        imgs.forEach(el => el.classList.add('light'))
        allAudio = true
    } else {
        ev.target.classList.remove('on')
        imgs.forEach(el => el.classList.remove('light'))
        allAudio = false
    }
})