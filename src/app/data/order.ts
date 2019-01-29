export class Order {
    userName: string;
    menu: number;
    order: [];
    dateTime: Date;

    constructor(userName: string, menu: number, order: [], dateTime: Date) {
        this.userName = userName;
        this.menu = menu;
        this.order = order;
        this.dateTime = dateTime;
    }
}
