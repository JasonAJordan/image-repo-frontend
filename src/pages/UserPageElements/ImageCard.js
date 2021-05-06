function ImageCard({image, handleDeleteImage}) {

    function onDeleteClick(event){
        const id = image.id.toString()
        fetch(`http://localhost:3000/images/${id}`, {
            method: "DELETE"
        }); 
        handleDeleteImage(image)
    }

    return (
        <div className="image">
            <img src={image.imgUrl}  width="250" height="250" alt={image.description}/><br/>
            <div className="imagetext" >{image.description}</div>

            <button onClick={onDeleteClick}>Delete</button>

        </div>
    )
}
export default ImageCard;