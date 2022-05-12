const Coin = ({data}) => {
  console.log(data)
  return (
    <main className="bg-slate-900 py-20">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="bg-slate-800 border-2 border-slate-300 rounded-lg h-64 w-full">
          
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