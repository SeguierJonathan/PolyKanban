<script lang="ts">
  import type { Board } from "./lib/data/kanban";
  import { onMount } from "svelte";
  import api, { HttpMethode } from "./lib/services/api";

  let board: Board = { lists: [] };

  onMount(async () => {
    board.lists = await api<Board>("/boards", HttpMethode.GET);
    console.log(board);
  });
</script>

<header>
  <h1>PolyKanbans</h1>
</header>
<main>
  <ul class="kanban__board">
    {#each board.lists as list (list.id)}
      <li class="kanban__list">
        <h2>{list.title}</h2>

        {#each list.cards as card (card.id)}
          <article class="kanban__card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>

            <ul class="kanban__tags">
              {#each card.tags as tag (tag.id)}
                <li class="kanban__tag" style="background-color: {tag.color};">
                  <span>{tag.text}</span>
                </li>
              {/each}
            </ul>
          </article>
        {/each}
      </li>
    {/each}
  </ul>
</main>
