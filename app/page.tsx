"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";
import { cvData as cvDataEs } from "../data/cvData_es";
import { cvData as cvDataEn } from "../data/cvData_en";

export default function ReimaginedCV() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [currentLang, setCurrentLang] = useState(i18n.language || "es");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  const cvData = i18n.language.startsWith("es") ? cvDataEs : cvDataEn;

  const birthDate = new Date(1993, 5, 24); // Month is 0-indexed (June = 5)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const currentYear = today.getFullYear();

  const {
    personalInfo,
    professionalProfile,
    academicBackground,
    workExperience,
    languages,
    skills,
    courses,
    otherData,
  } = cvData;

  return (
    <div className="max-w-[1100px] mx-auto my-[60px] px-[20px] relative font-outfit">
      {/* Controls */}
      <div className="fixed top-[20px] right-[20px] z-[100] flex gap-[10px]">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="glass animate px-[15px] py-[10px] cursor-pointer text-main flex items-center gap-[8px] font-bold"
        >
          <span>{currentLang.startsWith("es") ? "🇺🇸 EN" : "🇲🇽 ES"}</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="glass animate px-[15px] py-[10px] cursor-pointer text-main flex items-center gap-[8px]"
        >
          <span className="text-[1.2rem]">
            {theme === "dark" ? "☀️" : "🌙"}
          </span>
        </button>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-emerald-accent/5 blur-[60px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-accent/5 blur-[80px] rounded-full -z-10"></div>

      <header
        className="animate grid md:grid-cols-[auto_1fr] gap-[40px] items-center mb-[60px] text-center md:text-left"
        role="banner"
      >
        <div className="relative w-[180px] h-[180px] mx-auto md:mx-0">
          <div className="absolute inset-[-10px] rounded-full bg-gradient-to-br from-emerald-accent to-blue-accent opacity-30 blur-[15px]"></div>
          <div
            className="relative z-10 w-full h-full rounded-full border-2 border-[var(--card-border)] flex items-center justify-center text-[3.5rem] font-extrabold text-emerald-accent bg-[#1a1a1a]"
            aria-label={`Inicias de ${personalInfo.fullName}`}
          >
            GS
          </div>
        </div>
        <div>
          <h1 className="name">{personalInfo.fullName}</h1>
          <div className="flex gap-[10px] flex-wrap justify-center md:justify-start">
            <span className="job-title-tag">{personalInfo.title}</span>
          </div>

          <div className="mt-[20px] flex gap-[20px] text-[0.9rem] text-muted flex-wrap justify-center md:justify-start">
            <span aria-label="Ubicación">📍 {personalInfo.location}</span>
            <span>
              📧{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-inherit no-underline"
                aria-label={`Enviar correo a ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
            </span>
          </div>
          <div className="mt-[15px] flex gap-[15px] justify-center md:justify-start">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="tag !text-emerald-accent !border-emerald-accent/20 flex items-center gap-[8px] no-underline"
              aria-label="Ir a mi perfil de LinkedIn"
            >
              <span className="font-extrabold">in</span> LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tag flex items-center gap-[8px] no-underline"
              aria-label="Ir a mi perfil de GitHub"
            >
              <span className="text-[1.1rem]">&#9414;</span> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-12 gap-[20px] mb-[40px]">
        {/* Profile Section */}
        <section
          className="glass p-[30px] col-span-12 md:col-span-8 glass-hover animate"
          style={{ animationDelay: "0.1s" }}
          aria-labelledby="profile-title"
        >
          <h2 id="profile-title" className="section-title">
            {t("sections.profile")}
          </h2>
          <p className="text-muted text-[1.1rem] font-light">
            {professionalProfile}
          </p>
        </section>

        {/* Info Bio Section */}
        <section
          className="glass p-[30px] col-span-12 md:col-span-4 animate"
          style={{ animationDelay: "0.2s" }}
          aria-labelledby="bio-title"
        >
          <h2 id="bio-title" className="section-title">
            {t("personal.bio")}
          </h2>
          <div className="grid gap-[20px]">
            <div>
              <div className="text-[0.7rem] text-emerald-accent uppercase tracking-wider font-bold">
                {t("labels.age")}
              </div>
              <div className="text-[1.1rem]">
                {age} {i18n.language.startsWith("es") ? "años" : "years old"}
              </div>
            </div>
            <div>
              <div className="text-[0.7rem] text-emerald-accent uppercase tracking-wider font-bold">
                {t("labels.nationality")}
              </div>
              <div className="text-[1.1rem]">{personalInfo.nationality}</div>
            </div>
            <div>
              <div className="text-[0.7rem] text-emerald-accent uppercase tracking-wider font-bold">
                {t("labels.availability")}
              </div>
              <div className="text-[1.1rem]">{personalInfo.availability}</div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          className="glass p-[30px] col-span-12 animate"
          style={{ animationDelay: "0.3s" }}
          aria-labelledby="experience-title"
        >
          <h2 id="experience-title" className="section-title">
            {t("sections.experience")}
          </h2>
          <div className="flex flex-col gap-[30px]">
            {workExperience.map((work, index) => (
              <article
                key={index}
                className="relative pl-[30px] border-l border-[var(--card-border)] group"
              >
                <div className="absolute left-[-5px] top-[8px] w-[9px] h-[9px] bg-bg border-2 border-emerald-accent rounded-full"></div>
                <div className="text-[0.85rem] text-emerald-accent font-semibold mb-[5px]">
                  {work.period}
                </div>
                <h3 className="text-[1.1rem] font-bold text-main">
                  {work.position}
                </h3>
                <div className="text-[0.95rem] text-emerald-accent mb-[10px]">
                  {work.company}
                </div>
                <ul className="list-none mt-[10px]">
                  {work.activities.slice(0, 3).map((act, i) => (
                    <li
                      key={i}
                      className="text-muted text-[0.9rem] mb-[5px] flex gap-[10px]"
                    >
                      <span className="text-emerald-accent">▹</span> {act}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-[10px] mt-[15px]">
                  {work.technologies.map((tech, i) => (
                    <span key={i} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="glass p-[30px] col-span-12 animate"
          style={{ animationDelay: "0.4s" }}
          aria-labelledby="skills-title"
        >
          <h2 id="skills-title" className="section-title">
            {t("sections.skills")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div>
              <h3 className="mb-[15px] text-[1rem] font-bold text-emerald-accent border-b border-emerald-accent/20 pb-[5px]">
                {t("labels.skills_frontend")}
              </h3>
              <div className="flex flex-wrap gap-[10px]">
                {skills.frontend.map((s, i) => {
                  let customClass = "";
                  const lowerS = s.toLowerCase();
                  if (lowerS.includes("next.js"))
                    customClass = "bg-emerald-accent text-black font-bold";
                  if (lowerS.includes("tailwind"))
                    customClass = "!text-[#38bdf8] !border-[#38bdf8]/20";
                  if (
                    lowerS.includes("microfrontend") ||
                    lowerS.includes("module federation")
                  )
                    customClass = "border-orange-accent/30";
                  if (lowerS.includes("react"))
                    customClass = "border-blue-accent/30 font-medium";

                  return (
                    <span key={i} className={`tag ${customClass}`}>
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="mb-[15px] text-[1rem] font-bold text-emerald-accent border-b border-emerald-accent/20 pb-[5px]">
                {t("labels.skills_backend")}
              </h3>
              <div className="flex flex-wrap gap-[10px]">
                {skills.backend.map((s, i) => (
                  <span key={i} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-[15px] text-[1rem] font-bold text-emerald-accent border-b border-emerald-accent/20 pb-[5px]">
                {t("labels.skills_devops")}
              </h3>
              <div className="flex flex-wrap gap-[10px]">
                {skills.devops.map((s, i) => (
                  <span
                    key={i}
                    className="tag border-blue-accent/20 !text-blue-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-[15px] text-[1rem] font-bold text-emerald-accent border-b border-emerald-accent/20 pb-[5px]">
                {t("labels.skills_mobile")}
              </h3>
              <div className="flex flex-wrap gap-[10px]">
                {skills.mobile.map((s, i) => {
                  let customClass = "";
                  const isFlutter = s.toLowerCase().includes("flutter");
                  const isRN = s.toLowerCase().includes("react native");
                  
                  if (theme === "dark") {
                    if (isFlutter) customClass = "text-[#40D0FB] border-[#40D0FB]/30 bg-[#40D0FB]/5 font-medium";
                    if (isRN) customClass = "text-[#61DBFB] border-[#61DBFB]/30 bg-[#61DBFB]/5 font-medium";
                  } else {
                    if (isFlutter) customClass = "text-[#02569B] border-[#02569B]/20 bg-[#02569B]/5 font-semibold";
                    if (isRN) customClass = "text-[#007acc] border-[#007acc]/20 bg-[#007acc]/5 font-semibold";
                  }
                  
                  return (
                    <span key={i} className={`tag ${customClass}`}>
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="mb-[15px] text-[1rem] font-bold text-emerald-accent border-b border-emerald-accent/20 pb-[5px]">
                {t("labels.skills_testing")}
              </h3>
              <div className="flex flex-wrap gap-[10px]">
                {skills.testing.map((s, i) => {
                  let customClass = "";
                  const isCypress = s.toLowerCase().includes("cypress");
                  const isJest = s.toLowerCase().includes("jest");

                  if (theme === "dark") {
                    if (isCypress) customClass = "text-[#49d3a2] border-[#49d3a2]/30 bg-[#49d3a2]/5 font-medium";
                    if (isJest) customClass = "text-[#fb4f5e] border-[#fb4f5e]/30 bg-[#fb4f5e]/5 font-medium";
                  } else {
                    if (isCypress) customClass = "text-[#008f66] border-[#008f66]/20 bg-[#008f66]/5 font-semibold";
                    if (isJest) customClass = "text-[#c21325] border-[#c21325]/20 bg-[#c21325]/5 font-semibold";
                  }

                  return (
                    <span key={i} className={`tag ${customClass}`}>
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          className="glass p-[30px] col-span-12 md:col-span-6 animate"
          style={{ animationDelay: "0.5s" }}
          aria-labelledby="education-title"
        >
          <h2 id="education-title" className="section-title">
            {t("sections.education")}
          </h2>
          <div className="flex flex-col gap-[30px]">
            {academicBackground.slice(0, 2).map((edu, index) => (
              <div
                key={index}
                className="relative pl-[30px] border-l border-[var(--card-border)]"
              >
                <div className="absolute left-[-5px] top-[8px] w-[9px] h-[9px] bg-bg border-2 border-emerald-accent rounded-full"></div>
                <div className="text-[0.85rem] text-emerald-accent font-semibold mb-[5px]">
                  {edu.period}
                </div>
                <h3 className="text-[1rem] font-bold text-main">
                  {edu.degree}
                </h3>
                <div className="text-muted text-[0.9rem]">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates & Languages */}
        <section
          className="glass p-[30px] col-span-12 animate"
          style={{ animationDelay: "0.6s" }}
          aria-labelledby="misc-title"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div>
              <h2 className="section-title">{t("sections.languages")}</h2>
              {languages.map((lang, i) => (
                <div key={i} className="mb-4">
                  <div className="font-semibold text-main">{lang.name}</div>
                  <div className="text-[0.85rem] text-muted">
                    {lang.level.split("expedido")[0]}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="section-title">{t("sections.certifications")}</h2>
              <div className="flex flex-col gap-[12px]">
                {courses.slice(0, 4).map((c, i) => (
                  <div key={i} className="text-[0.85rem]">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-main font-medium">{c.name}</span>
                      {c.certificateUrl && (
                        <a
                          href={c.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-accent hover:text-blue-accent transition-colors"
                          title="Ver Certificado"
                          aria-label={`Ver certificado de ${c.name}`}
                        >
                          📜
                        </a>
                      )}
                    </div>
                    <div className="text-emerald-accent">{c.institution}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title">{t("sections.others")}</h2>
              <div className="flex flex-wrap gap-[10px]">
                {otherData.map((d, i) => (
                  <span key={i} className="tag text-[0.75rem]">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="text-center py-[40px] text-muted text-[0.8rem]"
        role="contentinfo"
      >
        © {currentYear} {personalInfo.fullName} • {t("footer.builtWith")}
      </footer>
    </div>
  );
}
