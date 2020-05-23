import React from 'react'
import {Link} from 'react-router-dom'
import {TosDiv} from './Styled'

function Tos () {
    return(
        <TosDiv>
        <h1>Terms of Service</h1>
        <p>By agreeing to localhost:3000's Terms of Service you agree to grant Us a <u><b>non-transferable</b></u> option to claim, for now and for ever more, your immortal soul. Should We wish to exercise this option, you agree to surrender your immortal soul, and any claim you may have on it, within 5 (five) working days of receiving written notification from localhost:3000 or one of its duly authorized minions.</p>
        <Link to='/'>Return Home</Link>
        </TosDiv>
    )
}

export default Tos