import { useContext } from 'react';
import { useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';



export function Profile() {
    const { level } = useContext(ChallengesContext);
    let name = 'Ted Martins';
    let username = 'tedmartins';

    useEffect(() => {
        const img = document.getElementById('user');
                img.setAttribute('src', 'http://github.com/' + username + '.png');
        }, [])

    return(
        <div className={styles.profileContainer}>
            <img id="user" src="" alt={name}/>
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}