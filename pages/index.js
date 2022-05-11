import Head from 'next/head'
import { useState, useEffect } from 'react'
import CryptoList from '/components/CryptoList'

export default function Home() {

  const [coinData, setCoinData] = useState([])

  useEffect(() => {
    if(coinData.length === 0) {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setCoinData(res)
      })
      .catch(err => console.log(err))
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Crypto Dashboard | Karim Aljandali</title>
        <meta name="description" content="Crypto Dashboard project created by Karim Aljandali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 py-20">
        <CryptoList coins={coinData} />
      </main>
    </div>
  )
}
