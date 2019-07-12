function filter(conditionFn) {
  const inputObservable = this;
  outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function(x) {
        if (conditionFn(x)) {
          outputObserver.next(x);
        }
      },
      error: err => outputObserver.err(err),
      complete: () => outputObserver.complete()
    });
  });
  return outputObservable;
}

function map(tranformFn) {
  const inputObservable = this;
  outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function(x) {
        const y = tranformFn(x);
        outputObserver.next(y);
      },
      error: err => outputObserver.err(err),
      complete: () => outputObserver.complete()
    });
  });
  return outputObservable;
}

function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter
  };
}

const clickObservable = createObservable(function subscribe(ob) {
  document.addEventListener("click", ob.next);
});

const arrayObservable = createObservable(function subscribe(ob) {
  [10, 20, 30, 40].forEach(ob.next);
  ob.complete();
});

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

arrayObservable
  .map(x => x / 10)
  .filter(x => x !== 2)
  .subscribe(observer);
