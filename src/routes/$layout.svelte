<main>
  <section>
    <span>
      <h1>knrd's blog</h1>
    </span>
    <nav>
      <a href=".">blog</a>
      <a href="contact">contact</a>
    </nav>
  </section>
  <slot></slot>
</main>


<style>
  :global(body) {
    background-color: #181a1b;
    color: #d1cdc7;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :global(div#svelte) {
    height: 100vh;
  }

  main {
    display: flex;
    height: 100%;
  }

  section {
    border-right: 1px solid white;
    min-width: 300px;
    height: 100%;
    padding: 1rem;
  }

  span {
    margin: 1.5rem;
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: column;
  }
</style>
