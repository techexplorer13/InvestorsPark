import {TimeSeriesInfo} from 'src/app/entity/TimeSeries/TimeSeriesInfo';
import {JsonObject, JsonProperty } from "json2typescript";

@JsonObject("TimeSeriesDaily")
export class TimeSeriesDaily{

    timeseriesInfoMap:Map<String,TimeSeriesInfo>

    constructor() {
        this.timeseriesInfoMap = undefined;
    }
}