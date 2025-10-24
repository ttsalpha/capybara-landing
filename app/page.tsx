"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Dashboard",
    description: "Browse all your favorite tools and recent tools in one place",
    image: "/1.png",
  },
  {
    title: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256, SHA512, SHA3, and BCrypt hashes",
    image: "/4.png",
  },
  {
    title: "QR Code Generator",
    description: "Create QR codes from URLs and text with customizable sizes",
    image: "/5.png",
  },
  {
    title: "Text Diff",
    description: "Compare and analyze differences between two text inputs",
    image: "/3.png",
  },
  {
    title: "JSON Formatter",
    description: "Format, sort, and validate JSON data with ease",
    image: "/2.png",
  },
  {
    title: "JWT Decoder",
    description:
      "Decode and inspect JWT tokens with header and payload display",
    image: "/6.png",
  },
];

const tools = [
  // Formatters
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    category: "Formatters",
  },
  {
    id: "xml-formatter",
    name: "XML Formatter",
    description: "Format and validate XML data",
    category: "Formatters",
  },
  {
    id: "javascript-formatter",
    name: "JavaScript Formatter",
    description: "Format JavaScript code",
    category: "Formatters",
  },

  // Encoders/Decoders
  {
    id: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens",
    category: "Encoders/Decoders",
  },
  {
    id: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode and decode Base64 strings",
    category: "Encoders/Decoders",
  },
  {
    id: "html-encoder",
    name: "HTML Encoder",
    description: "Encode and decode HTML entities",
    category: "Encoders/Decoders",
  },
  {
    id: "url-encoder",
    name: "URL Encoder",
    description: "Encode and decode URL strings",
    category: "Encoders/Decoders",
  },

  // Text
  {
    id: "text-diff",
    name: "Text Diff",
    description: "Compare and highlight text differences",
    category: "Text",
  },
  {
    id: "text-inspector",
    name: "Text Inspector",
    description: "Analyze and inspect text content",
    category: "Text",
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description: "Convert text between different cases",
    category: "Text",
  },

  // Converters
  {
    id: "datetime-converter",
    name: "Datetime Converter",
    description: "Convert between different date formats",
    category: "Converters",
  },
  {
    id: "json-yaml",
    name: "JSON - YAML",
    description: "Convert between JSON and YAML formats",
    category: "Converters",
  },
  {
    id: "number-converter",
    name: "Number Converter",
    description: "Convert between decimal, hex, binary, octal",
    category: "Converters",
  },

  // Generators
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256, SHA512 hashes",
    category: "Generators",
  },
  {
    id: "qr-code",
    name: "QR Code Generator",
    description: "Generate QR codes with customizable correction levels",
    category: "Generators",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <main className="main">
      <section className="hero">
        <div>
          <div className="hero-icon">
            <img
              src="/app-icon.png"
              alt="Capybara Icon"
              className="capybara-icon"
            />
          </div>
          <h1>
            <a href="/" className="title-link">
              Capybara
            </a>
          </h1>
          <p>A compact toolbox simplifying developer data tasks.</p>
          <div className="badge">
            <span className="dot"></span>
            macOS only
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <div>
          {/* Carousel Container */}
          <div className="carousel-container">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${
                    index === currentSlide ? "active" : "inactive"
                  }`}
                >
                  <img src={slide.image} alt={slide.title} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="dots-nav">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Info Below Carousel */}
          <div className="slide-info">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
      </section>

      <section className="installation-section">
        <h2>Installation</h2>
        <div className="installation-methods">
          <div className="installation-method">
            <h3>Download</h3>
            <p>Download the latest release from GitHub</p>
            <a
              href="https://github.com/ttsalpha/Capybara/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="install-button"
            >
              Download
            </a>
          </div>
          <div className="installation-method">
            <h3>Homebrew</h3>
            <p>Install using Homebrew package manager</p>
            <div className="code-block">
              <code>brew install capybara</code>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>All Tools</h2>
        <div className="tools-list">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-item">
              <div className="tool-info">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 Capybara.{" "}
            <a
              href="https://ttsalpha.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Son Tran
            </a>
            .
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/ttsalpha/Capybara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/ttsalpha/Capybara/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              License
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
