export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
        About the Artist
      </h2>
      <div className="prose prose-lg mx-auto">
        <p className="text-gray-700 leading-relaxed mb-6">
          David Willis is a contemporary artist whose work explores the intersection of
          traditional techniques and modern expression. With over two decades of experience,
          his pieces have been exhibited internationally.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Through bold colors and thoughtful composition, David creates immersive visual
          experiences that challenge viewers to see the world from new perspectives.
        </p>
      </div>
    </section>
  );
}
