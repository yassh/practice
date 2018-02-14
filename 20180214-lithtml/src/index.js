import { html, render } from 'lit-html'

const helloTemplate = (name) => html`<div>Hello ${name}!</div>`

render(helloTemplate('Steve'), document.getElementById('hello1'))
render(helloTemplate('真央'), document.getElementById('hello2'))
render(helloTemplate('<u>&amp;</u>'), document.getElementById('hello3'))
