import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className="pb-11 pt-8 xl:pt-16 xl:pb-32">
      <Container variant="primary">
        <div className="flex flex-col xl:flex-row-reverse gap-x-20 gap-y-4 xl:items-end">
          <div className="flex-1">
            <div className="h-[400px] xl:h-full">
              <Image
                src="/hero.jpg"
                alt=""
                width={800}
                height={600}
                objectFit="contain"
                className="my-auto"
              />
            </div>
          </div>
          <div className="flex-1 text-center xl:text-left">
            <h1 className=" text-[30px] xl:text-[40px] leading-[100%]">
              Crafting Digital Experiences
            </h1>
            <p className="body-text mt-[12px] mb-10 md:px-16 xl:pr-12 xl:pl-0">
              I&apos;m a{" "}
              <span className="text-primary">frontend developer</span> with a
              passion for designing seamless user interfaces. Explore my
              portfolio to witness the fusion of creativity and functionality in
              every project.
            </p>
            <div className="flex items-center gap-y-4 gap-1 xl:gap-[17px] max-xl:justify-center flex-wrap">
              <Button variant="primary">Work with me</Button>
              <Button variant="secondary">Download CV</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
