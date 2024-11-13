import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <section className="flex relative z-10 flex-col px-6 py-14 mt-3 mb-0 w-full text-black aspect-[1.307]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f148e93ba19d7c143af0b4f79bb39d8d0bb70c8db79afee0a849e617677a484?placeholderIfAbsent=true&apiKey=acd1e1143455435f856429584723c7b7" alt="" className="object-cover absolute inset-0 size-full" />
      <h1 className="relative self-start text-2xl font-bold">LOGIN / SIGN UP</h1>
      <form>
        <label htmlFor="phone" className="relative self-start mt-3 text-xs">Phone</label>
        <div className="flex relative gap-2 mt-3">
          <div className="px-4 py-5 text-xs whitespace-nowrap rounded-xl border-2 border-solid bg-zinc-50 border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            +91
          </div>
          <input
            type="tel"
            id="phone"
            className="grow px-4 py-5 text-sm rounded-xl border-2 border-solid bg-zinc-50 border-black border-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-fit"
            placeholder="Phone number"
            aria-label="Phone number"
          />
        </div>
        <button
          type="submit"
          className="relative px-16 pt-4 pb-6 mt-6 text-xs bg-amber-500 border-2 border-solid bg-blend-normal border-white border-opacity-30 rounded-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-zinc-50"
        >
          GET OTP
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
