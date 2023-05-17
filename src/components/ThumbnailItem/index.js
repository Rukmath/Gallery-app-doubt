import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, updateStateImgId, isActive} = props
  const {id,thumbnailUrl,thumbnailAlttext} = eachThumbnailDetails

  const onClickImgBtn = () => {
    updateStateImgId(id)
  }

  const activeImgCss = isActive? "active-img-btn" : ''
 
  return (
      <li className = "thumbnail-container">
        <button className = {`img-btn ${activeImgCss}`} type="button" onClick = {onClickImgBtn}>
          <img
            src = {thumbnailUrl}
            alt = {thumbnailAltText}
            className = "thumbnail-img"
          />
        </button>
      </li>
  )

}

export default ThumbnailItem