import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Content = () => (
  <Background color="">
    <Section id="Why">
      <div className="">
        <h2 className="">Why use PETALS?</h2>
        <p className="">
          Do you find your team&apos;s morale peaks and troughs without any
          direction?
        </p>
        <p className="">
          Have you observed teams you lead struggle to identify improvement
          areas?
        </p>
        <p className="">
          Are teams you&apos;re working with suggesting they&apos;re awesome but
          can&apos;t pinpoint why?
        </p>
        <p className="">
          <strong className="">
            PETALS is a framework to help improve team health, rapidly and
            regularly, with a tried and tested method from large tech
            organisations.
          </strong>
        </p>
      </div>
    </Section>
  </Background>
);

export { Content };
