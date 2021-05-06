

function PublicImageCards({image}) {

    return (
        <div className="image">
             <img src={image.imgUrl}  width="250" height="250" alt={image.description}/><br/>
            <div className="imagetext">{image.description} </div>
        </div>
    )
}
export default PublicImageCards;