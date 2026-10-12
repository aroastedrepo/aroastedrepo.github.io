import React, { useEffect, useState } from "react";

// Building blocks shared by the project case study pages. Colors come in as
// Tailwind class strings so each project keeps its own palette.

// Faint star field used behind dark bands, echoing the app's background.
export const starfield = {
  backgroundImage:
    "radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.7), transparent)," +
    "radial-gradient(1px 1px at 78% 14%, rgba(255,255,255,0.5), transparent)," +
    "radial-gradient(1.5px 1.5px at 42% 68%, rgba(255,255,255,0.6), transparent)," +
    "radial-gradient(1px 1px at 88% 76%, rgba(255,255,255,0.5), transparent)," +
    "radial-gradient(1px 1px at 25% 88%, rgba(255,255,255,0.4), transparent)," +
    "radial-gradient(1.5px 1.5px at 62% 38%, rgba(255,255,255,0.5), transparent)",
};

export const FullBleed = ({ className = "", style, children }) => (
  <section
    className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`}
    style={style}
  >
    {children}
  </section>
);

// Image that opens full-size in an overlay, so small diagram text is readable.
export const ZoomableImage = ({
  src,
  alt,
  caption,
  overlayClassName = "bg-black/85",
  imageClassName = "",
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <figure>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 cursor-zoom-in"
        aria-label={`Enlarge: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
        />
      </button>
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-3 text-center font-nunito">
          {caption} <span className="text-gray-400">· click to enlarge</span>
        </figcaption>
      )}
      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out ${overlayClassName}`}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full rounded-lg shadow-2xl"
          />
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl leading-none px-3"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </figure>
  );
};

const sliderThemes = {
  dark: {
    frame: "ring-1 ring-vv-line bg-vv-space",
    caption: "text-slate-300",
    counter: "text-vv-cyan",
    arrow: "text-white hover:bg-white/10",
    range: "accent-vv-cyan",
  },
  sparkle: {
    frame: "",
    caption: "text-gs-muted",
    counter: "text-gs-purple",
    arrow: "text-gs-plum hover:bg-gs-lilac",
    range: "accent-gs-purple",
  },
};

export const GallerySlider = ({
  slides,
  label,
  theme = "dark",
  imageClassName = "w-full h-96 md:h-[30rem] object-contain",
}) => {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const last = slides.length - 1;
  const goTo = (i) => setIndex(Math.min(Math.max(i, 0), last));
  const t = sliderThemes[theme];

  return (
    <div
      className="max-w-lg mx-auto focus:outline-none"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
      }}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        className={`overflow-hidden rounded-xl ${t.frame}`}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX;
          if (dx > 50) goTo(index - 1);
          if (dx < -50) goTo(index + 1);
          setTouchStartX(null);
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="w-full flex-shrink-0"
              aria-hidden={i !== index}
            >
              <img src={slide.src} alt={slide.alt} className={imageClassName} />
            </div>
          ))}
        </div>
      </div>

      <p
        className={`text-sm mt-4 text-center font-nunito min-h-[2.5rem] px-4 ${t.caption}`}
        aria-live="polite"
      >
        <span className={`font-bold ${t.counter}`}>
          {index + 1}/{slides.length}
        </span>{" "}
        · {slides[index].caption}
      </p>

      <div className="flex items-center justify-between mt-2">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className={`px-3 py-1 text-xl rounded-full disabled:opacity-30 disabled:hover:bg-transparent ${t.arrow}`}
          aria-label="Previous image"
        >
          ←
        </button>
        <input
          type="range"
          min={0}
          max={last}
          step={1}
          value={index}
          onChange={(e) => goTo(Number(e.target.value))}
          className={`flex-1 mx-4 cursor-pointer ${t.range}`}
          aria-label="Gallery slide"
        />
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === last}
          className={`px-3 py-1 text-xl rounded-full disabled:opacity-30 disabled:hover:bg-transparent ${t.arrow}`}
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </div>
  );
};

// Numbered "problem → decision → why" cards that make design rationale explicit.
export const DecisionGrid = ({ decisions, cardClassName, numberClassName }) => (
  <ol className="grid md:grid-cols-2 gap-6">
    {decisions.map((d, i) => (
      <li
        key={d.title}
        className={`rounded-2xl p-6 ${cardClassName} ${
          decisions.length % 2 === 1 && i === decisions.length - 1
            ? "md:col-span-2"
            : ""
        }`}
      >
        <span
          className={`inline-flex w-8 h-8 rounded-full items-center justify-center font-nunito font-bold text-sm mb-4 ${numberClassName}`}
        >
          {i + 1}
        </span>
        <h3 className="font-nunito font-bold text-lg mb-2">{d.title}</h3>
        <p className="leading-relaxed opacity-90">{d.body}</p>
      </li>
    ))}
  </ol>
);
