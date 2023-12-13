// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onFilteredSuggestion} = props
  const {suggestion} = suggestionsList
  const onDisplaySuggestion = () => {
    onFilteredSuggestion(suggestion)
  }
  return (
    <div>
      <li className="list-container">
        <p>{suggestion}</p>
        <button type="button" onClick={onDisplaySuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </li>
    </div>
  )
}
export default SuggestionItem
