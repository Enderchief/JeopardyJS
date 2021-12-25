<script lang="ts">
  import Board from "./lib/Board.svelte";
  import { game, state } from "./lib/game";
  import Question from "./lib/Question.svelte";

  const money = [200, 400, 600, 800, 1000];
  let questions = {
    cat1: {
      "What is the a": "foo",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
    cat2: {
      "What is the a": "a",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
    cat3: {
      "What is the a": "a",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
    cat4: {
      "What is the a": "a",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
    cat5: {
      "What is the a": "a",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
    cat6: {
      "What is the a": "a",
      "What is the bar": "bar",
      "What is the baz": "baz",
      "What is the foobar": "foobar",
      "What is it": "it",
    },
  };

  function onQuestion(cat: string, question: string, i, j) {
    return (e: any) => {
      const elem = e.target as HTMLDivElement;
      if (!elem.childElementCount) return;

      // let oldNode = elem.lastChild.cloneNode();
      elem.lastChild.remove();
      const answer = questions[cat][question];
      console.log({ cat, question, answer });
      game.set(i, j);
      current = { question, answer };
      console.table(game.get());
      state.set("question");
    };
  }

  let current: { question: string; answer: string } = {
    question: "",
    answer: "",
  };

  function input(e) {
    const elem = e.target as HTMLInputElement;
    const files = elem.files;
    if (!files) return;
    files[0].text().then(
        value => JSON.parse(value)
    ).then(
        value => questions = value
    ).then(value => {console.log(value);});
    console.log(files);
  }
</script>

<div class="main">
  {#if $state !== "board"}
    <Question question={current} />
  {:else if $state === "board"}
    <Board {money} {questions} {onQuestion} />
  {/if}
</div>

<div class="upload">
  <label for="file">Upload Questions</label>
  <input type="file" on:input={input} accept=".json" name="file" id="file" />
</div>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: black; */
    margin: auto;
    width: min-content;
  }
  .upload {
    display: flex;
    justify-content: center;
    margin: 4rem;
  }
  input[type="file"] {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    padding: 20px 10px;
    background: var(--bg-board-dark);
    color: var(--fg-primary);
    font: 1.2em sans-serif;
    border: 1px;
    border-radius: 9px;
  }
</style>
