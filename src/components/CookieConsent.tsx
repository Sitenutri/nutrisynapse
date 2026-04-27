"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-beige-dark/30"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-light text-center sm:text-left">
              Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
            </p>
            <button
              onClick={accept}
              className="px-6 py-2 bg-agua-dark text-white text-sm font-medium rounded-lg hover:bg-agua transition-colors whitespace-nowrap"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
