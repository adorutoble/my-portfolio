'use client';

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: "Email",
      value: "shobrinailaf@gmail.com",
      href: "mailto:shobrinailaf@gmail.com",
      isCopy: true,
    },
    {
      label: "GitHub",
      value: "github.com/adorutoble",
      href: "https://github.com/adorutoble",
      isCopy: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/shobrinailaf",
      href: "https://linkedin.com/in/shobrinailaf",
      isCopy: false,
    },
  ];

  return (
    <section className="mt-10 max-w-2xl sm:mt-12">
      {/* Dashed Border Top */}
      <div className="border-t border-dashed border-neutral-300 dark:border-neutral-800 pt-6"></div>

      {/* Title */}
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Contact
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Interested in working together or just want to say hello? Feel free to reach out.
      </p>

      {/* Contact List */}
      <div className="mt-6">
        {contactLinks.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-dashed border-neutral-300 dark:border-neutral-800/80 py-3.5 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            {/* Label Kiri - Font Mono Gray Muted */}
            <span className="font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {item.label}
            </span>

            {/* Value & Icon Kanan - High-Contrast Bright Text */}
            <div className="flex items-center gap-2">
              <a
                href={item.href}
                target={item.isCopy ? "_self" : "_blank"}
                rel="noreferrer"
                className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 transition-colors hover:text-black dark:hover:text-white"
              >
                {item.value}
              </a>

              {item.isCopy ? (
                /* Icon Copy */
                <button
                  type="button"
                  onClick={() => handleCopy(item.value)}
                  className="p-1 text-neutral-400 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                  title={copied ? "Copied!" : "Copy email"}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <svg
                      className="h-4 w-4 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 20.625V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
                      />
                    </svg>
                  )}
                </button>
              ) : (
                /* Icon External Link */
                <svg
                  className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-400 transition-colors hover:text-black dark:hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}