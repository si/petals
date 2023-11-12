import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="page-green">
    <Section yPadding="pt-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#Why">
            <a>Why</a>
          </Link>
        </li>
        <li>
          <Link href="/#How">
            <a>How</a>
          </Link>
        </li>
        <li>
          <Link href="/snapshots">
            <a>Snapshots</a>
          </Link>
        </li>
        <li>
          <Link href="/#Join">
            <a>Join</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-4">
      <VerticalFeatureRow
        title="Improve your team health & culture with PETALS"
        description="A simple framework to help continuously improve tech team's health"
        image="/assets/images/team-high-fives.svg"
        imageAlt="Team high fiving"
      />
    </Section>
  </Background>
);

export { Hero };
