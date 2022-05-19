import RowInfo from "../../components/RowInfo";
import RowData from "/components/RowData";
import ConvertCurrency from '/utils/ConvertCurrency'

const urlRegex= /.+:\/\//i

const Coin = ({data}) => {
  return (
    <main className="bg-slate-900 py-20 flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient-bg bg-massive">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="bg-slate-800 border-2 border-slate-300 text-white rounded-lg min-h-64 w-full p-5">
          <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 ">
            {/* Left Main Content START */}
            <section className="flex flex-col mb-6 col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 font-bold">
                <img src={data?.image?.thumb} className alt="" />
                <span className="text-3xl">{data?.name}</span>
                <span className="uppercase text-xl">({data?.symbol})</span>
              </div>
              <div className="flex items-center space-x-2 font-bold mb-5">
                <span className="text-4xl md:text-6xl">{ConvertCurrency(data?.market_data?.current_price?.usd)}</span>
                <span className={`text-sm ${data?.market_data?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'}`}>{data?.market_data?.price_change_percentage_24h?.toFixed(2)}%</span>
              </div>
              {/* Market Data */}
              <h2 className="text-2xl">Market Data: </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <RowData name="Market Cap" value={data?.market_data?.market_cap?.usd} />
                <RowData name="Market Cap Rank" value={data?.market_data?.market_cap_rank} currency={false} />
                <RowData name="All Time Low" value={data?.market_data?.atl?.usd} />
                <RowData name="All Time High" value={data?.market_data?.ath?.usd} />
                <RowData name="Total Volume" value={data?.market_data?.total_volume?.usd} />
                <RowData name="Circulating Supply" value={data?.market_data?.circulating_supply} currency={false} />
                <RowData name="Total Supply" value={data?.market_data?.total_supply} currency={false} />
                <RowData name="Max Supply" value={data?.market_data?.max_supply} currency={false} />
                <RowData name="Fully Diluted Valuation" value={data?.market_data?.fully_diluted_valuation?.usd} />
              </div>
            </section>
            {/* Left Main Content END */}
            {/* Right Main Content START */}
            <aside className="col-span-1 lg:px-2">
              <h2 className="text-2xl">Info</h2>
              <div className="space-y-2 my-2">
                <RowInfo title="Website" link={data?.links?.homepage[0]} tag={data?.links?.homepage[0].replace(urlRegex, '')}/>
                <RowInfo title="Explorer" link={data?.links?.blockchain_site[0]} tag={data?.links?.blockchain_site[0].replace(urlRegex, '')}/>
                <RowInfo title="Source Code" link={data?.links?.repos_url.github[0]} tag="Github"/>
              </div>
            </aside>
            {/* Right Main Content END */}
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