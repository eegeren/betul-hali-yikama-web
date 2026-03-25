import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

const galleryImages = [
  {
    src: "/gallery/haliyikama1.jpeg",
    alt: "Yikanmis hali ornek gorsel 1",
  },
  {
    src: "/gallery/haliyikama2.jpeg",
    alt: "Yikanmis hali ornek gorsel 2",
  },
  {
    src: "/gallery/haliyikama3.jpeg",
    alt: "Yikanmis hali ornek gorsel 3",
  },
  {
    src: "/gallery/haliyikama4.jpeg",
    alt: "Yikanmis hali ornek gorsel 4",
  },
  {
    src: "/gallery/haliyikama5.jpeg",
    alt: "Yikanmis hali ornek gorsel 5",
  },
  {
    src: "/gallery/haliyikama6.jpeg",
    alt: "Yikanmis hali ornek gorsel 6",
  },
] as const;

export function ExampleGallery() {
  return (
    <section id="ornek-gorseller" className="section-space">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Örnek Görseller"
            title="Halı yıkama işlemi sırasında çekilen görüntüler"
            description="Bu alanda, halıların yıkama ve temizlik süreci sırasında çekilen örnek görüntüleri inceleyebilirsiniz."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.06}>
              <article className="group section-card card-hover overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
