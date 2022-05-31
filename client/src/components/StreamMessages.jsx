import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { io } from "socket.io-client";

class StreamMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            //chatMessages: []
        };
    }

    componentDidMount() {
        // Change the IP address when going on production
        this.socket = io("http://127.0.0.1:3000");
        /*this.socket.on("chat message", msg => {
          this.setState({ chatMessages: [...this.state.chatMessages, msg]   
            });
        });*/
    }

    submitChatMessage() {
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({ chatMessage: "" });
    }

    render() {
        return (
            <View style={{  flex: 1}}>
                <TextInput 
                    style={{ height: 40, borderWidth: 2 }}
                    autoCorrect={false}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.submitChatMessage()}
                    onChangeText={chatMessage => {
                        this.setState({chatMessage});
                    }}
                />
            </View>
        );
    }
}

export default StreamMessages;