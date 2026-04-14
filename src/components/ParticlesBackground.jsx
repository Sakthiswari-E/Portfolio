import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full -z-10"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 120
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 }
        }
      }}
    />
  );
}