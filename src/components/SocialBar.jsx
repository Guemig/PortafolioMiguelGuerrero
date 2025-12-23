import { useEffect, useState } from "react";

export default function SocialBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");

    if (!hero || !contact) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyVisible = entries.some(
          (entry) => entry.isIntersecting
        );

        setHidden(isAnyVisible);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(hero);
    observer.observe(contact);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
        fixed right-6 top-1/2 -translate-y-1/2 z-50
        hidden md:flex flex-col gap-4
        transition-all duration-500 ease-out
        ${hidden
          ? "opacity-0 pointer-events-none translate-x-6"
          : "opacity-100 translate-x-0"}
      `}
    >
      {/* Email */}
      <a href="mailto:lmgtye@gmail.com" className="social-btn">
        <img src="/icons/mail.svg" alt="Email" className="w-7 h-7" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/luis-miguel-guerrero-tello-1937b82a1/"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
      >
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-9 h-9" />
      </a>

      {/* itch.io */}
      <a
        href="https://miguel-guerrero.itch.io/"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
      >
        <img src="/icons/itch.io.svg" alt="itch.io" className="w-11 h-11" />
      </a>

      {/* Teléfono */}
      <a href="tel:+573053947054" className="social-btn">
        <img src="/icons/phone.svg" alt="Teléfono" className="w-9 h-9" />
      </a>
    </div>
  );
}
