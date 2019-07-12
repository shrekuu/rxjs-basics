function next(res) {
    console.log('res', res)
}

function error(err) {
    console.log('err', err)
}

function complete() {
    console.log('done')
}

function giveMeSomeData(next, error, complete) {
    // fetch(url).then(next, error)
    // [10, 20, 30, 40].forEach(next)
}

giveMeSomeData(
    next, 
    error,
    complete
) 