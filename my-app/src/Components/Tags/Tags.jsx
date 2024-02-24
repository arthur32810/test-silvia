import './Tags.css';

function Tags({ tags }) {
    const listTags = tags.map((tags, index) =>
        <li className='info-tags' key={index}>{tags}</li>
    )

    return (
        <div className='info-tags-container'>
            <ul className='info-tags-content'>{listTags}</ul>
        </div>
    )
}

export default Tags;