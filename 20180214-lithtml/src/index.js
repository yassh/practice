import { html, render } from 'lit-html'

const helloTemplate = (name) => html`<div>Hello ${name}!</div>`

render(helloTemplate('Steve'), document.getElementById('app'))
