export class DashboardModel {
    todaySales: number;
    SalesThisMonth: number;
    totalYearSales: number;
    bestSellerGroup: string;
    totalSelesGraph: {
        grow: string;
        series: Array<any>
    };
    inventoryValueGraph: {
        grow: string;
        series: Array<any>
    };
    productMovement: Array<ProductMovementModel>;
}

export class ProductMovementModel {
    name: string;
    in: number;
    out: number;
    stock: number;
}