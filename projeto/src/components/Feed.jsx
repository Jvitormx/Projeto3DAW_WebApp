function Thumb() {
  return (
    <article className="md:shadow overflow-hidden rounded-lg transition-shadow hover:shadow-xl">
  <img
    alt=""
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/88/aa/37/caption.jpg?w=1400&h=1400&s=1"
    className="h-64 w-full object-cover transition duration-500 sm:h-72"
  />

  <div className="bg-white p-3 sm:p-6">

    <a href="#">
     <h3 className="mt-1.5 text-lg font-medium text-gray-900">RJ {'->'} SP</h3>
    </a>

    <p className="mt-1.5 line-clamp-3 text-gray-700">5 horas de viagem</p>
  </div>
</article>
  )
}

function Feed() {
  return (
    <div className="pl-32 pt-32">
    <span className="flex pb-8 items-center">
        <span className="pr-6 text-2xl font-bold">Principais rotas com base em sua localização</span>
      </span>
    <section className="grid grid-cols-1 gap-4 lg:gap-8 md:inline-flex flex flex-nowrap">
      <Thumb/>
      <Thumb/>
      <Thumb/>
    </section>
    </div>
  )
}

export default Feed;