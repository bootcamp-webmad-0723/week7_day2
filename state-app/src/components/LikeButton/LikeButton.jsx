import './LikeButton.css'
import heartOn from './../../assets/heart-on.svg'
import heartOff from './../../assets/heart-off.svg'
import { useState } from 'react'

const LikeButton = () => {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className="LikeButton" onClick={handleLike}>
            <img src={like ? heartOn : heartOff} alt="" />
            {
                like ?
                    <p>Le gustas! :D</p> :
                    <p>Parece que no le gustas aw D:</p>
            }
        </div>
    )
}

export default LikeButton