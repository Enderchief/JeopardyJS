<script lang="ts">
  import { game } from "./game";

  export let money;
  export let questions;
  export let onQuestion;
</script>

<div class="board">
  {#each Object.keys(questions) as category, i}
    <div class="column">
      <div class="category item"><p>{category}</p></div>
      {#each Object.keys(questions[category]) as item, j}
        {#if !$game[i][j]}
          <div class="item" on:click={onQuestion(category, item, i, j)}>
            <p>${money[j]}</p>
          </div>
        {:else}
          <div class="item" />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  :global():root {
    --bg-site: rgb(48, 48, 48);
    background: var(--bg-site);

    /* --bg-board: hsl(238, 95%, 47%); */
    --bg-board: hsl(235, 98%, 24%);
    --fg-primary: hsl(36, 64%, 57%);
    --fg-secondary: white;

    --size: 4rem;
  }

  :global().board {
    display: flex;
    border: calc(0.2 * var(--size)) solid black;
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .item {
    font-size: var(--size);
    font-family: "Swiss 911 Compressed";

    color: var(--fg-primary);
    background: var(--bg-board);
    border: calc(0.1 * var(--size)) solid black;

    width: calc(3.5 * var(--size));
    height: calc(2 * var(--size));

    /* margin: 2px; */
    padding: 0;

    line-height: 1rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item p {
    text-shadow: 4px 4px black;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .category {
    text-transform: uppercase;
    color: var(--fg-secondary);
    font-size: calc(0.8 * var(--size));
    border-bottom-width: calc(0.2 * var(--size));
  }
</style>
