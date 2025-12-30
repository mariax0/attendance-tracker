import { useState } from "react";
import "../styles/RoleTab.css"

function RoleTab({ selectedRole, onChangeRole }) {
    return (
        <div className="role-tab">
            <div 
                className={`tab ${selectedRole === "participant" ? "active" : ""}`}
                onClick={() => onChangeRole("participant")}
            >
                Participant
            </div>
            <div 
                className={`tab ${selectedRole === "host" ? "active" : ""}`}
                onClick={() => onChangeRole("host")}
            >
                Host
            </div>
        </div>
    )
}

export default RoleTab