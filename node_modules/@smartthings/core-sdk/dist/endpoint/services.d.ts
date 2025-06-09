import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Status } from '../types';
export interface TimeValue {
    value: string;
}
export interface NumericValue {
    value: number;
    unit: string;
}
export interface UnitlessNumericValue {
    value: number;
}
export interface StringValue {
    value: string;
}
export interface ServiceLocationInfo {
    locationId: string;
    subscriptions: Array<ServiceLocationInfoSubscriptions>;
    latitude: number;
    longitude: number;
    city: string;
}
export interface ServiceLocationInfoSubscriptions {
    subscriptionId: string;
    /**
     * DIRECT or EXECUTION delivery, default to DIRECT
     */
    type: string;
    /**
     * JEXL expression string
     */
    predicate: string;
    subscribedCapabilities: Array<string>;
}
export interface ServiceNewSubscription {
    /**
     * location ID
     */
    locationId: string;
    /**
     * subscription ID created
     */
    subscriptionId: string;
}
export declare enum ServiceCapabilitiesEnum {
    weather = "weather",
    airQuality = "airQuality",
    forecast = "forecast",
    airQualityForecast = "airQualityForecast"
}
export declare enum ServiceSubscriptionType {
    DIRECT = "DIRECT",
    EXECUTION = "EXECUTION"
}
export interface ServiceSubscriptionBody {
    /**
     * InstalledApp ID
     */
    isaId: string;
    /**
     * DIRECT or EXECUTION delivery, defaults to DIRECT
     */
    type?: ServiceSubscriptionType;
    /**
     * capability name(s)
     */
    capabilities: Array<ServiceCapabilitiesEnum>;
    /**
     * JEXL formatted expression referencing attributes from the requested capabilities. For example, to receive a
     * weather event whenever the temperature is greater than 4 degrees celsius, you would use this expression:
     *
     *     'weather.temperature.value > 4'
     *
     * You would then expect to receive an event whenever the temperature was above 4 degrees. You'd receive this event
     * every 20 minutes while the condition is met, not only when the threshold is crossed. The event data will include
     * all of the capability data, not just the property used in the condition. So, for example, if you were also
     * interested in the feels like temperature and relative humidity whenever the temperature was above 4 degrees,
     * you would not need to create subscriptions for each of them.
     *
     * See https://commons.apache.org/proper/commons-jexl/reference/syntax.html
     */
    predicate?: string;
}
export interface ServiceSubscriptionRequest {
    capabilities: Array<ServiceCapabilitiesEnum>;
    predicate?: string;
    type?: ServiceSubscriptionType;
}
export interface AirQualityData {
    airQualityIndex: NumericValue;
    o3Amount: NumericValue;
    o3Index: UnitlessNumericValue;
    no2Amount: NumericValue;
    no2Index: UnitlessNumericValue;
    so2Amount: NumericValue;
    so2Index: UnitlessNumericValue;
    coAmount: NumericValue;
    coIndex: UnitlessNumericValue;
    pm10Amount: NumericValue;
    pm10Index: UnitlessNumericValue;
    pm25Amount: NumericValue;
    pm25Index: UnitlessNumericValue;
}
export interface WeatherForecast {
    vendor: NumericValue;
    version: NumericValue;
    precip1Hour: NumericValue;
    precipMin1Hour: NumericValue;
    precipMax1Hour: NumericValue;
    precip2Hour: NumericValue;
    precipMin2Hour: NumericValue;
    precipMax2Hour: NumericValue;
    precip3Hour: NumericValue;
    precipMin3Hour: NumericValue;
    precipMax3Hour: NumericValue;
    precip4Hour: NumericValue;
    precipMin4Hour: NumericValue;
    precipMax4Hour: NumericValue;
    precip5Hour: NumericValue;
    precipMin5Hour: NumericValue;
    precipMax5Hour: NumericValue;
    precip6Hour: NumericValue;
    precipMin6Hour: NumericValue;
    precipMax6Hour: NumericValue;
    precip7Hour: NumericValue;
    precipMin7Hour: NumericValue;
    precipMax7Hour: NumericValue;
    precip8Hour: NumericValue;
    precipMin8Hour: NumericValue;
    precipMax8Hour: NumericValue;
    precip9Hour: NumericValue;
    precipMin9Hour: NumericValue;
    precipMax9Hour: NumericValue;
    precip10Hour: NumericValue;
    precipMin10Hour: NumericValue;
    precipMax10Hour: NumericValue;
    precip11Hour: NumericValue;
    precipMin11Hour: NumericValue;
    precipMax11Hour: NumericValue;
    precip12Hour: NumericValue;
    precipMin12Hour: NumericValue;
    precipMax12Hour: NumericValue;
    precip24Hour: NumericValue;
    snow1Hour: NumericValue;
    snowMin1Hour: NumericValue;
    snowMax1Hour: NumericValue;
    snow2Hour: NumericValue;
    snowMin2Hour: NumericValue;
    snowMax2Hour: NumericValue;
    snow3Hour: NumericValue;
    snowMin3Hour: NumericValue;
    snowMax3Hour: NumericValue;
    snow4Hour: NumericValue;
    snowMin4Hour: NumericValue;
    snowMax4Hour: NumericValue;
    snow5Hour: NumericValue;
    snowMin5Hour: NumericValue;
    snowMax5Hour: NumericValue;
    snow6Hour: NumericValue;
    snowMin6Hour: NumericValue;
    snowMax6Hour: NumericValue;
    snow7Hour: NumericValue;
    snowMin7Hour: NumericValue;
    snowMax7Hour: NumericValue;
    snow8Hour: NumericValue;
    snowMin8Hour: NumericValue;
    snowMax8Hour: NumericValue;
    snow9Hour: NumericValue;
    snowMin9Hour: NumericValue;
    snowMax9Hour: NumericValue;
    snow10Hour: NumericValue;
    snowMin10Hour: NumericValue;
    snowMax10Hour: NumericValue;
    snow11Hour: NumericValue;
    snowMin11Hour: NumericValue;
    snowMax11Hour: NumericValue;
    snow12Hour: NumericValue;
    snowMin12Hour: NumericValue;
    snowMax12Hour: NumericValue;
    snow24Hour: NumericValue;
    temperature1Hour: NumericValue;
    temperature2Hour: NumericValue;
    temperature3Hour: NumericValue;
    temperature4Hour: NumericValue;
    temperature5Hour: NumericValue;
    temperature6Hour: NumericValue;
    temperature7Hour: NumericValue;
    temperature8Hour: NumericValue;
    temperature9Hour: NumericValue;
    temperature10Hour: NumericValue;
    temperature11Hour: NumericValue;
    temperature12Hour: NumericValue;
}
export interface AirQualityForecast {
    pm10Index1Hour: UnitlessNumericValue;
    pm10Index2Hour: UnitlessNumericValue;
    pm10Index3Hour: UnitlessNumericValue;
    pm10Index4Hour: UnitlessNumericValue;
    pm10Index5Hour: UnitlessNumericValue;
    pm10Index6Hour: UnitlessNumericValue;
    pm10Index7Hour: UnitlessNumericValue;
    pm10Index8Hour: UnitlessNumericValue;
    pm10Index9Hour: UnitlessNumericValue;
    pm10Index10Hour: UnitlessNumericValue;
    pm10Index11Hour: UnitlessNumericValue;
    pm10Index12Hour: UnitlessNumericValue;
    pm10Amount1Hour: NumericValue;
    pm10Amount2Hour: NumericValue;
    pm10Amount3Hour: NumericValue;
    pm10Amount4Hour: NumericValue;
    pm10Amount5Hour: NumericValue;
    pm10Amount6Hour: NumericValue;
    pm10Amount7Hour: NumericValue;
    pm10Amount8Hour: NumericValue;
    pm10Amount9Hour: NumericValue;
    pm10Amount10Hour: NumericValue;
    pm10Amount11Hour: NumericValue;
    pm10Amount12Hour: NumericValue;
    pm25Index1Hour: UnitlessNumericValue;
    pm25Index2Hour: UnitlessNumericValue;
    pm25Index3Hour: UnitlessNumericValue;
    pm25Index4Hour: UnitlessNumericValue;
    pm25Index5Hour: UnitlessNumericValue;
    pm25Index6Hour: UnitlessNumericValue;
    pm25Index7Hour: UnitlessNumericValue;
    pm25Index8Hour: UnitlessNumericValue;
    pm25Index9Hour: UnitlessNumericValue;
    pm25Index10Hour: UnitlessNumericValue;
    pm25Index11Hour: UnitlessNumericValue;
    pm25Index12Hour: UnitlessNumericValue;
    pm25Amount1Hour: NumericValue;
    pm25Amount2Hour: NumericValue;
    pm25Amount3Hour: NumericValue;
    pm25Amount4Hour: NumericValue;
    pm25Amount5Hour: NumericValue;
    pm25Amount6Hour: NumericValue;
    pm25Amount7Hour: NumericValue;
    pm25Amount8Hour: NumericValue;
    pm25Amount9Hour: NumericValue;
    pm25Amount10Hour: NumericValue;
    pm25Amount11Hour: NumericValue;
    pm25Amount12Hour: NumericValue;
}
export interface WeatherData {
    cloudCeiling: NumericValue;
    cloudCoverPhrase: StringValue;
    iconCode: NumericValue;
    conditionState: NumericValue;
    relativeHumidity: NumericValue;
    sunriseTimeLocal: TimeValue;
    sunsetTimeLocal: TimeValue;
    temperature: NumericValue;
    temperatureFeelsLike: NumericValue;
    uvDescription: StringValue;
    uvIndex: UnitlessNumericValue;
    visibility: NumericValue;
    windDirection: NumericValue;
    windDirectionCardinal: StringValue;
    windGust: NumericValue;
    windSpeed: NumericValue;
    wxPhraseLong: StringValue;
}
export interface ServiceCapabilityData {
    locationId: string;
    airQuality?: AirQualityData;
    forecast?: WeatherForecast;
    airQualityForecast?: AirQualityForecast;
    weather?: WeatherData;
}
export declare class ServicesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns the location's city, latitude, longitude, and list of location services subscriptions, if any
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    getLocationServiceInfo(locationId?: string): Promise<ServiceLocationInfo>;
    /**
     * Returns the list of location service capability names available for this location. Currently airQuality,
     * forecast, and weather, for locations have have geo-coordinates set
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    getServiceCapabilities(locationId?: string): Promise<ServiceCapabilitiesEnum[]>;
    /**
     * Subscribe to changes in any location service capability value
     * @param params the subscription definition
     * @param installedAppId UUID of the installed app instance. If the client is configured with an installedAppId this
     * parameter can be omitted
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    createSubscription(params: ServiceSubscriptionRequest, installedAppId?: string, locationId?: string): Promise<ServiceNewSubscription>;
    /**
     * Update a location service subscription.
     * @param id UUID of the subscription
     * @param params the subscription definition
     * @param installedAppId UUID of the installed app instance. If the client is configured with an installedAppId this
     * parameter can be omitted
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    updateSubscription(id: string, params: ServiceSubscriptionRequest, installedAppId?: string, locationId?: string): Promise<ServiceNewSubscription>;
    deleteSubscription(id: string, installedAppId?: string, locationId?: string): Promise<Status>;
    deleteSubscriptions(installedAppId?: string, locationId?: string): Promise<Status>;
    /**
     *
     * @param capability Comma separated string of capabilities (weather, airQuality, forecast, airQualityForcast).
     * For example, \&quot;weather,airQuality\&quot;
     * @param locationId
     */
    getCapability(capability: ServiceCapabilitiesEnum, locationId?: string): Promise<ServiceCapabilityData>;
    /**
     *
     * @param capabilities Comma separated string of capabilities (weather, airQuality, forecast, airQualityForcast).
     * For example, \&quot;weather,airQuality\&quot;
     * @param locationId
     */
    getCapabilities(capabilities: ServiceCapabilitiesEnum[], locationId?: string): Promise<ServiceCapabilityData>;
}
//# sourceMappingURL=services.d.ts.map