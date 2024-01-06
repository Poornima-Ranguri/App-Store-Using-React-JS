import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClicking = () => {
    updateActiveId(tabId)
  }

  const activeClassTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-container" key={tabId}>
      <button
        type="button"
        className={`tab-btn ${activeClassTabBtn}`}
        onClick={onClicking}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
