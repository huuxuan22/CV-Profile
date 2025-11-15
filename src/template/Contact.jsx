import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  // Social links from translations
  const socialLinks = {
    facebook: t(TRANSLATION_KEYS.LINK_FACEBOOK),
    instagram: t(TRANSLATION_KEYS.LINK_INSTAGRAM),
    linkedin: t(TRANSLATION_KEYS.LINK_LINKEDIN),
    github: t(TRANSLATION_KEYS.LINK_GITHUB),
    gitlab: t(TRANSLATION_KEYS.LINK_GITLAB),
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  const contactCards = [
    {
      id: "call",
      icon: Phone,
      titleKey: TRANSLATION_KEYS.CALL_ME,
      detail: "0707342756",
      link: "tel:+0707342756",
      hasButton: false,
    },
    {
      id: "chat",
      icon: MessageCircle,
      titleKey: TRANSLATION_KEYS.CHAT_LIVE,
      detailKey: TRANSLATION_KEYS.CHAT_AVAILABLE,
      link: "#",
      buttonTextKey: TRANSLATION_KEYS.BUTTON_CHAT_NOW,
      hasButton: true,
    },
    {
      id: "question",
      icon: Mail,
      titleKey: TRANSLATION_KEYS.ASK_QUESTION,
      detailKey: TRANSLATION_KEYS.ASK_QUESTION_DETAIL,
      link: "mailto:tranduonghuuxuan22@gmail.com",
      buttonTextKey: TRANSLATION_KEYS.BUTTON_GET_STARTED,
      hasButton: true,
    },
    {
      id: "email",
      icon: Mail,
      titleKey: TRANSLATION_KEYS.EMAIL,
      detail: "tranduonghuuxuan22@gmail.com",
      link: "mailto:tranduonghuuxuan22@gmail.com",
      hasButton: false,
    },
    {
      id: "facebook",
      icon: FaFacebookF,
      title: "Facebook",
      detail: "Connect with us on Facebook",
      link: socialLinks.facebook,
      buttonTextKey: TRANSLATION_KEYS.BUTTON_VISIT_PAGE,
      hasButton: true,
    },
    {
      id: "instagram",
      icon: FaInstagram,
      title: "Instagram",
      detail: "Follow us on Instagram for updates",
      link: socialLinks.instagram,
      buttonTextKey: TRANSLATION_KEYS.BUTTON_FOLLOW_US,
      hasButton: true,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full pt-0 pb-10 relative overflow-hidden"
      style={{ marginTop: 70 }}
      ref={sectionRef}
    >
      {/* Background elements đã được quản lý bởi App.js - Không cần thêm ở đây */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20 transition-all duration-1000 ease-out ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  } hover:bg-white/15 hover:shadow-2xl hover:scale-105`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#1C5C84] rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" style={{ fontSize: '2rem', color: 'white' }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white text-center mb-4"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {card.titleKey ? t(card.titleKey) : card.title}
                </h3>

                {/* Detail */}
                {card.id === "call" || card.id === "email" ? (
                  <a
                    href={card.link}
                    className="block text-center text-[#5DC9E4] text-lg hover:text-white transition-colors mb-4"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {card.detailKey ? t(card.detailKey) : card.detail}
                  </a>
                ) : (
                  <p
                    className="text-center text-gray-300 text-sm mb-6"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {card.detailKey ? t(card.detailKey) : card.detail}
                  </p>
                )}

                {/* Button */}
                {card.hasButton && (
                  <div className="flex justify-center">
                    <a
                      href={card.link}
                      className="bg-[#1C5C84] hover:bg-[#2A7CB0] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      {card.buttonTextKey ? t(card.buttonTextKey) : card.buttonText}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div
          className={`text-center space-y-4 transition-all duration-1000 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "450ms" }}
        >
          {/* Address */}
          <div className="mb-6">
            <p className="text-[#B6E1FF] text-lg mb-2">
              {t(TRANSLATION_KEYS.ADDRESS_FULL)}
            </p>
            <a
              href="mailto:tranduonghuuxuan22@gmail.com"
              className="text-[#5DC9E4] hover:text-white transition-colors text-lg"
            >
              tranduonghuuxuan22@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-white/20">
            <h3
              className="text-white text-xl font-semibold mb-4"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              {t(TRANSLATION_KEYS.CONNECT_TITLE)}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="GitLab"
              >
                <FaGitlab className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
