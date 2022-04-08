import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { trackPromise } from 'react-promise-tracker'
import { useAuthDataContext } from '../UserAuth'

import LogoDark from '../../../assets/LogoDark.svg'

import axios from 'axios'
import {
  Card,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
} from '@mui/material'
import { FailAlert, SuccessAlert, LoadingIndicatorLogin } from '../Constants'
import { backend_base_url } from '../../../Constants'
import { backgroundDivLogin, boxFlex, cardDimensions, logoDarkDimensions } from '../styles'

function Login(props) {
  const navigate = useNavigate()
  const handleNewUser = () => {
    navigate('/signup')
  }

  const [alertFail, setFailAlert] = useState(false)
  const [alertSuccess, setSuccessAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')

  const auth = useAuthDataContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    resetAlerts()

    const data = new FormData(event.currentTarget)

    const email = data.get('email')
    const password = data.get('password')

    let body = { email, password }

    const login_url = backend_base_url + 'login'

    trackPromise(
      axios({
        method: 'POST',
        url: login_url,
        data: body,
      })
        .then((data) => {
          let msg = data.data.msg
          let token = data.data.token

          setAlertContent(msg)

          if (msg === `${email} is now logged in`) {
            setSuccessAlert(true)
            setTimeout(function () {
              console.log('Login Successful')
              // Persist user session and redirect to user dashboard here
              auth.login(token, email)
              navigate('/dashboard')
            }, 1000)
          } else {
            setFailAlert(true)
          }
        })
        .catch((error) => {
          console.log(error)
          setAlertContent(
            'An unknown error occured, please try again another time.'
          )
          setFailAlert(true)
        })
    )
  }

  const resetAlerts = (event) => {
    setFailAlert(false)
  }

  return (
    <Grid
      container
      direction='row'
      flexGrow={1}
      spacing={0}
      alignItems='center'
      justifyContent='center'
    >
      <div style={backgroundDivLogin}>
        <Card style={cardDimensions}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Container component='main' maxWidth='xs'>
              <img
                style={logoDarkDimensions}
                src={LogoDark}
                alt='Landing page logo'
              />
            </Container>

            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Typography
                component='h1'
                variant='h5'
                fontFamily='Montserrat'
                fontWeight='700'
                alignItems='flex-start'
                marginBottom='10px'
              >
                Login
              </Typography>
              <Box sx={boxFlex}>
                <Box
                  component='form'
                  onChange={resetAlerts}
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='new-password'
                      />
                    </Grid>
                  </Grid>
                  <FailAlert
                    alertFail={alertFail}
                    alertContent={alertContent}
                  />
                  <SuccessAlert
                    alertSuccess={alertSuccess}
                    alertContent={alertContent}
                  />
                  <LoadingIndicatorLogin
                    handleNewUser={handleNewUser}
                    registered={alertSuccess}
                  />
                </Box>
              </Box>
            </Container>
          </Grid>
        </Card>
      </div>
    </Grid>
  )
}

export default Login
