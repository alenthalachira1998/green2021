// import React, { useState, useEffect } from "react";
// import useSound from 'use-sound';

// function Sound() {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const audioRef = React.useRef(new Audio('../images/1.mp3'));
//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.loop = true;
//       audioRef.current.currentTime = 0;
//       audioRef.current.play();
//     } else {
//       audioRef.current.loop = false;
//       audioRef.current.currentTime = 0;
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div className="Asoundzx">
//       <button onClick={() => setIsPlaying((oldState) => !oldState)}>
//         {isPlaying?'mute':'unmute'}
//       </button>
//     </div>
//   );
// }

// export default Sound;
// import useSound from 'use-sound';
// export default function Sound() {
//   const soundUrl = '../images/1.mp3';

//   const [play, { stop, isPlaying }] = useSound(soundUrl);

//   return (
//     <button
//       active={isPlaying}
//       size={60}
//       iconColor="var(--color-background)"
//       idleBackgroundColor="var(--color-text)"
//       activeBackgroundColor="var(--color-primary)"
//       play={play}
//       stop={stop}
//     >button|</button>
//   );
// }
// import React, { useState,useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import useSound from "use-sound";


// const Sound = () => {
//   const [isRunning, setIsRunning] = useState(true);
//   const [checked, setChecked] = useState(false);
//   const [count, setCount] = useState(0);
//   const [play] = useSound('../images/1.mp3', { volume: 0.2 });
// useEffect(() => {
//   if (checked) {
//     play();
//   }

// }, []);
      
//   const reset = () => {
//     setIsRunning(false);
//   };

//   const toggle = () => {
//     setChecked(!checked);
//   };

//   return (
//     <nav className="appbar">
//       <div className="toggle">
//         <checkBox handleChange={toggle} checked={checked} />
//       </div>
//       <span className="notification">
//         <FontAwesomeIcon icon={faBell} onClick={() => reset()} />
//         {!!count && <span className="badge">{count}</span>}
//       </span>
//     </nav>
//   );
// };
// export default Sound;