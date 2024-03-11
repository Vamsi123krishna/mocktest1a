import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const TrackItem = props => {
  const {trackDetails, deleteSongs} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const onClickingDelete = () => {
    deleteSongs(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="track" />
      <div>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <p>{duration}</p>
      <button type="button" data-testid="delete" onClick={onClickingDelete}>
        .
        <AiOutlineDelete />
      </button>
    </li>
  )
}

export default TrackItem
