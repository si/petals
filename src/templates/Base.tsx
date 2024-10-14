import { Footer } from './Footer';
import { Hero } from './Hero';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

type BaseProps = {
  children: React.ReactNode;
};

const Base = (props: BaseProps) => {
  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      {props.children}
      <Footer />
    </div>
  );
};

export { Base };
