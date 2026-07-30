import { useEffect, useState } from 'react';
import { Particles, ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const OPTIONS = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 130, density: { enable: true, area: 900 } },
    color: { value: ['#ffffff', '#a78bfa', '#818cf8', '#67e8f9', '#c084fc'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.05, max: 0.55 },
      animation: { enable: true, speed: 0.5, sync: false },
    },
    size: {
      value: { min: 0.4, max: 2.2 },
      animation: { enable: true, speed: 1.2, sync: false },
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.25,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'bubble' },
      onClick: { enable: true, mode: 'repulse' },
    },
    modes: {
      bubble: { distance: 150, size: 5, opacity: 0.9, duration: 2 },
      repulse: { distance: 120, duration: 0.4 },
    },
  },
  detectRetina: true,
};

function Inner() {
  const { init } = useParticlesProvider();
  if (!init) return null;
  return (
    <Particles
      id="tsparticles"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      options={OPTIONS}
    />
  );
}

export default function ParticleBackground() {
  return (
    <ParticlesProvider options={{ init: loadSlim }}>
      <Inner />
    </ParticlesProvider>
  );
}
