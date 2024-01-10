<script setup>
import { reactive ,computed} from 'vue';

const weather_forecasts = reactive({
  day1: { day: 'Monday', weather: 'fog' },
  day2: { day: 'Tuesday', weather: 'clouds' },
  day3: { day: 'Wednesday', weather: 'rain' },
  day4: { day: 'Friday', weather: 'storm' },
  day5: { day: 'Sunday', weather: 'armageddon' },
  day6: { day: 'Thursday', weather: 'ice' },
  day7: { day: 'Saturday', weather: 'snow' }
});


function more_sun(){
    const daysOfWeek = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
    const remainingDays = daysOfWeek.filter(day => weather_forecasts[day].weather !== 'SUUUUNNNNNNYYYY !');

    const randomDayIndex = Math.floor(Math.random() * remainingDays.length);
    const randomDay = remainingDays[randomDayIndex];
    weather_forecasts[randomDay].weather = 'SUUUUNNNNNNYYYY !';
}

const allDaysSunny = computed(() => {
  for (const day in weather_forecasts) {
    if (weather_forecasts[day].weather !== 'SUUUUNNNNNNYYYY !') {
      return false;
    }
  }
  return true;
});


</script>
 
<template>
    <div class="exo">
        <div style="width: 93%;">
            <h3>Weather Forecasts :</h3>
        </div>
        <div class="input" style="width: 93%;">
            <ul>
                <li v-for="(weather, day) in weather_forecasts" :key="day" style="font-size: 1.2em;">
                    <span>({{ day }}) {{ weather.day }} : </span>
                    <span :class="{ sunny: weather.weather === 'SUUUUNNNNNNYYYY !'}">{{ weather.weather }}</span>
                </li>
            </ul>
        </div>
        <div style="width:100%;margin-top: 1rem;">
            <button class="btn btn-primary" style="margin-left: 4.5rem;" @click="more_sun" :disabled="allDaysSunny">More Sun</button>
        </div>
    </div>
</template>

<style scoped>
 .exo{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

 .input{
    margin-top: 1.2rem;
    width: 93%;
 }
 .sunny{
    color: #ff0;
    font-weight: 700;
 }
</style>