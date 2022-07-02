import React from 'react'
import Link from 'next/link';


function NftIndex() {
  return (
    <div className='text-white'>
        <h1 className='text-2xl'>NFTs</h1>
            
        {/* <ul className="flex flex-wrap">
        {whaleWallets.map((entry) => (
            <nav className='p-3'>
            <li key={entry.id}>
            <Link 
                    href= {{
                        pathname: "/nfts/[slug]",
                        query: {slug: entry.name}
                    }}
                    >{entry.name}</Link>
            </li>
            </nav>
        )
        )}
        </ul> */}
        </div>
        )

}

export default NftIndex;