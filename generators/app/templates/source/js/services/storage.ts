namespace <%= ts.namespace %> {
    const KEY = "my-app";
    export class StorageService {
        writeInfo(info: IInfo): void {
            return this.save<IInfo>(KEY, info);
        }
        readInfo(): IInfo {
            let defs: IThing[] = [
                { title: "programming <%= ts.namespace %>", fun: 4.5 },
                { title: "sleeping", fun: 2 },
                { title: "working", fun: 1 }
            ];

            let info = this.read<IInfo>(KEY) || {
                things: defs
            };

            return info;
        }
        private read<T>(key: string) {
            return <T>angular.fromJson(localStorage.getItem(key));
        }
        private save<T>(key: string, data: T) {
            localStorage.setItem(key, angular.toJson(data));
        }
    }
}

App.service("storageService", [<%= ts.namespace %>.StorageService]);
