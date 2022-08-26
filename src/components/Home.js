import React from 'react';
import SongCard from './SongCard';

export default function Home(){
    return (
        <>
            <div className="sample-songs-container container">
                <div className="items-header">
                    <span>Popular Songs</span>
                </div>
                <div className="items-container">
                    {songs.map(song => {
                        return <SongCard song = {song} key = {song.id}/>
                    })}
                </div>
            </div>
            <div className="user-songs-container container">
                <div className="items-header">
                    <span>My Songs</span>
                </div>
                <div className="items-container">
                    {songs.map(song => {
                        return <SongCard song = {song} key = {song.id}/>
                    })}
                </div>
            </div>
        </>
    )
}

let songs = [
    {
        id: 10,
        name: 'Let me down Slowly',
        artist: 'Alec Banjman',
        image: require("../assets/sample.jpg")
    },
]