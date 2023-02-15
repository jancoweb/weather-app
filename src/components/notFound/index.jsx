import notFound from '../../assets/notfound.png'

export default function NotFound() {
  return (
    <div className='not-found'>
      <img src={notFound} alt="" />
      <h1>Oooops! Location not found</h1>
    </div>
  )
}