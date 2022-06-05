export const VideoContainer = () => {
    return <>
        <video id="videoPlayer" controls width={400}>
            <source src="http://localhost:8000/media" type="video/mp4" />
        </video>
    </>
}