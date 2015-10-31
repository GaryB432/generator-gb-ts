namespace <%= ts.namespace %> {

    export interface IHomeCtrl {
        things: IThing[];
    }

    export class HomeCtrl implements IHomeCtrl {
        things: IThing[] = [];
        constructor(private svc: <%= ts.namespace %>.ThingService) {

            svc.getThings().then(things => this.things = things);
        }
    }

}

App.controller("HomeCtrl", ["thingService", <%= ts.namespace %>.HomeCtrl]);
