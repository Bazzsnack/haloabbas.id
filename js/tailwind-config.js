tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-error-container": "#93000a",
                "secondary-container": "#2b6cf0",
                "on-tertiary-container": "#34485d",
                "on-tertiary-fixed-variant": "#35485e",
                "outline-variant": "#bbc9cd",
                "tertiary": "#4d6077",
                "error-container": "#ffdad6",
                "background": "#f5fafd",
                "outline": "#6c797d",
                "on-error": "#ffffff",
                "tertiary-container": "#a2b6d0",
                "on-secondary-fixed": "#001848",
                "surface-dim": "#d6dbde",
                "primary": "#006878",
                "on-secondary-container": "#fefcff",
                "error": "#ba1a1a",
                "on-primary": "#ffffff",
                "on-secondary": "#ffffff",
                "on-tertiary-fixed": "#071d30",
                "surface-container-low": "#eff4f7",
                "on-background": "#171c1f",
                "surface-tint": "#006878",
                "surface": "#f5fafd",
                "surface-variant": "#dee3e6",
                "secondary-fixed": "#dae2ff",
                "on-surface": "#171c1f",
                "surface-container": "#eaeff2",
                "on-tertiary": "#ffffff",
                "surface-bright": "#f5fafd",
                "on-primary-container": "#004d59",
                "on-primary-fixed-variant": "#004e5a",
                "tertiary-fixed-dim": "#b4c8e3",
                "on-secondary-fixed-variant": "#003fa3",
                "secondary": "#0053cf",
                "primary-fixed": "#a5eeff",
                "inverse-on-surface": "#ecf1f4",
                "on-primary-fixed": "#001f25",
                "inverse-primary": "#44d8f3",
                "surface-container-high": "#e4e9ec",
                "tertiary-fixed": "#d0e4ff",
                "on-surface-variant": "#3c494c",
                "surface-container-highest": "#dee3e6",
                "secondary-fixed-dim": "#b2c5ff",
                "primary-container": "#22c5e0",
                "surface-container-lowest": "#ffffff",
                "primary-fixed-dim": "#44d8f3",
                "inverse-surface": "#2c3134"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "container-max": "1200px",
                "margin-mobile": "20px",
                "section-gap": "120px",
                gutter: "24px",
                base: "8px"
            },
            fontFamily: {
                "headline-lg-mobile": ["Space Grotesk", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"],
                "headline-lg": ["Space Grotesk", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "label-caps": ["Inter", "sans-serif"],
                "label-mono": ["JetBrains Mono", "monospace"],
                "headline-md": ["Space Grotesk", "sans-serif"],
                "display-xl": ["Space Grotesk", "sans-serif"]
            },
            fontSize: {
                "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
                "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
                "headline-md": ["32px", { lineHeight: "40px", fontWeight: "500" }],
                "display-xl": ["72px", { lineHeight: "80px", letterSpacing: "-0.02em", fontWeight: "700" }]
            }
        }
    }
};
