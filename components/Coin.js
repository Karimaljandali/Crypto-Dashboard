import ConvertCurrency from '/utils/ConvertCurrency'

const Coin = ({data}) => {
  return (
    <div className={`p-4 space-y-2 bg-slate-800  border-2 hover:cursor-pointer hover:bg-slate-700 focus:bg-slate-700 text-white rounded-lg text-center ${data?.price_change_percentage_24h > 0 ? 'border-green-500' : 'border-red-600' }`}>
      <img className="w-10 mx-auto" src={data?.image} alt="" />
      <h2 className="text-xl">{data?.name}</h2>
      <p>Current Price: {ConvertCurrency(data?.current_price)}</p>
      <p>24h % Change: <span className={`${data?.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-600' }`}>{data?.price_change_percentage_24h.toFixed(2)}%</span></p>
    </div>
  )
}

export default Coin