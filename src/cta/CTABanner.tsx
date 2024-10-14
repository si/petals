import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <div className="text-2xl font-bold">{props.title}</div>
        <div className="py-6">{props.subtitle}</div>
      </div>
      <div className="">{props.button}</div>
    </div>
  </div>
);

export { CTABanner };
