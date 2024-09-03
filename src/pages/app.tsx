import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';

const AppPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Toolkits">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          Get free access to the PETALS web app for 6 months
        </h1>
        <p className="my-5 text-xl">
          Get exclusive early access to the PETALS web app, 
          created to streamline and simplify the framework
          for your teams.
        </p>
        <p className="my-5">Exclusively available:</p>
        <ul>
          <li><strong>Organisation onboarding</strong> to create your account</li>
          <li><strong>Team member invitations</strong> for any size</li>
          <li><strong>Live metrics charts and reports</strong> for teams and individuals</li>
          <li><strong>1 hour introductory consultancy</strong> to provide the right tools for your teams</li>
        </ul>
        <p className="my-8">
          Simply provide your deatils below to receive your invite link when the 
          redesigned app launches in September 2024.
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="relative inset-0 ">
            <label htmlFor="bd-email">Your email address</label>
            <input
              type="email"
              name="email"
              id="bd-email"
              className="block w-full rounded-md border-1 p-2 "
            />
          </div>
          <div className="relative inset-0 ">
            <label htmlFor="bd-first-name">Your first name</label>
            <input
              type="text"
              name="metadata__first_name"
              id="bd-first-name"
              className="block w-full rounded-md border-1 p-2 "
            />
          </div>
          <div className="relative inset-0 ">
            <label htmlFor="bd-organisaton">Your organisation name</label>
            <input
              type="text"
              name="metadata__organisation"
              id="bd-organisaton"
              className="block w-full rounded-md border-1 p-2 "
            />
          </div>
          <div className="relative inset-0 ">
            <input
              type="submit"
              value="Sign up"
              className="rounded-md bg-slate-600 px-10 py-5 text-sm font-semibold text-white "
            />
            <input type="hidden" name="tag" value="App" />
          </div>
        </form>
        <Banner />
      </Section>
    </Background>
  </Base>
);

export default AppPage;
