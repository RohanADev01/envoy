import { Card, Box, Grid, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import ProfileTop from '../ProfileTop'
import { userDetails } from '../UserDetails'

const Profile = (props) => {
    const [localColor, setLocalColor] = useState(userDetails.hex_colour ? userDetails.hex_colour : "#1ABC9C");

    const handleAvatarColorChange = () => {
        localStorage.setItem("hex_color", localColor)
        props.profileColorState['setProfileColor'](localColor)
    }

    return (
        <Card>
            <ProfileTop profileColorState={props.profileColorState} />
            <Grid container display="flex" justifyContent="center" alignItems="flex-start" spacing={4}>
                <Grid item xs={6}>
                    <Grid container justifyContent="center" alignItems='center' flexDirection='column' spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Firstname: ${userDetails.firstname}`}
                            </Typography>
                        </Grid>
                        <Button>Edit firstname</Button>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Firstname: ${userDetails.lastname}`}
                            </Typography>
                            <TextField>Change username</TextField>
                        </Grid>
                        <Button>Edit lastname</Button>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center" alignItems='center' flexDirection="column" spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant='h5'>
                                {`Profile Colour: ${userDetails.hex_colour}`}
                            </Typography>
                            <HexColorPicker color={localColor} onChange={setLocalColor} />
                            <Typography variant='h5'>
                                {`Choosing ${localColor}`}
                            </Typography>
                            <Button onClick={handleAvatarColorChange}>set logo color</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Profile