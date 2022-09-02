import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Logo from "../assets/Neftie.png";

// For test purposes
const currentUserName = "X-23"
const contacts = ["Honey Badger", "Surge", "Magik"]

// export default function Contacts({contacts, currentUser}) {
export default function Contacts() {
    // const [currentUserName, setCurrentUserName] = useState(undefined)
    // const [currentSelected, setCurrentSelected] = useState(undefined)

    // useEffect(() => {
    //     if(currentUser) {
    //         setCurrentUserName(currentUser.firstName);
    //     }
    // },[])

    // const changeCurrentChat = (index, contact) => {}

    return (
        <>
            (
                <Container>
                    <div className="brand">
                        {/* <img src={Logo} alt="logo" /> */}
                        <h3>Chat Here!</h3>
                    </div>

                    <div className="contacts">
                        {contacts.map((contact, index) => {
                            return (
                                <div className={contact} key={index}>
                                    <div className="user">
                                        <h3>{contact}</h3>
                                    </div>
                                </div>
                            );
                            })}    
                    </div>

                    <div className="current-user">
                        <div className="user">
                            <h2>{currentUserName}</h2>
                        </div>
                    </div>
                </Container>
            )
        </>
    );
}

const Container = styled.div`
    display: grid;
    // grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        h3 {
            color: white;
            text-transform: uppercase;
        }
    }
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.8rem;
        .contact {
            background-color: #ffffff39;
            min-height: 5rem;
            width: 90%;
        }
    }
`;