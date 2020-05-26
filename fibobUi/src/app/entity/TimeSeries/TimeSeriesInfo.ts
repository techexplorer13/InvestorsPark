import { JsonProperty, JsonObject } from "json2typescript";

@JsonObject("TimeSeriesInfo")
export class TimeSeriesInfo{
    @JsonProperty("1. open")
    open:string
    @JsonProperty("2. high")
    high:string
    @JsonProperty("3. low")
    low:string
    @JsonProperty("4. close")
    close:string
    @JsonProperty("5. adjusted close")
    adjustedclose:string
    @JsonProperty("6. volume")
    volume:string
    @JsonProperty("7. dividend amount")
    dividendamount:string
    @JsonProperty("8. split coefficient")
    split:string

    constructor(){
        this.open=undefined;
        this.low=undefined;
        this.close=undefined;
        this.adjustedclose=undefined;
        this.volume=undefined;
        this.dividendamount=undefined;
        this.split=undefined;

    }
}