import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Origins = () => (
  <Background color="">
    <Section id="Origins">
      <div className="">
        <h2 className="">Where did PETALS come from?</h2>
        <p className="">
          Si Jobling is an experienced Engineering Manager, former Agile
          Delivery Manager and Web Engineer. He has worked across a variety of
          organisations at different scales and context, from the UK to USA and
          China, always driving for healthy open cultures in tech.
        </p>
        <p className="">
          With over 20 years experience of hands on software engineering and
          leadership, he knows what makes for healthy engineering teams and
          software engineers. He originally designed PETALS as a personal
          framework to regularly reflect on his working week. As he extended the
          model to the teams he led, it quickly grew in popularity for its
          simplicity and power for both teams and leadership, gaining attention
          from popular publications like{' '}
          <a href="https://emhub.io/articles/how-i-built-a-framework-to-measure-team-health">
            EMHub
          </a>{' '}
          and big name brands.
        </p>
      </div>
    </Section>
  </Background>
);

export { Origins };
