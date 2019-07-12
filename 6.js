const observer = {
  next: function next(res) {
    console.log("res", res);
  },
  error: function error(err) {
    console.log("err", err);
  },
  complete: function complete() {
    console.log("done");
  }
};

function giveMeSomeData(observer) {
  // fetch(url).then(observer.next, observer.error)
  [10, 20, 30, 40].forEach(observer.next);
  observer.complete()
}

giveMeSomeData(observer);
