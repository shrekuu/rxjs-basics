// 异步回调
const res = fetch(
    'http://jsonplaceholder.typicode.com/users/1'
).then(res => res.json())

function onSuccess(res) {
    console.log('res', res)
}

function onFailure(err) {
    console.log('err', err)
}

res.then(onSuccess, onFailure)