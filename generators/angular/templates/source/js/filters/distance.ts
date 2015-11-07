namespace <%= ts.namespace %> {
    export function showTotalFun(amount: number, unit: string) {
        return amount * 5;
    }
}
App.filter("funFilter", () => <%= ts.namespace %>.showTotalFun);
