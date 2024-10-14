import { Logo } from './Logo';
import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="">
    <Section yPadding="">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-4">
      <VerticalFeatureRow
        title="Improve your team health with PETALS"
        description="A simple framework to help continuously improve team health"
        image="/assets/images/team-high-fives.svg"
        imageAlt="Team high fiving"
      />
    </Section>
  </Background>
);

export { Hero };
