import ecuadorVideo from "../assets/Ecuador-app-2.mp4";
import barVideo from "../assets/bartool-app.mp4";
import horoscopeImg from "../assets/horoscope.png";
import revivalVid from "../assets/revival-video.mp4";

const projectData = [
    {
        id: 4,
        name: "Revival 1863",
        description: "I decided to re-build the website for the bar that I work at in pure CSS. My goal was to practice Flexbox and apply some new animations that I had learned.",
        gitUrl: 'https://github.com/LucaLam/revival-site',
        projectUrl: null ,
        video: revivalVid
    },
    {
    id: 3,
    name: "Ecuador Tourism App",
    description: "This website was inspired by a project that our hack-a-thon group failed at during my course. I decided to rebuild it using Ecuador and highlighting touristic destinations for each province.",
    gitUrl: 'https://github.com/LucaLam/ecuador',
    projectUrl: 'https://zealous-einstein-eca514.netlify.com' ,
    video: ecuadorVideo
},
{
    id: 2,
    name: "BarTool App",
    description: "This app was my final project for my course. I targeted a real life problem of being a bartender - people ordering off the menu, and created an app that solves that problem. The app is intended to be a mobile app and I plan on re-building it in React Native. The app access code is 123.",
    gitUrl: 'https://github.com/LucaLam/BarTool-app',
    projectUrl: 'https://bartool.netlify.com/',
    video: barVideo
},
{
    id: 1,
    name: "Horoscope App",
    description: "This was a project my partner and I built for a 24 hour hack-a-thon held during my course. We wanted to build something light-hearted and fun and we decided to build a horoscope compatibility app.",
    gitUrl: 'https://github.com/yukikishimoto/ispywithmygemini',
    projectUrl: null,
    video: null,
    image: horoscopeImg
}
]

export default projectData