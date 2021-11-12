import React, { useState } from 'react';
import { CardStyles } from '../../styles/Card.style';
import { MdOutlineLocationOn} from 'react-icons/md'
import { PHOTOS } from './Content';
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs'

const Card: React.FC<{ photo: PHOTOS}> = ({ photo }) => {
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    const handleMouseOut = () => {
        setHovered(false)
    }

   
    return (
        <CardStyles image={photo.urls.regular}  onMouseOver={handleHover} onMouseOut={handleMouseOut} hover={hovered}>

            <div className="profile-info">
                <p>{ photo.description ? photo.description.substring(0, 15) + ".." : 'Jack'}</p>
                <small>
                <MdOutlineLocationOn /> {photo.user?.location || 'New York'}
                </small>
                <div className="action">
                    <button><BsHandThumbsDown/></button>
                    <button><BsHandThumbsUp/></button>
                </div>

            </div>
            
        </CardStyles>
    )
}

export default Card
