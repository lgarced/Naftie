import React, {useState} from 'react';
import io from "socket.io-client";
import ChatBox from "./ChatBox";
import "../assets/chat.css";

const socket = io.connect("http://localhost:3001")

export default function ChatStart() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room)
            setShowChat(true);
        }
    }

    return (
        <div className="Chat">
            {!showChat ? (
        <div className="joinChatContainer">
        <h3>Join Chat</h3>
        <input type="text" placeholder='User' onChange={(event) => setUsername(event.target.value)}/>
        <input type="text" placeholder='Room' onChange={(event) => setRoom(event.target.value)}/>
        <button onClick={joinRoom}>Join</button>
        </div>
            )
        : (
        <ChatBox socket={socket} username={username} room={room} />
        )}
    </div>
    )
}

