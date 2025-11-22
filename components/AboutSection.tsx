import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src="/images/about-header.jpg"
          alt="David Willis coral sculpture"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
        About David Willis
      </h2>
      <div className="prose prose-lg mx-auto max-w-4xl">
        <p className="text-gray-700 leading-relaxed mb-6">
          David Willis (1938–2020) was an American sculptor and painter whose career spanned five decades and four continents. Born in Greenfield, Massachusetts, Willis began sculpting in 1965 while living in Italy, where he held his first exhibition that same year.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          His work quickly gained recognition across Europe and Asia. He was represented by prestigious galleries including Patton Gallery in Edinburgh, Alwin Gallery in London, and Galerie Heuser Langner in Frankfurt (from 1978). In 1979, the New Britain Museum of American Art acquired one of his marble statues, and his work entered private collections throughout the world.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Willis became renowned for his modern coral sculptures—works that synthesized Eastern and Western aesthetic principles. His 1988 exhibition at the Taipei Fine Arts Museum marked the first public showing of coral statuary in the Republic of China. This was followed by groundbreaking exhibitions in Singapore and Kuala Lumpur in 1989, introducing modern coral sculpture to new audiences across Southeast Asia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Throughout his career, Willis maintained complete personal involvement in every facet of creation—from finding coral on beaches to the final polishing process. He rejected helpers, insisting on intimate connection with each work. From the 1990s until his passing in 2020, he worked daily from his Florida studio, building what his family has preserved as a comprehensive archive of his artistic evolution.
        </p>
      </div>
    </section>
  );
}
