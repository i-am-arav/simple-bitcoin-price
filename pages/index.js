import React from 'react'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = ({bpi, time}) => {
  return (
      <Layout>
    <div> <h1>Welcome to Bitcoin Prices</h1>
        <p>Check current Bitcoin price </p>
        <Prices bpi={bpi} time={time} />
    </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
    const res = await(await (await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')).json());
    return {
        time:res.time,
        bpi : res.bpi
    };
}

export default Index
