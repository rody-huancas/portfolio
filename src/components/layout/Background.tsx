import Image from 'next/image'

export const Background = () => {
  return (
    <div className="background-shapes pointer-events-none">
      <div className="fixed top-[-20%] left-[-20%] z-[-1] animate-[rotate_60s_linear_infinite]">
        <Image 
          src="/img/bg/banner-shape-1.png" 
          alt="banner-shape-1" 
          width={1500}
          height={1500}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>

      <div className="fixed bottom-[-20%] right-[-20%] z-[-1] animate-[rotate_60s_linear_infinite]">
        <Image 
          src="/img/bg/banner-shape-1.png" 
          alt="banner-shape-1" 
          width={1500}
          height={1500}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>
    </div>
  );
};