import React from 'react'

const ConversationInput = () => {
    return (
        <div className="messageBox">
            <form className="formBox">
                <input type="text" className="newMessage" placeholder="Type your message..." />
                <button type="submit" className="sendMessage">SEND</button>
            </form>
        </div>
    )
}

export default ConversationInput
