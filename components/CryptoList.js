import Coin from '/components/Coin'

const CryptoList = ({coins}) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-5 gap-4">
      {coins.map((coin) => (
        <Coin data={coin}/>
      ))}
    </div>
  )
}

export default CryptoList