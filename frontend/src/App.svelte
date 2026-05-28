<script lang="ts">
  import { kanbanData } from "./lib/data/kanban";
</script>

<header>
  <h1>PolyKanban</h1>
</header>
<main>
  <ul class="kanban__board">
    {#each kanbanData.lists as list, index (list.id)}
      <li class="kanban__list">
        <h2>{list.title}</h2>
        {#each kanbanData.lists[index].cards as card, indexCard (card.id)}
          <article class="kanban__card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <ul class="kanban__tags">
              {#each kanbanData.lists[index].cards[indexCard].tags as tag}
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
