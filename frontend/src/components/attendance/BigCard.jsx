import styles from "../../styles/BigCard.module.css"
import SmallCalendarIcon from "../../assets/small-calendar.svg?react"
import EmailIcon from "../../assets/email.svg?react"
import ClockIcon from "../../assets/clock.svg?react"

function BigCard({ session }) {
    if (!session || !session.attendees) {
        return (
            <div className={`${styles.bigCard} ${styles.empty}`}>
                <p className="grey-text">No attendees for this session</p>
            </div>
        );
    }

    return (
        <div className={styles.bigCard}>
            <div className={styles.heading}>
                <div className={styles.sessionName}>
                    <p>{session.eventName + " - Session " + session.id}</p>
                </div>
                <div className={styles.sessionDetails}>
                    <div className={styles.sessionDate}>
                        <SmallCalendarIcon />
                        <span className="grey-text">{session.date}</span>
                    </div>
                    <div className={styles.sessionTime}>
                        <ClockIcon />
                        <span className="grey-text">{session.time}</span>
                    </div>
                    <span className={`${styles.status} ${session.status === "OPEN" ? `${styles.open}` : `${styles.closed}`}`}>
                                    {session.status}
                    </span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Attendee</th>
                        <th>Email</th>
                        <th className={styles.hide}>Check-in time</th>
                    </tr>
                </thead>
                <tbody>
                    {session.attendees.map((participant) => (
                        <tr key={participant.id} className={styles.attendee}>
                            <td>
                                <div className={styles.attendeeCol}>
                                    <div id="avatar" className={styles.profileIcon}>{participant.name.charAt(0)}</div>
                                    <p>{participant.name}</p>
                                </div>
                            </td>
                            <td>
                                <div className={styles.attendeeCol}>
                                    <EmailIcon className={styles.hide}/>
                                    <p className="grey-text">{participant.email}</p>
                                </div>
                            </td>
                            <td>
                                <div className={styles.attendeeCol}>
                                    <ClockIcon className={styles.hide}/>
                                    <p className={`${styles.hide} grey-text email`}>{participant.checkIn}</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BigCard