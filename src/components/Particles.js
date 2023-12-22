import Particles from "react-tsparticles";
import { useSelector } from "react-redux";

const Particle = () => {
  const { color } = useSelector((state) => state.colorMode);

  let particleColor;
  let linkColor;

  if (color === "light") {
    particleColor = "#FFFFFF";
    linkColor = "#FFFFFF";
  } else {
    particleColor = "#000000";
    linkColor = "#000000";
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          //   color: {
          //     value: "#A0AEC0",
          //   },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: `${particleColor}`,
          },
          links: {
             color: `${linkColor}`,
             distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
