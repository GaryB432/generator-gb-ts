namespace <%= ts.namespace %> {

    export interface IThing {
        title: string;
        fun: number;
    }

    export interface IInfo {
        things: IThing[];
    }
    export class ThingService {
        private info: IInfo;
        constructor(private qSvc: ng.IQService, private storageSvc: StorageService) {
            this.info = this.storageSvc.readInfo();
        }

        getThings(): ng.IPromise<IThing[]> {
            let d = this.qSvc.defer();
            d.resolve(this.info.things);
            return d.promise;
        }

    }

}
App.service("thingService", ["$q", "storageService", <%= ts.namespace %>.ThingService]);
