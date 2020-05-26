import {JsonProperty,JsonObject} from "json2typescript";

@JsonObject("TimeSeriesMetaData")
export class  TimeSeriesMetaData{
    @JsonProperty("1. Information")
    Information:string;
    @JsonProperty("2. Symbol")
    Symbol:string;
    @JsonProperty("3. Last Refreshed")
    LastRefreshed:string;

    constructor() {
        this.Information = undefined;
        this.Symbol = undefined;
        this.LastRefreshed = undefined;
    }
}