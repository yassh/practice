import html from 'choo/html'
import choo from 'choo'

function indexView(state, emit) {
  function onclick() {
    emit('increment', 1)
  }

  return html`
    <div>
      <h1>Index</h1>
      <div>
        <button onclick=${onclick}>Increment</button>
        ${state.count}
      </div>
      <div>☞ <a href="/foo">foo</a></div>
    </div>
`
}

function fooView(state, emit) {
  function onclick() {
    emit('increment', 1)
  }

  function oninput(e) {
    emit('input', e.target.value)
  }

  return html`
    <div>
      <h1>Foo</h1>
      <div>
        <button onclick=${onclick}>Increment</button>
        ${state.count}
      </div>
      <div>
        <input type="text" value=${state.inputValue} oninput=${oninput} />
        ${state.inputValue}
      </div>
    </div>
  `
}

function countStore(state, emitter) {
  state.count = 0
  state.inputValue = ''

  emitter.on('increment', (count) => {
    state.count += count
    emitter.emit('render')
  })

  emitter.on('input', (inputValue) => {
    state.inputValue = inputValue
    emitter.emit('render')
  })
}

const app = choo()
app.use(countStore)
app.route('/', indexView)
app.route('/foo', fooView)
app.mount('#app')
