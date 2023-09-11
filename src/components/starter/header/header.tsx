import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Navigation } from "~/components/navigation/Navigation";
import Ppal from "./Ppal";

export default component$(() => {
 
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="logo">
            <Ppal />
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
});

