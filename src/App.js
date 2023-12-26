import React, { useState } from "react";
import { Button } from "./components/Button";
import { FriendList } from "./components/FriendList";
import { FormAddFriend } from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";
import { initialFriends } from "./data";

export default function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [listFriend, setListFriend] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend(!showAddFriend);
        setSelectedFriend(null);
    }
    function handleAddFriend(friend) {
        setListFriend((listFriend) => [...listFriend, friend]);
        setShowAddFriend(false);
    }
    function handleSelectedFriend(friend) {
        setSelectedFriend(friend);
        setShowAddFriend(false);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    listFriend={listFriend}
                    onSelectedFriend={handleSelectedFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend
                        listFriend={listFriend}
                        onAddFriend={handleAddFriend}
                    />
                )}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add friends"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill selectedFriend={selectedFriend} />
            )}
        </div>
    );
}
