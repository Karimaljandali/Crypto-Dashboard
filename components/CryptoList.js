import Coin from '/components/Coin'
import Link from 'next/link'

const CryptoList = ({coins}) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-5 gap-4">
      {coins.map((coin) => (
        <Link href={`/coin/${coin.id}`}>
          <a><Coin data={coin}/></a>
        </Link>
      ))}
    </div>
  )
}

export default CryptoList