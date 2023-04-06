import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Clone = dynamic(() => import('@/components/canvas/Clone'), { ssr: false })

export default function Page(props) {
  return <div className=''>CYBER LABS</div>
}

Page.canvas = (props) => <Clone position-y={-1.5} rotation-x={1} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
