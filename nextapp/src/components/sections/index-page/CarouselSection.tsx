/* eslint-disable @next/next/no-img-element */
export default function CarouselSection() {
  return (
    <div className="relative isolate overflow-hidden bg-dark py-24 sm:py-32 shadow">
      <img src="/mentoring.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center brightness-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Dedicated mentors</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
