/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Tactical Deception with False Targets",
    description:
      "Confuse Enemy Radars – Our false targets are equipped with Luneburg lenses, making them appear as real assets. This misleads enemy tracking systems and enhances battlefield deception.",
  },
  {
    title: "AI-Powered Reconnaissance",
    description:
      "Real-Time Intelligence – Autonomous scout drones analyze battlefield conditions, detect enemy movements, and provide secure data transmission for instant decision-making.",
  },
  {
    title: "Precision Strike Capabilities",
    description:
      "High-Impact Engagements – Strike drones, guided by AI-driven target prioritization, deliver accurate and devastating attacks while minimizing collateral damage.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container text-center m-auto py-24 sm:py-32 space-y-8 px-6 md:px-12"
    >
      <h2 className="text-3xl lg:text-4xl font-bold">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            {/*<CardFooter>
                <img
                  src={image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto"
                />
              </CardFooter>*/}
          </Card>
        ))}
      </div>
    </section>
  );
};
