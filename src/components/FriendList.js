import React from "react";
import { Friend } from "./Friend";

export function FriendList({ listFriend, onSelectedFriend, selectedFriend }) {
    return (
        <ul>
            {listFriend.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelectedFriend={onSelectedFriend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}
