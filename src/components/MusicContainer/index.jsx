import ReactPlayer from 'react-player';
import {Container} from './style'
import { useState, useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';

export function MusicContainer(){

    const styleReactPlayer = {
        boxSizing: 'border-box',
        boxShadow: '0 0 10px 2px rgba( 0, 0, 0, 0.27 )'
    }
    const url = 'https://youtu.be/5qap5aO4i9A';

    const { userUrls } = useContext(ModalContext);
; 
    return(
        <Container>
            <h1>Music</h1>
            <p>Listen to relaxing music while you work, you can add your music in settings.</p>
            <div className="scopo">
                <ReactPlayer ariaHideApp={false} 
                    url={userUrls.length > 0 ? userUrls : url}
                    playing={true}
                    controls={true}
                    volume="1"
                    width="100%"
                    height="100%"
                    style={styleReactPlayer}
                />
            </div>
        </Container>
    )
}