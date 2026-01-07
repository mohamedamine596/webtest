import React, { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 1500,
          },
        },
        links: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          direction: "right",
          enable: true,
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
}

export default Particle;