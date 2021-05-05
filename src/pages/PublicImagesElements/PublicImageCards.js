
function PublicImageCards({image}) {

    return (
        <div>
             <img src={image.imgUrl}  width="250" height="250" alt={image.description}/>
            <span>{image.description} </span>
        </div>
    )
}
export default PublicImageCards;