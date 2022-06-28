
const Painting = (props) => {

    const {backurl, data} = props;

    return (
        <div className="painting-container">
            <img src={backurl + data.thumbnail.data.attributes.url} alt={data.name}/>
        </div>
    );
}

export default Painting;