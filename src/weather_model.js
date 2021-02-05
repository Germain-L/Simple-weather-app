export class WeatherModel {
    name;
    temperature;
    description;
    icon;

    constructor(name, temperature, description, icon) {
        this.name = name;
        this.temperature = Math.round(temperature - 273.15);
        this.description = description;
        this.icon = icon;
    }
}