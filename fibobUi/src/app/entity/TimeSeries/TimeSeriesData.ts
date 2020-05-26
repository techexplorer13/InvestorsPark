import { JsonProperty,JsonObject } from "json2typescript";
import { TimeSeriesMetaData } from "./TimeSeriesMetaData";
import { TimeSeriesDaily } from "./TimeSeriesDaily";

@JsonObject("TimeSeriesData")
export class TimeSeriesData{
    @JsonProperty("Meta Data",TimeSeriesMetaData)
    metaData:TimeSeriesMetaData;
    @JsonProperty("Time Series (Daily)",TimeSeriesDaily) 
    timeSeriesDaily:TimeSeriesDaily


    constructor() {
        this.metaData = undefined;
        this.timeSeriesDaily = undefined;
    }
}