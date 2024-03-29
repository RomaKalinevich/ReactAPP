import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       followingInProgress={props.followingInProgress}
                                       followUser={props.followUser}
                                       unfollow={props.unfollow}/>)
        }
    </div>
}

export default Users;