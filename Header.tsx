import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex relative flex-col w-full aspect-[0.492]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7e8fa4302b6fcf29016b47293c7e7a547ffb8e328f16e9594385fe53292ccf2?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative gap-5 justify-between w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34bad87098062190468ae25c58c21dbeaa8def71985995475e46a8abc15974c4?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="Logo" className="object-contain shrink-0 max-w-full aspect-[0.82] w-[131px]" />
        <div className="flex shrink-0 h-40 w-[172px]" aria-hidden="true" />
      </div>
      <div className="flex relative z-10 flex-col items-end px-20 pt-8 pb-36 mt-16 w-full aspect-[1.884]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59097664e0097bc44fa23fb4b1f36d540df2a50b35bad4c078a749288bfed81?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f01ce20de8fdf3965d62d963b773fe28a710c40e578b2b684d4ac8510fdaae?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="Decorative element" className="object-contain mb-0 aspect-[1.05] w-[22px]" />
      </div>
      <div className="flex relative gap-10 self-start mt-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdc9c87df89f6df92a69c81c72b89c46044610d882c5a09426825a6cd6c365c?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="Decorative element" className="object-contain shrink-0 aspect-[0.56] w-[94px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4d0fa32b260f06efdc8126057971db2eeb79e1887ea6903bdd015f9692c660d?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="Decorative element" className="object-contain shrink-0 self-start mt-4 w-14 aspect-[0.78]" />
      </div>
    </header>
  );
};

export default Header;
