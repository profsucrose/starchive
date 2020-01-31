import React, { useEffect } from 'react'
import { signIn, signOut } from '../../actions'
import { connect } from 'react-redux'

import firebase from '../../firebase'
import 'firebase/auth'

const auth = firebase.auth()

const HeaderAuth = props => {
    const signInOrOut = !props.auth.isSignedIn ? props.signIn : props.signOut 
    const buttonClass = `ui button ${!props.auth.isSignedIn ? 'negative' : 'primary'}`
    const text = props.auth.isSignedIn ? 'Sign In' : 'Sign Out'

    return (
        <div 
            className={buttonClass}
            onClick={signInOrOut}
        >
            {text}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { 
    signIn,
    signOut
})(HeaderAuth)