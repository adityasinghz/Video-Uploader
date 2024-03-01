import { Grid, Paper, Box, Card, CardContent, Typography, CardActions, Button, Chip, Avatar } from '@mui/material';
import '../css/style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    function handleChange() {
        if (!email || !password) {
            setFormError('Please fill in all fields.');
            return;
        }
        navigate("/home");
    }
    return (
        <div className="wraper">
            <div className="div-1">
                <Grid container sx={{ height: '100%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={12}><Typography variant='h2' sx={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Video Uploader</Typography></Grid>
                    <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={3} md={3}><a href="https://github.com/adityasinghz" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon sx={{ color: 'white' }} />
                        </a></Grid>
                        <Grid item xs={3} md={3}><a href="https://twitter.com/mr_adisingh" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon sx={{ color: 'white' }} />
                        </a></Grid>
                        <Grid item xs={3} md={3}><a href="https://www.linkedin.com/in/adityasinghz/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx={{ color: 'white' }} />
                        </a></Grid>
                        <Grid item xs={3} md={3}><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                            <ChatBubbleIcon sx={{ color: 'white' }} />
                        </a></Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="div-2">
                <Grid container sx={{ padding: 20 }}>
                    <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant="h6" component="div">
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant="h6" component="div">
                            Sign in to your account
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ padding: 1, display: 'flex', justifyContent: 'left' }}>
                        <Chip
                            avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GvrYMv2T2O5pjVp8I67oT-lvgYHvBB5pcVBtztYtpw&s" />}
                            label="Sign in with Google"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ padding: 1, display: 'flex', justifyContent: 'left' }}>
                        <Chip
                            avatar={<Avatar alt="Natacha" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png" />}
                            label="Sign in with Apple"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Card sx={{ height: '100%', width: '80%' }}>
                            <CardContent>
                                <form>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} md={12}>
                                            <Typography sx={{ display: 'flex', justifyContent: 'left' }}>Email Address</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <input className='input' type="email" placeholder="Email" required value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography sx={{ display: 'flex', justifyContent: 'left' }} >Password</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <input className='input' type="password" placeholder="Password" required value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'left', marginLeft: -1.5, marginTop: -1 }}>
                                                <Button size="small">Forget Password?</Button>
                                            </CardActions>
                                        </Grid>
                                        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                            <Button onClick={handleChange} sx={{ width: "88%", borderRadius: "8px" }} variant="contained">Sign In</Button>
                                        </Grid>
                                    </Grid>
                                    {formError && (
                                        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'left', color: 'red' }}>
                                            <Typography>{formError}</Typography>
                                        </Grid>
                                    )}
                                </form>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: -8 }}>
                        <Typography>Don't have an account?{' '}
                            <span style={{ color: 'blue', cursor: 'pointer' }}>Register here</span></Typography>
                    </Grid>
                </Grid>

            </div>
        </div>

    );
}

export default LoginPage;