import {StockDetail} from 'src/app/entity/StockDetail'
export class StockDetailResponse{
    total:Number;
    offset:Number;
    results:Array<StockDetail>
}