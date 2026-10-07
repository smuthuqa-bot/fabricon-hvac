import ContactHero from "@/components/contact/ContactHero";
import ContactOffices from "@/components/contact/ContactOffices";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | FABRICON & ACME HVAC",
  description:
    "Contact FABRICON and ACME HVAC for engineering projects, enquiries and career opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactOffices />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="section-kicker">Let&apos;s Connect</span>

              <h2 className="heading-lg mt-5">
                Engineering solutions start with a conversation.
              </h2>

              <p className="body-md mt-5">
                Whether you are planning a power infrastructure project,
                electrical works, HVAC installation, maintenance requirement or
                looking for a career opportunity, our teams are ready to hear
                from you.
              </p>

              <div className="mt-8 rounded-2xl bg-[var(--fabricon-navy)] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#FB5501]">
                  FABRICON × ACME HVAC
                </p>

                <p className="mt-4 text-2xl font-black leading-tight text-white">
                  Engineering Infrastructure.
                  <br />
                  Enhancing Lives.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Kuwait • India • Regional Projects
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}