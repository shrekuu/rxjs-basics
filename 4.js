// nodejs 里 stream 回调
const readable = getReadableStreamSomehow() // fake function

function onData(chunk) {
    console.log('onData', chunk)
}

function onError(err) {
    console.log('err', err);
}

function onEnd() {
    console.log('ended');
}

readable.on('data', onData)
readable.on('error', onError)
readable.on('end', onEnd)
