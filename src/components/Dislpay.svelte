<script>
    export let model;
</script>

<div class="flex flex-row justify-evenly w-full">
  <img class="" src={`/assets/${model.icon}.svg`} alt={model.description} />
  <div class="flex-col justify-center content-center text-center">
    <h1 class="text-2xl font-bold">
      {model.temperature}°C
    </h1>
    <h2 class="text-lg font-semibold">{model.description}</h2>
  </div>
  <img class="" src={`/assets/${model.icon}.svg`} alt={model.description} />
</div>
