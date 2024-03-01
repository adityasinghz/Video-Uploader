import { Box } from '@mui/material';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
const VideoPlayer = ({ videoUrl, setVideoUrl }) => {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const videoUrl = URL.createObjectURL(file);
        setVideoUrl(videoUrl);
    };

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Card component="li" sx={{ minWidth: '100%', minHeight: '350px' }}>
                <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        controls // Add controls to enable play/pause functionality
                        style={{ height: '490px' }}
                    >
                        <source
                            src={videoUrl} // Use the URL generated from the uploaded file
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
            </Card>
        </Box>
    );
};

export default VideoPlayer;