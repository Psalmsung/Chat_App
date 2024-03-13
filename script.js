const abuomaSelectorBtn = document.querySelector('#abuoma-selector')
const psalmsungSelectorBtn = document.querySelector('#psalmsung-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const createChatMessageElement = (message) => `
        <div class="message ${message.sender === 'Abuoma' ? 'blue-bg' : 'gray-bg'}">
            <div class="message-sender">${message.sender}</div>
            <div class="message-text">${message.text}</div>
            <div class="message-timestamp">${message.timestamp}</div>
        </div>
        `

        let messageSender = 'Abuoma'

        const updateMessageSender = (name) =>{
            messageSender = name
            chatHeader.innerText = `${messageSender} chatting...`
            chatInput.placeholder = `Type here, ${messageSender}...`

            if(name === 'Abuoma'){
                abuomaSelectorBtn.classList.add('active-person')
                psalmsungSelectorBtn.classList.remove('active-person')
            }
            if(name === 'Psalmsung'){
                psalmsungSelectorBtn.classList.add('active-person')
                abuomaSelectorBtn.classList.remove('active-person')
            }

            chatInput.focus()
        }


        abuomaSelectorBtn.onclick = () => updateMessageSender('Abuoma')
        psalmsungSelectorBtn.onclick = () => updateMessageSender('Psalmsung')

        const sendMessage = (e) => {
            e.preventDefault()

            const timestamp = new Date().toLocaleString('en-Us', {hour: 'numeric', minute: 'numeric',})
            const message = {
                sender: messageSender,
                text: chatInput.value,
                timestamp,
            }

            chatMessages.innerHTML+= createChatMessageElement(message)
            chatInputForm.reset()
            chatMessages.scrollTop = chatMessages.scrollHeight
        }
        chatInputForm.addEventListener('submit', sendMessage)