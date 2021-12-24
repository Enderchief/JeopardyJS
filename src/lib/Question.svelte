<script lang="ts">
    import {state} from "./game";

    export let question: { question: string; answer: string };

    function handle() {
        if ($state === "question") state.set("answer");
        else if ($state === "answer") state.set("board");
    }
</script>

<div on:click={handle}>
    <p>
        {question[$state]}
    </p>
</div>

<style>
    div {
        background: var(--bg-board);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    p {
        font-family: "ITC Korinna", sans-serif;
        color: var(--fg-secondary);
        font-size: var(--size);
        text-transform: uppercase;
        text-align: center;
        width: 28ch;
        margin: 10% auto;
    }
</style>
