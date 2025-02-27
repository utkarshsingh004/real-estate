import './Services.css'

function ServiceCard({images, name, description}) {
    return(
        <div className='ser'>
            <img src={images}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard