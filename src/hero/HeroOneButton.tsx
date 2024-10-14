import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="">
    <h1 className="">{props.title}</h1>
    <div className="">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
