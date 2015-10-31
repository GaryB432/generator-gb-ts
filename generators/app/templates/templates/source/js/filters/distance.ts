namespace <% appName.capital %> {
    export function showTotalFun(amount: number, unit: string) {
        return amount * 5;
    }
}
App.filter("funFilter", () => <% appName.capital %>.showTotalFun);
