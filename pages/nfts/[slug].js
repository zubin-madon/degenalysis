import {useRouter} from 'next/router';

function Slug () {
    const router = useRouter();
    const {slug} = router.query;
    
  return (
    <div className='text-white'>
    <h1>Title is {slug}&apos;s Wallet</h1>
    <p>
    
    </p>
    <p> 
    Address:
    
    </p>
    </div>
    
  )
}

export default Slug;