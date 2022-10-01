import React from 'react';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // fpsLimit: 120,
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
                    // modes: {
                    //     push: {
                    //         quantity: 4,
                    //     },
                    //     repulse: {
                    //         distance: 200,
                    //         duration: 0.4,
                    //     },
                    // },
                },
                particles: {
                    color: {
                        value: "#fb1",
                    },
                    links: {
                        color: "",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    // collisions: {
                    //     enable: true,
                    // },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "polygon",
                        "stroke": {
                            "width": 4,
                            "color": "#B71"
                         },
                         "polygon": {
                            "nb_sides": 6,
                         },
                    },
                    size: {
                        value: { min: 3, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;