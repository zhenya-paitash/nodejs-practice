import { TrendData } from '../../Data/TrendData.js'
import './TrendCard.css'

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you!</h3>

      {TrendData.map((trend, id) => (
        <div className="trend">
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  )
}

export default TrendCard