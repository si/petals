import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  id?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="">
        {props.title && <h2 className="">{props.title}</h2>}
        {props.description && <div className="">{props.description}</div>}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
