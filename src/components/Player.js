import React from 'react'


export default function Player(){
    return (
        <div className = "music-player-container">
            <div className='music-player-image-container'>
                <img src={require('../assets/sample.jpg')}></img>
            </div>
            <div className='music-player-progress-container'>
                <div className='music-player-time-stamps-container'>
                    <div className='current-time-stamp'>
                        <span>00:00</span>
                    </div>
                    <div className='end-time-stamp'>
                        <span>04:00</span>
                    </div>
                </div>
                <div className='music-player-progress-bar-container'>
                    <div className='progress'></div>
                </div>
            </div>
            <div className='music-player-content-container'>
                <div className='music-player-header'>
                    <div className='music-player-song-name-container'>
                        <span>Let me down slowly</span>
                    </div>
                    <div className='music-player-artist-name-container'>
                        <span>Alec Benjman</span>
                    </div>
                </div>
                <div className='music-player-buttons-container'>
                    <div className="player-button-container">
                        <button className='player-button'><img width={40} src={require('../assets/previous.svg')} /></button>
                    </div>
                    <div className="player-button-container">
                        <button className='player-button'><img width={40} src={require('../assets/backward.svg')} /></button>
                    </div>
                    <div className="player-button-container">
                        <button className='player-button filled'><img width={40} src={require('../assets/pause.svg')} /></button>
                    </div>
                    <div className="player-button-container">
                        <button className='player-button'><img width={40} src={require('../assets/forward.svg')} /></button>
                    </div>
                    <div className="player-button-container">
                        <button className='player-button'><img width={40} src={require('../assets/next.svg')} /></button>
                    </div>
                </div>
                <div className='music-player-mute-container'>
                    <button className='player-button'><img width={40} src={require('../assets/volume.svg')} /></button>
                </div>
            </div>
        </div>
    )
}