namespace <% appName.capital %> {

    export interface IHomeCtrl {
        things: IThing[];
    }

    export class HomeCtrl implements IHomeCtrl {
        things: IThing[] = [];
        constructor(private svc: <% appName.capital %>.ThingService) {

            svc.getThings().then(things => this.things = things);
        }
    }

}

App.controller("HomeCtrl", ["thingService", <% appName.capital %>.HomeCtrl]);
