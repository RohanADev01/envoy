import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import {
  card,
  cardHeader,
  error,
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
import {
  get_month_stats,
  get_past_thirty_stats,
  get_today_stats,
  get_total_created,
  get_total_received,
  // get_total_sent,
  get_year_stats,
} from '../ActivityData'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import Loading from '../../../assets/Loading.gif'

export const Activity = (props) => {

  //  Function to get all user stats

  let userData = {}

  const [finishedLoading, setFinishedLoading] = useState(false)

  const retrieve_user_stats_data = async () => {
    let response = ''

    response = await get_total_received
    userData = { ...userData, "total_received": response.data.num_received_inv }

    response = await get_total_created
    userData = { ...userData, "total_created": response.data.num_created_inv }

    response = await get_today_stats
    userData = { ...userData, "day_earns": response.data.day_earns }
    userData = { ...userData, "last_five_days": response.data.last_five_days }

    response = await get_month_stats
    userData = { ...userData, "month_earns": response.data.month_earns }
    userData = { ...userData, "last_five_months": response.data.last_five_months }

    response = await get_year_stats
    userData = { ...userData, "year_earns": response.data.year_earns }
    userData = { ...userData, "last_five_years": response.data.last_five_years }

    response = await get_past_thirty_stats
    userData = { ...userData, "last_thirty_days": response.data.last_thirty_days }

    return userData
  }

  //  Function for getting all chart data

  const mainChartData = []
  const graphDataKey = "Number of invoices handled"
  function getMainChartData(thirtydays_data) {
    console.log(thirtydays_data)
    var resultArray = []

    for (let i = 0; i < thirtydays_data.length; i++) {
      resultArray.push({
        "Number of invoices handled": thirtydays_data[i],
      })
    }

    console.log(resultArray)
    return resultArray
  }

  //  Function for getting graph Y-Axis points

  function get_graph_ticks(data_max) {
    var high, med

    if (data_max < 20) {
      high = Math.ceil(data_max / 2) * 2
      high = (high % 2 == 0) ? high : high + 1
      med = high / 2
    } else if (data_max < 50) {
      high = Math.ceil(data_max / 5) * 5
      high = (high % 2 == 0) ? high : high + 1
      med = high / 2
    } else {
      high = Math.ceil(data_max / 10) * 10
      high = (high % 2 == 0) ? high : high + 1
      med = high / 2
    }

    return [0, med, high]
  }

  // Calling functions to retreive and update state with data

  useEffect(() => {
    setFinishedLoading(false)

    trackPromise(
      retrieve_user_stats_data().then((data) => {
        setFinishedLoading(data)
      })
    )
  }, [])


  const { promiseInProgress } = usePromiseTracker()

  return (
    <div>
      <Typography
        component='h1'
        fontSize='1.8rem'
        fontFamily='Montserrat'
        sx={pageTitle}
      >
        {'Welcome' +
          (localStorage.getItem('registered') ? ' to Envoy, ' : ' back, ') +
          (props.userProfileState['profileFirstName'] &&
            props.userProfileState['profileLastName']
            ? `${props.userProfileState['profileFirstName']} ${props.userProfileState['profileLastName']}`
            : `${props.userProfileState['profileEmail']}`)}
      </Typography>
      {promiseInProgress && (
        <img
          src={Loading}
          style={{ height: '100px', width: '133px' }}
          alt='loading invoices'
        />
      )}
      {!promiseInProgress && finishedLoading && (
        <React.Fragment>
          <Grid container spacing={5}>
            {/* Number of invoices today */}
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
                      <Typography
                        size='xl'
                        weight='medium'
                        noWrap
                        sx={statsBig}
                      >
                        {finishedLoading.day_earns}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <LineChart
                        width={100}
                        height={30}
                        data={[
                          { value: finishedLoading.last_five_days[4] },
                          { value: finishedLoading.last_five_days[3] },
                          { value: finishedLoading.last_five_days[2] },
                          { value: finishedLoading.last_five_days[1] },
                          { value: finishedLoading.last_five_days[0] },
                        ]}
                      >
                        <Line
                          type='natural'
                          dataKey='value'
                          stroke={finishedLoading.last_five_days[0] < finishedLoading.last_five_days[1] ? error.backgroundColor : success.backgroundColor}
                          strokeWidth={2}
                          dot={true}
                        />
                      </LineChart>
                    </Grid>
                  </Grid>
                </div>
              </Widget>
            </Grid>
            {/* Montly Earnings */}
            <Grid item lg={4} md={6} xs={12}>
              <Widget
                title='Number of invoices this month'
                upperTitle
                bodyClass={fullHeightBody}
                className={card}
                icon={<AttachMoneyIcon fontSize='medium' />}
              >
                <div style={visitsNumberContainer}>
                  <Grid container item alignItems='center'>
                    <Grid item xs={6}>
                      <Typography
                        size='xl'
                        weight='medium'
                        noWrap
                        sx={statsBig}
                      >
                        {finishedLoading.month_earns}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <LineChart
                        width={100}
                        height={30}
                        data={[
                          { value: finishedLoading.last_five_months[4] },
                          { value: finishedLoading.last_five_months[3] },
                          { value: finishedLoading.last_five_months[2] },
                          { value: finishedLoading.last_five_months[1] },
                          { value: finishedLoading.last_five_months[0] },
                        ]}
                      >
                        <Line
                          type='natural'
                          dataKey='value'
                          stroke={finishedLoading.last_five_months[0] < finishedLoading.last_five_months[1] ? error.backgroundColor : success.backgroundColor}
                          strokeWidth={2}
                          dot={true}
                        />
                      </LineChart>
                    </Grid>
                  </Grid>
                </div>
              </Widget>
            </Grid>
            {/* Annual Earning */}
            <Grid item lg={4} md={6} xs={12}>
              <Widget
                title='Number of invoices this year'
                upperTitle
                bodyClass={fullHeightBody}
                className={card}
                icon={<AttachMoneyIcon fontSize='medium' />}
              >
                <div style={visitsNumberContainer}>
                  <Grid container item alignItems='center'>
                    <Grid item xs={6}>
                      <Typography
                        size='xl'
                        weight='medium'
                        noWrap
                        sx={statsBig}
                      >
                        {finishedLoading.year_earns}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <LineChart
                        width={100}
                        height={30}
                        data={[
                          { value: finishedLoading.last_five_years[4] },
                          { value: finishedLoading.last_five_years[3] },
                          { value: finishedLoading.last_five_years[2] },
                          { value: finishedLoading.last_five_years[1] },
                          { value: finishedLoading.last_five_years[0] },
                        ]}
                      >
                        <Line
                          type='natural'
                          dataKey='value'
                          stroke={finishedLoading.last_five_years[0] < finishedLoading.last_five_years[1] ? error.backgroundColor : success.backgroundColor}
                          strokeWidth={2}
                          dot={true}
                        />
                      </LineChart>
                    </Grid>
                  </Grid>
                </div>
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
                      <Typography
                        size='xl'
                        weight='medium'
                        noWrap
                        sx={statsBig}
                      >
                        {finishedLoading.total_created}
                      </Typography>
                    </Grid>
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
                      <Typography
                        size='xl'
                        weight='medium'
                        noWrap
                        sx={statsBig}
                      >
                        {finishedLoading.total_received}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Widget>
            </Grid>
            {/* Invoices Sent */}

            {/* GRAPH */}
            <Grid item xs={12}>
              <Widget
                header={
                  <div>
                    <Typography variant='h5' color='text' sx={cardHeader}>
                      Daily Line Chart
                    </Typography>
                  </div>
                }
              >
                <Typography variant='h5' sx={statsSmallHeader}>
                  {`${graphDataKey}`}
                </Typography>
                <ResponsiveContainer width='100%' minWidth={500} height={350}>
                  <ComposedChart
                    margin={{ top: 0, right: -15, bottom: 0 }}
                    data={getMainChartData(finishedLoading.last_thirty_days)}
                  >
                    <YAxis
                      // ticks={[0, 5, 10]}
                      ticks={get_graph_ticks(Math.max(...finishedLoading.last_thirty_days))}
                      tick={{ fill: hint.color + '80', fontSize: 14 }}
                      stroke={hint.color + '80'}
                      tickLine={true}
                    ></YAxis>
                    <XAxis
                      tickFormatter={(i) => i}
                      tick={{ fill: hint.color + '80', fontSize: 14 }}
                      stroke={hint.color + '80'}
                      tickLine={true}
                    />
                    <Tooltip />
                    <Area
                      type='monotone'
                      dataKey={graphDataKey}
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
                <Grid
                  container
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Typography variant='h5' sx={statsSmallHeader}>
                    {'Days ago'}
                  </Typography>
                </Grid>
              </Widget>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </div>
  )
}
