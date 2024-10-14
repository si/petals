import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="Join">
    <CTABanner
      title="Get 6 months free to improve your team health"
      subtitle="Join hundreds of other brands reading the PETALS newsletter and get 6 months free access of our web app"
      button={
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
            method="post"
            target="popupwindow"
            className="card-body embeddable-buttondown-form"
          >
            <div className="form-control">
              <label htmlFor="bd-email" className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="you@website.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <p className="py-2 text-sm">
                <label className="label">
                  <a href="/privacy" className="label-text-alt link link-hover">
                    I agree to the Privacy Policy
                  </a>
                </label>
              </p>
              {` `}
              <div className="form-control mt-6">
                <input type="submit" value="Subscribe" className="" />
              </div>
            </div>
            <input type="hidden" name="tag" value="website" />
          </form>
        </div>
      }
    />
  </Section>
);

export { Banner };
