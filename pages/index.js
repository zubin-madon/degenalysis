import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCustomMoralisContext } from '../context';

export default function Home() {
  const moralisCtx = useCustomMoralisContext();
  console.log(moralisCtx.user)
 
  return (
    <div className='text-3xl text-white font-mono bg-slate-900'>
    <p className='text-lg'>{moralisCtx.isAuthenticated?"Welcome "+moralisCtx.user.get("ethAddress"):"Please Login!"}</p>
    </div>
  )
}
