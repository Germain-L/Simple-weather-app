<script lang="ts">
  import axios from "axios";

  import Search from "./Search.svelte";
  import Display from "./Dislpay.svelte";

  import { WeatherModel } from "../weather_model";

  $: search = "";
  $: model = new WeatherModel();
  $: gotData = false;

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
        gotData = true;
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
  {#if gotData}
    <Display {model} />
  {:else}
    <h2 class="text-center w-full text-lg font-semibold">
      Enter a city to get weather data
    </h2>
  {/if}
</div>
