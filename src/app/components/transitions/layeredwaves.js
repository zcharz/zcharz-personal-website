import Image from 'next/image'
import layered_waves from '@/assets/layered.svg'
import layered_waves_small from '@/assets/layered-small.svg'

export default function LayeredWaves() {
  return (
    <div>
      <Image alt='transition' src={layered_waves}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      hidden lg:block pointer-events-none'/>
      <Image alt='transition_small' src={layered_waves_small}
      className='w-full aspect-auto bg-no-repeat bg-center bg-cover
      lg:hidden pointer-events-none'/>
    </div>
  )
}

// bg start - teal-100
// wave start - cyan-300
// bg end-sky-950

