import './index.css'

const AppItem = props => {
  const {appDeatils} = props
  const {appId, appName, imageUrl} = appDeatils

  return (
    <div>
      <li className="list-container" key={appId}>
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="paragraph">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
