import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useAuthDataContext } from '../../Landing/UserAuth'
import { card, fullHeightBody, pageTitle, statsBig, statsSmall, statsSmallHeader, success, visitsNumberContainer } from '../styles'
import Widget from '../Widget'
import { ResponsiveContainer, ComposedChart, AreaChart, LineChart, Line, Area, PieChart, Pie, Cell, YAxis, XAxis } from "recharts";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AdfScannerOutlinedIcon from '@mui/icons-material/AdfScannerOutlined';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { userDetails } from '../UserDetails'

export const Activity = () => {
  const auth = useAuthDataContext()

  return (
    <div>
      <Typography component='h1' fontSize='1.8rem' fontFamily='Montserrat' sx={pageTitle}>
        {/* Temporary, can change to show just name once route added to backend for getting name on login */}
        {'Welcome' + (userDetails.registered ? ' to Envoy, ' : ' back, ') + ((userDetails.firstname && userDetails.lastname) ? `${userDetails.firstname} ${userDetails.lastname}` : `${userDetails.email}`)}
      </Typography>
      <Grid container spacing={5}>
        {/* Montly Earnings */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget title="Monthly Earnings" upperTitle bodyClass={fullHeightBody} className={card} icon={<AttachMoneyIcon fontSize='medium' />}>
            <div style={visitsNumberContainer}>
              <Grid container item alignItems="center">
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap sx={statsBig}>
                    $12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart width={100} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 }]}>
                    <Line type="natural" dataKey="value" stroke={success.backgroundColor} strokeWidth={2} dot={true} />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={4}>
                <Typography color="text" noWrap sx={statsSmallHeader}>
                  Amount
                </Typography>
                <Typography size="md" sx={statsSmall}>860</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" noWrap sx={statsSmallHeader}>
                  Growth Rate
                </Typography>
                <Typography size="md" sx={statsSmall}>3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        {/* Annual Earning */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget title="Annual Earnings" upperTitle bodyClass={fullHeightBody} className={card} icon={<AttachMoneyIcon fontSize='medium' />}>
            <div style={visitsNumberContainer}>
              <Grid container item alignItems="center">
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap sx={statsBig}>
                    $12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart width={100} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 }]}>
                    <Line type="natural" dataKey="value" stroke={success.backgroundColor} strokeWidth={2} dot={true} />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={4}>
                <Typography color="text" noWrap sx={statsSmallHeader}>
                  Amount
                </Typography>
                <Typography size="md" sx={statsSmall}>860</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" noWrap sx={statsSmallHeader}>
                  Growth Rate
                </Typography>
                <Typography size="md" sx={statsSmall}>3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        {/* Invoices Created */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget title="Total Invoices Created" upperTitle bodyClass={fullHeightBody} className={card} icon={<AdfScannerOutlinedIcon fontSize='medium' />}>
            <div style={visitsNumberContainer}>
              <Grid container item alignItems="center">
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart width={100} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 }]}>
                    <Line type="natural" dataKey="value" stroke={success.backgroundColor} strokeWidth={2} dot={true} />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
          </Widget>
        </Grid>
        {/* Invoices Received */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget title="Total Invoices Received" upperTitle bodyClass={fullHeightBody} className={card} icon={<CallReceivedIcon fontSize='medium' />}>
            <div style={visitsNumberContainer}>
              <Grid container item alignItems="center">
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart width={100} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 }]}>
                    <Line type="natural" dataKey="value" stroke={success.backgroundColor} strokeWidth={2} dot={true} />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
          </Widget>
        </Grid>
        {/* Invoices Sent */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget title="Total Invoices Sent" upperTitle bodyClass={fullHeightBody} className={card} icon={<CallMadeIcon fontSize='medium' />}>
            <div style={visitsNumberContainer}>
              <Grid container item alignItems="center">
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart width={100} height={30} data={[{ value: 10 }, { value: 15 }, { value: 10 }, { value: 17 }, { value: 18 }]}>
                    <Line type="natural" dataKey="value" stroke={success.backgroundColor} strokeWidth={2} dot={true} />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </div>
  )
}
