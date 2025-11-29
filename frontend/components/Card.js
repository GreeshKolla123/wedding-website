import Image from 'next/image';

export default function Card({ image, title, description }) {
  return (
    <div className="bg-white shadow-md p-4">
      <Image src={image} alt={title} width={200} height={200} />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}