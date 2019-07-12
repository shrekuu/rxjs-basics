const clickObservable = {
  subscribe: function subscribe(ob) {
    document.addEventListener("click", ob.next);
  }
};

const arrayObservable = {
  subscribe: function subscribe(ob) {
    [10, 20, 30, 40].forEach(ob.next);
    ob.complete();
  }
};

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

arrayObservable.subscribe(observer);
