import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: "🚆",
    title: "Train Search",
    description: "Search trains across major Indian railway routes.",
  },
  {
    icon: "🎫",
    title: "Easy Booking",
    description: "Book tickets quickly with a simple booking flow.",
  },
  {
    icon: "📍",
    title: "PNR & Train Status",
    description: "Check PNR status and track your journey.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    description: "Authentication and secure booking experience.",
  },
];

function Features() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Why Choose RaileConnect?"
          subtitle="A modern railway reservation platform inspired by real-world booking systems."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="text-center">
                <div className="mb-4 text-5xl">{feature.icon}</div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;