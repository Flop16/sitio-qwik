import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";




export default component$(() => {
  return (
    <div class={[styles.hero]}>
      <h1>
        Hello <span class="highlight"> everyone</span>
      </h1>

      <div class={styles["button-group"]}>
        <a
          href="https://google.com"
          target="_blank"
          class="button button-dark"
        >
          Vamos a Google
        </a>
      </div>
    </div>
  );
});
