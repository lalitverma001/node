import { withWidth } from '@material-ui/core'
import React from 'react'
import notfound from '../Assets/imeges/notfound.jpg'

function NotFound() {
    return (
        <div>
            <img src={notfound} style={{width:"30%", margin:'80px 0 0 37%'}}/>
        </div>
    )
}

export default NotFound
