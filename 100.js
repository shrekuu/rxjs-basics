import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

of([1, 2, 3, 4, 5, 6, 7])
  .pipe(
    filter(x => x > 5),
    map(x => x * 10)
  )
  .subscribe(
    x => {
      console.log(x);
    },
    err => {
      console.log(err);
    },
    () => {
      console.log("complete");
    }
  );
