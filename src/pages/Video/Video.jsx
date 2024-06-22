import { useParams } from 'react-router-dom'
import Recommended from '../../Components/Recommend/Recommended'
import PlayVideo from '../../Components/playvideo/PlayVideo'
import './Video.css'

const Video = () => {
  const{categoryId} = useParams()
  return (
    <div className="play-container">
      <PlayVideo categoryId={categoryId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video