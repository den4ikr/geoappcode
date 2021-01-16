export type WeatherResponseType = {
    coord: {
        lon: number,
        lat: number,
      },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string,
    },
    name: string,
    country: string,
}