function chatLogger(arr) {

    let chat = [];

    for (i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];

        if (command == 'end') {
            console.log(chat.join(' \n'));
            break;
        }
        if (command == 'Chat') {
            chat.push(tokens[1]);
        } else if(command == 'Delete'){
            let chatToDelete = tokens[1];
            if(!chat.includes(chatToDelete)){
                continue;
            } else {
                let index = chat.indexOf(chatToDelete);
                chat.splice(index, 1);
            }
        } else if (command == 'Edit') {
            let toEdit = tokens[1];
            let toAdd = tokens[2];
            if (!chat.includes(toEdit)) {
                continue;
            } else {
                let indexToEdit = chat.indexOf(toEdit);
                chat[indexToEdit] = toAdd;
            }
        } else if (command == 'Pin') {
            let message = tokens[1];

            if (!chat.includes(message)) {
                continue;
            } else {
                let index = chat.indexOf(message);
                let messageToPin = chat.splice(index, 1);
                chat.push(messageToPin.join());
            }
        } else if (command = 'Spam') {
            for (j = 1; j < tokens.length; j++) {
                chat.push(tokens[j]);
            }
        }
        //console.log(tokens);
    }

}
chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"]);
//chatLogger((["Chat Hello","Delete John","Pin Hi","end"]))
