import { Card, Box, Grid, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import ProfileTop from '../ProfileTop'
import { userDetails } from '../UserDetails'

const Profile = (props) => {
    const [localColor, setLocalColor] = useState(props.userProfileState['profileColor'] ? props.userProfileState['profileColor'] : "#1ABC9C");

    const handleFirstnameChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newFirst = data.get("newFirst")
        localStorage.setItem("firstname", newFirst)
        props.userProfileState['setProfileFirstName'](newFirst)
    }

    const handleLastnameChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newLast = data.get("newLast")
        localStorage.setItem("lastname", newLast)
        props.userProfileState['setProfileLastName'](newLast)
    }

    const handleAvatarColorChange = () => {
        localStorage.setItem("hex_color", localColor)
        props.userProfileState['setProfileColor'](localColor)
    }

    return (
        <Card sx={{ paddingBottom: 2 }}>
            <ProfileTop userProfileState={props.userProfileState} />
            <Grid container display="flex" justifyContent="center" alignItems="flex-start" spacing={4}>
                <Grid item xs={6}>
                    <Grid container justifyContent="center" alignItems='center' flexDirection='column' spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Current name: ${props.userProfileState['profileFirstName']} ${props.userProfileState['profileLastName']}`}
                            </Typography>
                        </Grid>


                        <Box component='form' onSubmit={handleFirstnameChange} sx={{ margin: 2 }}>
                            <Grid item>
                                <TextField required label="enter new firstname" name="newFirst" id="newFirst" variant="filled">Change username</TextField>
                            </Grid>
                            <Button type='submit' variant='contained'>Change firstname</Button>
                        </Box>

                        <Box component='form' onSubmit={handleLastnameChange} sx={{ margin: 2 }}>
                            <Grid item>
                                <TextField required label="enter new lastname" name="newLast" id="newLast" variant="filled">Change username</TextField>
                            </Grid>
                            <Button type='submit' variant='contained'>Change lastname</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center" alignItems='center' flexDirection="column" spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Current Profile Colour: ${props.userProfileState['profileColor']}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <HexColorPicker color={localColor} onChange={setLocalColor} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Color Picker value: ${localColor}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleAvatarColorChange}>set logo color</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    )
}

export default Profile