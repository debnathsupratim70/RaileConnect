import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const routes = [
  {
    from: "Howrah",
    to: "New Delhi",
    train: "12301 Rajdhani Express",
  },
  {
    from: "Sealdah",
    to: "Guwahati",
    train: "12345 Saraighat Express",
  },
  {
    from: "Mumbai",
    to: "Chennai",
    train: "12163 Superfast Express",
  },
  {
    from: "Bengaluru",
    to: "Hyderabad",
    train: "12649 Karnataka Express",
  },
];

function PopularRoutes() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle
          title="⭐ Popular Routes"
          subtitle="Explore some of the most frequently travelled railway routes across India."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <Card key={`${route.from}-${route.to}`}>
              <h3 className="text-lg font-semibold text-blue-700">
                {route.from} → {route.to}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {route.train}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PopularRoutes;