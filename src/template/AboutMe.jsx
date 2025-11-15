import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import {
  User,
  Book,
  School,
  Target,
  Star,
  Code,
  Database,
  Server,
  Braces,
  Globe,
  Cpu,
  DatabaseZap,
  MapPin,
} from "lucide-react";

const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="w-full relative"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-white">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left - Avatar & Basic Info */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
              {/* Container for image with full width */}
              <div className="w-full bg-[#1C5C84] rounded border border-[#3A8BC2] overflow-hidden mb-4">
                <img
                  src="/assest/about_me.jpg"
                  alt="Avatar"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>

              <div className="text-center lg:text-left space-y-3 w-full">
                <h1
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {t(TRANSLATION_KEYS.FULL_NAME)}
                </h1>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <User className="h-5 w-5 text-[#87CEEB]" />
                  <span
                    className="text-[#B8D8E8]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {t(TRANSLATION_KEYS.AGE)}
                  </span>
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Book className="h-5 w-5 text-[#87CEEB]" />
                  <span
                    className="text-[#B8D8E8]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {t(TRANSLATION_KEYS.STUDENT_YEAR)}
                  </span>
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <School className="h-5 w-5 text-[#87CEEB]" />
                  <span
                    className="text-[#B8D8E8]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {t(TRANSLATION_KEYS.UNIVERSITY)}
                  </span>
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <MapPin className="h-5 w-5 text-[#87CEEB]" />
                  <span
                    className="text-[#B8D8E8]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {t(TRANSLATION_KEYS.ADDRESS_LINE)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="w-full lg:w-2/3 space-y-6">

              {/* Strengths */}
              <div className="p-5 rounded bg-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-[#87CEEB]" />
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    {t(TRANSLATION_KEYS.STRENGTHS_TITLE)}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    TRANSLATION_KEYS.STRENGTHS_1,
                    TRANSLATION_KEYS.STRENGTHS_2,
                    TRANSLATION_KEYS.STRENGTHS_3,
                    TRANSLATION_KEYS.STRENGTHS_4,
                    TRANSLATION_KEYS.STRENGTHS_5,
                    TRANSLATION_KEYS.STRENGTHS_6,
                  ].map((strengthKey) => (
                    <div key={strengthKey} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#87CEEB] rounded"></div>
                      <span
                        className="text-[#B8D8E8]"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {t(strengthKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="p-5 rounded bg-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-[#87CEEB]" />
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    {t(TRANSLATION_KEYS.GOALS_TITLE)}
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    TRANSLATION_KEYS.GOALS_1,
                    TRANSLATION_KEYS.GOALS_2,
                    TRANSLATION_KEYS.GOALS_3,
                    TRANSLATION_KEYS.GOALS_4,
                  ].map((goalKey) => (
                    <div key={goalKey} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#9BD7F5] rounded"></div>
                      <span
                        className="text-[#B8D8E8]"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {t(goalKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Giới thiệu ngắn */}
          <div className="mt-8 p-5 rounded bg-white/10">
            <p
              className="text-[#B8D8E8] leading-relaxed"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {t(TRANSLATION_KEYS.ABOUT_DESCRIPTION)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
