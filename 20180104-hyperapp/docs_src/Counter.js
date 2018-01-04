import { h } from 'hyperapp'

export default function Counter({
  value,
  onClickIncrementButton,
  onClickDecrementButton,
}) {
  return (
    <div>
      <span>{value}</span>
      <button type="button" onclick={onClickDecrementButton}>
        -
      </button>
      <button type="button" onclick={onClickIncrementButton}>
        +
      </button>
    </div>
  )
}
