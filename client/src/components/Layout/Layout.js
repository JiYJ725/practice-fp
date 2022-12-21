import { html, go, tap } from "fxjs";
import { $appendTo, $children, $el, $qs } from 'fxdom';
import Todo from "../Todo/Todo";

const Layout = {};


Layout.append = (parent) =>
  go(
    Layout.tmpl,
    $el,
    $appendTo(parent),
    $children,
    console.log,
  );


Layout.tmpl = html`
    <div class='layout'>
        <header class="layout__header"></header>
        <div class="layout__menu"></div>
        <main class="layout__main"></main>
        <footer class="layout__footer"></footer>
    </div>
`;

export default Layout;