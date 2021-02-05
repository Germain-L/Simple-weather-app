<script lang="ts">
  import axios from "axios";

  import Search from "./Search.svelte";

  import { WeatherModel } from "../weather_model";

  $: search = "";
  $: model = "";

  function getSvg() {
    let imgUrl = `/assets/${model.icon}.svg`;
    console.log(imgUrl);
    return imgUrl;
  }

  function getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=852ce9a805c16d97db6dd7324107d0f4`
      )
      .then(function (response) {
        // handle success

        let city = response.data.name;
        let temp = response.data.main.temp;
        let description = response.data.weather[0].main;
        let icon = response.data.weather[0].id;

        model = new WeatherModel(city, temp, description, icon);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
</script>

<div
  class="max-h-50 min-w-44 m-3 shadow-lg rounded-md p-4 bg-gray-300 flex flex-col items-start	 "
>
  <h1 class="text-2xl font-bold">Location</h1>
  <br />
  <div class="flex flex-row justify-between w-full	">
    <Search bind:value={search} />

    <button
      class="focus:outline-none bg-white shadow-md focus:ring focus:border-blue-300 font-bold rounded py-2 px-4 ml-3"
      on:click={getWeather}>Search</button
    >
  </div>
  <br />
  {#if model != ""}
    <div class="flex flex-col md:flex-row justify-evenly w-full">
      <img src={`/assets/${model.icon}.svg`} alt={model.description} />
      <div class="flex-col justify-center content-center text-center">
        <h1 class="text-2xl font-bold">
          {model.temperature}°C
        </h1>
        <h2 class="text-lg font-semibold">{model.description}</h2>
      </div>
      <img src={`/assets/${model.icon}.svg`} alt={model.description} />
    </div>
  {/if}
</div>
