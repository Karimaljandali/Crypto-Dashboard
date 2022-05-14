const Coin = ({data}) => {
  console.log(data)
  return (
    <main className="bg-slate-900 py-20">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="bg-slate-800 border-2 border-slate-300 text-white rounded-lg h-64 w-full p-5">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col mb-6">
              <div className="flex items-center space-x-2 font-bold">
                <img src={data?.image?.thumb} className alt="" />
                <span className="text-xl">{data?.name}</span>
                <span className="uppercase">({data?.symbol})</span>
              </div>
              <div className="flex items-center space-x-2 font-bold">
                <span className="text-3xl">{data?.market_data?.current_price?.usd}</span>
                <span className={`text-sm ${data?.market_data?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'}`}>{data?.market_data?.price_change_percentage_24h?.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between my-6 py-2 border-b-2 border-slate-600">
                  <span className="text-gray-300 text-md mr-8">Market Cap:</span>
                  <span>{data?.market_data?.market_cap?.usd}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Next.js Server Side Rendering
export async function getServerSideProps({params}) {
  // Fetch data from external API
  const { id } = params;
  console.log(params)
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Coin