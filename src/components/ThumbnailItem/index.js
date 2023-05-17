import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, updateStateImgId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnailDetails

  const onClickImgBtn = () => {
    updateStateImgId(id)
  }

  const activeImgCss = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-container">
      <button onClick={onClickImgBtn} className="img-btn" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImgCss}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
