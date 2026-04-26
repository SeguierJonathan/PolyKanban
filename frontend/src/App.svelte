<script lang="ts">
  import { kanbanData } from "./lib/data/kanban";
  import { Button, Willow } from "@svar-ui/svelte-core";
</script>

<header>
  <h1>PolyKanban</h1>
</header>
<main>
  <ul class="kanban__board">
    {#each kanbanData.Lists as list, index (list.id)}
      <li class="kanban__list">
        <h2>{list.title}</h2>

        {#each kanbanData.Lists[index].cards as card}
          <article class="kanban__card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        {/each}
        <article class="kanban__card">
          <h3>Ajouter une card</h3>
        </article>
      </li>
    {/each}
    <article class="kanban__card">
      <h3>Ajouter une list</h3>
      <Willow><Button type="primary">Click me</Button></Willow>
    </article>
  </ul>
</main>
