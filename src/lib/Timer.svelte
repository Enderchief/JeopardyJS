<script lang="ts">
  import { onMount } from "svelte";

  let time = 30;

  onMount(startTimer);

  function startTimer() {
    time = 30;
    const t = setInterval(() => {
      time--;
      console.log(time);
	  if (time <= 0) {
		clearInterval(t);
	  }
    }, 1000);
  }
</script>

<div class="timer">
  <p>{time}</p>
</div>

<style>
  .timer {
    --size: 8rem;
    width: var(--size);
    height: var(--size);
    line-height: calc(var(--size) / 2);
    font-size: 1.6rem;
    color: white;
    text-align: center;
    margin: 0;
    background: var(--bg-board);
	border-radius: 8px;
  }
</style>
