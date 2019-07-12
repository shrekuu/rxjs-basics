// 回调
const el = document.querySelector('#btn')

function cb(x) {
    console.log('clicked', x)
}

el.addEventListener('click', cb)
