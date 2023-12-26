import React from "react";
import { Friend } from "./Friend";

export function FriendList({ listFriend }) {
    return (
        <ul>
            {listFriend.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
}
