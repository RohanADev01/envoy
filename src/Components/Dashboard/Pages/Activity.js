import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useAuthDataContext } from '../../Landing/UserAuth'
import {
  card,
  cardHeader,
  fullHeightBody,
  hint,
  pageTitle,
  statsBig,
  statsSmall,
  statsSmallHeader,
  success,
  visitsNumberContainer,
} from '../styles'
import Widget from '../Widget'
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  Line,
  Area,
  YAxis,
  XAxis,
  Tooltip,
} from 'recharts'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AdfScannerOutlinedIcon from '@mui/icons-material/AdfScannerOutlined'
import CallReceivedIcon from '@mui/icons-material/CallReceived'
import CallMadeIcon from '@mui/icons-material/CallMade'

export const Activity = () => {
  const auth = useAuthDataContext()

  // #######################################################################
  // ###### CHANGE TO ACTUAL DATA POINTS FROM API CALL ONCE FINISHED #######
  // #######################################################################

  function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;

    return array.map((item, index) => {
      let randomValue = Math.floor(Math.random() * multiplier + 1);

      while (randomValue <= min || randomValue >= max || (lastValue && randomValue - lastValue > maxDiff)) {
        randomValue = Math.floor(Math.random() * multiplier + 1);
      }

      lastValue = randomValue;

      return { value: randomValue };
    });
  }

  function getMainChartData() {
    var resultArray = [];
    var earnings = getRandomData(30, 1500, 7500, 7500, 1500);

    resultArray.push({
      Earnings: 4000,
    });
    for (let i = 1; i < earnings.length; i++) {
      resultArray.push({
        Earnings: earnings[i].value,
      });
    }

    return resultArray;
  }

  const mainChartData = getMainChartData();

  // #######################################################################

  return (
    <div>
      <Typography
        component='h1'
        fontSize='1.8rem'
        fontFamily='Montserrat'
        sx={pageTitle}
      >
        {/* Temporary, can change to show just name once route added to backend for getting name on login */}
        {auth.firstname === ''
          ? `Welcome ${auth.email}`
          : `Welcome ${auth.firstname}`}
      </Typography>
      <Grid container spacing={5}>
        {/* Today's Earnings */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title="Today's Earnings"
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<AttachMoneyIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    $12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid container direction='row' alignItems='center'>
              {/* <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Amount
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  860
                </Typography>
              </Grid> */}
              <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Growth Rate
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  3.25%
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        {/* Montly Earnings */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title='Monthly Earnings'
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<AttachMoneyIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    $12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 0 },
                      { value: 10 },
                      { value: 0 },
                      { value: 0 },
                      { value: 0 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid container direction='row' alignItems='center'>
              {/* <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Amount
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  860
                </Typography>
              </Grid> */}
              <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Growth Rate
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  3.25%
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        {/* Annual Earning */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title='Annual Earnings'
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<AttachMoneyIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    $12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid container direction='row' alignItems='center'>
              {/* <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Amount
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  860
                </Typography>
              </Grid> */}
              <Grid item xs={4}>
                <Typography color='text' noWrap sx={statsSmallHeader}>
                  Growth Rate
                </Typography>
                <Typography size='md' sx={statsSmall}>
                  3.25%
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        {/* Invoices Created */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title='Total Invoices Created'
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<AdfScannerOutlinedIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                {/* <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid> */}
              </Grid>
            </div>
          </Widget>
        </Grid>
        {/* Invoices Received */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title='Total Invoices Received'
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<CallReceivedIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                {/* <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid> */}
              </Grid>
            </div>
          </Widget>
        </Grid>
        {/* Invoices Sent */}
        <Grid item lg={4} md={6} xs={12}>
          <Widget
            title='Total Invoices Sent'
            upperTitle
            bodyClass={fullHeightBody}
            className={card}
            icon={<CallMadeIcon fontSize='medium' />}
          >
            <div style={visitsNumberContainer}>
              <Grid container item alignItems='center'>
                <Grid item xs={6}>
                  <Typography size='xl' weight='medium' noWrap sx={statsBig}>
                    12
                  </Typography>
                </Grid>
                {/* <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type='natural'
                      dataKey='value'
                      stroke={success.backgroundColor}
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </Grid> */}
              </Grid>
            </div>
          </Widget>
        </Grid>

        {/* GRAPH */}
        <Grid item xs={12}>
          <Widget
            header={
              <div>
                <Typography
                  variant='h5'
                  color='text'
                  sx={cardHeader}
                >
                  Daily Line Chart
                </Typography>
              </div>
            }
          >
            <Typography variant='h5' sx={statsSmallHeader}>{"Earnings ($)"}</Typography>
            <ResponsiveContainer width='100%' minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 3000, 4000, 5000, 7500]}
                  tick={{ fill: hint.color + '80', fontSize: 14 }}
                  stroke={hint.color + '80'}
                  tickLine={true}
                >
                </YAxis>
                <XAxis
                  tickFormatter={(i) => i}
                  tick={{ fill: hint.color + '80', fontSize: 14 }}
                  stroke={hint.color + '80'}
                  tickLine={true}
                />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='Earnings'
                  dot={{
                    stroke: success.backgroundColor,
                    strokeWidth: 2,
                    fill: success.backgroundColorLight,
                  }}
                  fill={success.backgroundColorLight}
                  stroke={success.backgroundColor}
                  strokeWidth={2}
                  activeDot={true}
                />
              </ComposedChart>
            </ResponsiveContainer>
            <Grid container display="flex" justifyContent="center" alignItems="center">
              <Typography variant='h5' sx={statsSmallHeader}>{"Days ago"}</Typography>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </div>
  )
}
