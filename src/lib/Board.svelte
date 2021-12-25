<script lang="ts">
  import { game } from "./game";

  export let money;
  export let questions;
  export let onQuestion;

  console.log(questions);
</script>

<div class="board">
  {#each Object.keys(questions) as category, i}
    <div class="column">
      <div class="category item"><p>{category}</p></div>
      {#each Object.keys(questions[category]) as item, j}
        <!-- {@debug i, j, $game} -->
        {#if !$game[i][j]}
          <div class="item in" on:click={onQuestion(category, item, i, j)}>
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
  .board {
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

  .item.in:hover {
    background: var(--bg-board-dark);
    cursor: pointer;
  }

  .category {
    text-transform: uppercase;
    color: var(--fg-secondary);
    font-size: calc(0.7 * var(--size));
    line-height: calc(0.7 * var(--size));
    border-bottom-width: calc(0.2 * var(--size));
  }
</style>
