<script lang="ts">
  import { state } from "./game";
  import Timer from "./Timer.svelte";

  export let question: { question: string; answer: string };

  function handle() {
    if ($state === "question") state.set("answer");
    else if ($state === "answer") state.set("board");
  }
</script>

<div class="container">
  <div class="card" on:click={handle}>
    <p class="text">
      {question[$state]}
    </p>
  </div>

  <Timer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  .card {
    background: var(--bg-board);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
    margin: 5vw 0;
  }

  .text {
    font-family: "ITC Korinna", sans-serif;
    color: var(--fg-secondary);
    font-size: var(--size);
    text-transform: uppercase;
    text-align: center;
    width: 28ch;
    margin: 10% auto;
  }
</style>
