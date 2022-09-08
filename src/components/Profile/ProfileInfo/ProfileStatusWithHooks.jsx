import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [edit, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <>
            {!edit &&
                <div>
                    <span onDoubleClick={activateMode} >{status || "No status"}</span>
                </div>
            }
            {edit &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onStatusChange}></input>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;