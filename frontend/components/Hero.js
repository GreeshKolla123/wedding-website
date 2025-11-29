import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-hero bg-cover bg-center h-screen">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-5xl font-bold text-white">Wedding Website</h1>
        <p className="text-2xl text-white">Welcome to our wedding website!</p>
      </div>
    </section>
  );
}