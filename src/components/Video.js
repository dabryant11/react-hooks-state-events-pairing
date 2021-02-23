// import video from "../data/video.js";



function Video({embedUrl, title }) { 
        return (

            <iframe
            width="919"
            height="525"
            
            src={embedUrl}
            frameborder="0"
            allowfullscreen
            title={title}
            />
        )
}


export default Video