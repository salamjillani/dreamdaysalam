import React, { useRef } from 'react';

const GOLD_BASE   = '#D9AC56';
const GOLD_TOP    = '#E6C374';
const GOLD_BOTTOM = '#C9963F';
const GOLD_BORDER = '#9A6E2E';

const shadow = {
  default:
    '0 12px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 6px rgba(0,0,0,0.18)',
  hover:
    '0 16px 30px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.62), inset 0 -2px 7px rgba(0,0,0,0.20)',
  active:
    '0 9px 18px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.40), inset 0 -3px 8px rgba(0,0,0,0.24)',
  focus:
    '0 0 0 3px rgba(255,255,255,0.55), 0 0 0 6px rgba(217,172,86,0.55), 0 12px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 6px rgba(0,0,0,0.18)',
};

const baseStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(0.5rem, 1.8vw, 1rem) clamp(1.2rem, 5vw, 3.5rem)',
  borderRadius: '10px',
  border: `1px solid ${GOLD_BORDER}`,
  fontFamily: 'Cinzel, serif',
  fontSize: 'clamp(0.7rem, 2.8vw, 1rem)',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  color: '#002D67',
  background: `linear-gradient(180deg, ${GOLD_TOP} 0%, ${GOLD_BASE} 48%, ${GOLD_BOTTOM} 100%)`,
  boxShadow: shadow.default,
  transform: 'translateY(0px)',
  filter: 'none',
  transition: 'transform 180ms ease, box-shadow 180ms ease, filter 180ms ease',
  outline: 'none',
};

const Hero = () => {
  const btnRef = useRef(null);

  const apply = (patch) => {
    if (!btnRef.current) return;
    Object.assign(btnRef.current.style, patch);
  };

  return (
    <section
      id="hero"
      className="
        min-h-screen 
        w-full 
        flex 
        flex-col
        items-center 
        justify-center
        relative 
        overflow-hidden 
        pt-16 
        sm:pt-20 
        md:pt-24 
        lg:pt-28 
        xl:pt-32 
        2xl:pt-36 
        px-4 
        sm:px-6 
        md:px-8 
        lg:px-12 
        xl:px-16 
        2xl:px-20
        bg-contain
        md:bg-cover
        bg-[#05172A]
      "
      style={{
        backgroundImage: 'url("/herodreamday.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#002D67]/30 to-[#002D67] pointer-events-none" />

      {/* CTA Button */}
      <div className="relative z-10 mt-[34vw] sm:mt-[30vw] md:mt-auto md:mb-16 flex items-center justify-center w-full">
        <a
          ref={btnRef}
          href="https://calendly.com/ep-dreamdayeventplanner/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={baseStyle}
          onMouseEnter={() =>
            apply({
              transform: 'translateY(-2px)',
              filter: 'brightness(1.035) saturate(1.02)',
              boxShadow: shadow.hover,
            })
          }
          onMouseLeave={() =>
            apply({
              transform: 'translateY(0px)',
              filter: 'none',
              boxShadow: shadow.default,
            })
          }
          onMouseDown={() =>
            apply({
              transform: 'translateY(1px)',
              filter: 'brightness(0.99) saturate(1.01)',
              boxShadow: shadow.active,
            })
          }
          onMouseUp={() =>
            apply({
              transform: 'translateY(-2px)',
              filter: 'brightness(1.035) saturate(1.02)',
              boxShadow: shadow.hover,
            })
          }
          onFocus={() =>
            apply({ boxShadow: shadow.focus })
          }
          onBlur={() =>
            apply({ boxShadow: shadow.default })
          }
        >
          Reserve Your DreamDay Date
        </a>
      </div>
    </section>
  );
};

export default Hero;