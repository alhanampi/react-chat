import React from 'react'
import { ConversationBody } from './ConversationBody'
import ConversationHeader from './ConversationHeader'
import ConversationInput from './ConversationInput'

const ConversationContainer = () => {
    return (
        <div id="rightSide">
            <ConversationHeader />
            <ConversationBody />
            <ConversationInput />
        </div>
    )
}

export default ConversationContainer
