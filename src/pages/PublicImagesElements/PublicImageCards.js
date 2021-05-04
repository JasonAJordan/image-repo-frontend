
function PublicImageCards({image}) {

    return (
        <div>
             <img src={image.imgUrl}  width="250" height="250"/>
            <span>{image.description} </span>
        </div>
    )
}
export default PublicImageCards;