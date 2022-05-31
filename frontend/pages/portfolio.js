import Head from 'next/head'
// import { useState, useEffect } from 'react'
import Sidebar from '/components/Sidebar'

export default function Portfolio() {

  return (
    <div>
      <Head>
        <title>Crypto Dashboard | Portfolio</title>
        <meta name="description" content="Crypto Dashboard project created by Karim Aljandali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 bg-gradient-to-r from-slate-900 to-cyan-700 animate-gradient-bg bg-massive min-h-screen overflow-hidden">
          <div className="flex">
                <Sidebar />
                <div className="p-20 overflow-y-scroll h-screen flex-grow scrollbar-hide">
                    <h1 className="mx-auto text-center text-xl md:text-5xl text-white mb-8">Portfolio</h1>
                </div>
          </div>
      </main>
    </div>
  )
}
