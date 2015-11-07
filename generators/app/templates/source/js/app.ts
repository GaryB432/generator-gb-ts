/// <reference path="../../typings/tsd.d.ts" />

class MathService {
  add(a: number, b: number) {
    return a + b;
  }
  doAdd(a: number, b: number): Promise<number> {
    let d = Promise.defer<number>();
    d.resolve(this.add(a, b));
    return d.promise;
  }
}

document.addEventListener("DOMContentLoaded", () => new MathService().doAdd(3, 5).then((sum) => {
  let p = document.getElementById("b1");
  p.innerText = "The answer you seek is " + sum.toString();
}), false);
