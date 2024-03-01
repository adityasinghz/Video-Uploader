
import React, { useState, useEffect } from 'react';
import Actionbar from './Appbar';
import { DataGrid } from '@mui/x-data-grid';
import VideoPlayer from './VideoPlayer';
import { Grid, TextField, Button, InputLabel, MenuItem, FormControl, Select, LinearProgress, Box, Card, CardContent, Typography, Paper } from '@mui/material';





const UploadFile = () => {
    const [videoName, setVideoName] = useState('');
    const [id, setID] = useState(0);
    const [videoDetails, setVideoDetails] = useState([]);
    const [progress, setProgress] = useState(0);
    const [url, setVideoUrl] = useState(null);
    const [type, setType] = useState('');
    const [file, setFile] = useState(null);
    // Save data to localStorage whenever videos change
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (videoName === '' || type === '') {
            // Validation: Ensure all fields are filled
            alert('Please fill in all fields');
            return;
        }
        if (file) {
            setFile(file);
            setProgress((oldProgress) => {
                const diff = Math.random() * 10000;
                return Math.min(oldProgress + diff, 100);
            });
            if ((file.size / 1048576).toFixed(2) > 200) {
                alert("Video Size should be less than 200mb");
                return;
            }
        }
        else {
            alert("Submit a file");
            return;
        }
        // Create a new video object
        const newVideo = {
            id: id,
            name: videoName,
            type: type,
            fileName: file.name,
            fileSize: (file.size / 1048576).toFixed(2),
            videoUrl: URL.createObjectURL(file)
        };

        // Update the video details array with the new video
        setID(prevCount => prevCount + 1);
        setVideoDetails([...videoDetails, newVideo]);
        console.log("videoDetails ", videoDetails);
        alert('Uploaded Successfully');
        // Reset input fields after upload


    };
    const handleRemoveFile = () => {
        setProgress(0);
        setFile(null);
        setVideoName('');
        setType('');
        // Additionally, if you're using a ref for the input, you need to reset it as well
    };

    const handlePlay = (id) => {
        // Add logic to play the video
        const videoToPlay = (videoDetails || []).find(video => video.id === id);
        if (videoToPlay && videoToPlay.videoUrl) {
            setVideoUrl(videoToPlay.videoUrl);
        }
        // Perform the logic to play the video (e.g., open a modal with the video player)
        console.log('Playing video:', videoToPlay.videoUrl);
    };

    const handleDelete = (id) => {
        // Add logic to delete the video
        const updatedVideos = (videoDetails || []).filter(video => video.id !== id);
        setVideoDetails(updatedVideos);
    };
    const handleClose = (id) => {
        // Add logic to delete the video
        const videoToPlay = (videoDetails || []).find(video => video.id === id);
        if (videoToPlay && videoToPlay.videoUrl) {
            setVideoUrl(null);
        }
    };
    const handleChange = (event) => {
        setType(event.target.value);
    };
    const columns = [
        { field: 'name', headerName: 'Video Name', flex: 1 },
        { field: 'type', headerName: 'Video Type', flex: 1 },
        { field: 'fileName', headerName: 'File Name', flex: 1 },
        { field: 'fileSize', headerName: 'File Size(MB)', flex: 1 },
        {
            field: 'options',
            headerName: 'Options',
            flex: 1,
            renderCell: (params) => (
                <div>
                    <Button onClick={() => handlePlay(params.row.id)}>Play</Button>
                    <Button onClick={() => handleClose(params.row.id)}>Close</Button>
                    <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>

                </div>
            )
        }
    ];

    return (

        <Grid container spacing={6}>
            <Actionbar
            />
            <Grid container spacing={6} sx={{ marginTop: 0 }}>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        id="video-name"
                        label="Video Name"
                        variant="outlined"
                        value={videoName}
                        onChange={(e) => setVideoName(e.target.value)}
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}> <FormControl sx={{ minWidth: 220 }} size="large">
                    <InputLabel id="select-small-label">Type</InputLabel>
                    <Select
                        labelId="select-small-label"
                        id="select-small"
                        value={type}
                        label="Type"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value={"Poetic"}>Poetic</MenuItem>
                        <MenuItem value={"Expository"}>Expository</MenuItem>
                        <MenuItem value={"Observational"}>Observational</MenuItem>
                        <MenuItem value={"Participatory"}>Participatory</MenuItem>
                        <MenuItem value={"Performative"}>Performative</MenuItem>
                        <MenuItem value={"Reflexive"}>Reflexive</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {
                            !file ? (
                                <Button variant="outlined" color="primary" sx={{ width: '400px' }}>
                                    <label style={{ backgroundColor: 'transparent', cursor: 'pointer' }}>
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={handleUpload}
                                            style={{ display: 'none', width: '100%', height: '100%' }}
                                        />
                                        Choose File
                                    </label>
                                </Button>
                            ) : (

                                <Button onClick={handleRemoveFile} variant="outlined" color="primary" sx={{ width: '400px' }}>Remove File</Button>

                            )
                        }

                        <LinearProgress sx={{ backgroundColor: 'white', color: 'green', width: '400px', height: '20px', mt: 0 }} variant="determinate" value={progress} />
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={12} lg={12} xs={12}>
                <>
                    {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}
                    {(videoDetails || []).length ? (
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ lineHeight: '2', color: 'black' }}>
                                    Upload Table {"\n"}
                                </Typography>

                                <Box sx={{ width: '100%' }}>
                                    <DataGrid
                                        rows={videoDetails}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5, 10, 20]}
                                        autoHeight
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    ) : <Typography variant="h5">No video uploaded</Typography>}
                </>

            </Grid>
            <Grid item md={12} lg={12} xs={12} sx={{ marginLeft: 20, marginRight: 20 }}>
                {url && (videoDetails || []).length ? (<VideoPlayer videoUrl={url} setVideoUrl={setVideoUrl} />) : <></>}
            </Grid>
            {/* Button to save video details to file */}

        </Grid>

    );
};

export default UploadFile;
