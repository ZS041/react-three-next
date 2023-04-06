import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Clone = dynamic(() => import('@/components/canvas/Clone'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <div className='absolute inset-x-0 bottom-20 flex flex-col items-center justify-end'>
      <button className='flex flex-col items-center justify-center rounded-full border-2 border-[#FF6027]  py-4 px-8 text-3xl font-medium'>
        Start Your Journey
      </button>
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Clone position-y={-1.5} rotation-x={1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
