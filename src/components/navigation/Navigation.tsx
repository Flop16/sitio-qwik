import { $, component$, useOnWindow, useStore, useStyles$ } from '@builder.io/qwik';
import { IconClose, IconMenu } from '../starter/icons';
import style from './Navigation.css?inline'

export const Navigation = component$(() => {
  useStyles$(style);

  const store = useStore ({
      isNavOpen: false,
      windowWidth: 0,
  });

  useOnWindow(
    "load", 
    $(() => {
      store.windowWidth = window.innerWidth;
    })
  );

  useOnWindow(
    "resize", 
    $(() => {
      store.windowWidth = window.innerWidth;
    })
  );

  const toggleNav = $(() => {
    store.isNavOpen = !store.isNavOpen;
  });

  return (
    <nav>
      {/* Desktop Menu */}
      {store.isNavOpen || store.windowWidth > 768 ? (
        <ul class={store.isNavOpen ? "open" : ""}>
          <li> <a href='/'>Inicio</a> </li>
          <li><a href='/about'>Quiénes Somos</a></li>
          <li><a href='/contact'>Contacto</a></li>
          
        </ul>       
      ) : (
        ""
      ) }
      {/* Open button */}
      {!store.isNavOpen ? (
        <button
          class="nav-open" 
          aria-label='Abrir Menú' 
          onClick$={toggleNav}
        >
          <IconMenu />
        </button>
      ) : (
        ""
      ) }

      {/* Close button */}
      {store.isNavOpen ? (
        <button
          class="nav-close" 
          aria-label='Cerrar Menú' 
          onClick$={toggleNav}
        >
          <IconClose />
        </button>
      ) : (
        ""
      ) }
    </nav>
  );
});