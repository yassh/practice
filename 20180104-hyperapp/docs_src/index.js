import { h, app } from 'hyperapp'
import Counter from './Counter.js'

const state = {
  count: 0,
}

const actions = {
  decrement() {
    return (state) => ({ count: state.count - 1 })
  },
  increment() {
    return (state) => ({ count: state.count + 1 })
  },
}

const view = (state, actions) => (
  <div>
    <Counter
      value={state.count}
      onClickDecrementButton={actions.decrement}
      onClickIncrementButton={actions.increment}
    />
  </div>
)

app(state, actions, view, document.getElementById('app'))
