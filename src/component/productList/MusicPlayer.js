import { useEffect, useState } from "react";

const useAudio = url => {
    const [song] = useState(new Audio(url));
    const [play, setPlay] = useState(false); // 초기 상태를 false로 설정하여 자동 재생하지 않음

    const toggle = () => setPlay(!play);

    useEffect(() => {
        play ? song.play() : song.pause();
    }, [play, song]);

    useEffect(() => {
        const handleEnded = () => setPlay(false);
        song.addEventListener('ended', handleEnded);
        return () => {
            song.removeEventListener('ended', handleEnded);
        };
    }, [song]);

    return [play, toggle];
};

const MusicPlayer = () => {
    const [playMusic, setMusic] = useAudio(process.env.PUBLIC_URL + "/1234.mp3");

    return (
        <div>
            <button 
                style={{
                    border: '2px solid black', 
                    borderRadius: '13px', 
                    backgroundColor: 'skyblue', 
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }} 
                onClick={setMusic}
            >
                {playMusic ? "Pause" : "Play"}
            </button>
        </div>
    );
}

export default MusicPlayer;
