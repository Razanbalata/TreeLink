import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpLeft,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/razan-balata-portrait.png";
import cv from "@/assets/Razan_Balata_CV.pdf";

const platforms = [
  { name: "مستقل", english: "Mostaql", category: "مشاريع مستقلة", url: "https://mostaql.com/u/Razanbalata", mark: "م", className: "platform-mostaql" },
  { name: "خمسات", english: "Khamsat", category: "خدمات مصغّرة", url: "https://khamsat.com/user/razanbalata", mark: "خ", className: "platform-khamsat" },
  { name: "أب وورك", english: "Upwork", category: "مشاريع عالمية", url: "https://www.upwork.com/freelancers/~0100ecd94dc47453d4?mp_source=share", mark: "up", className: "platform-upwork" },
  { name: "بعيد", english: "Baaeed", category: "فرص عمل عن بُعد", url: "https://baaeed.com/u/Razanbalata", mark: "ب", className: "platform-baaeed" },
  { name: "فورلانسو", english: "Forlanso", category: "أعمال حرّة", url: "https://www.forlanso.com/ar/rzan-blat", mark: "F", className: "platform-forlanso" },
  { name: "برايت غزة", english: "Bright Gaza", category: "ملف المواهب", url: "https://www.brightgaza.com/talents/1217", mark: "✳", className: "platform-bright" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "رزان بلاطة | مطوّرة ويب متكاملة" },
      { name: "description", content: "روابط رزان بلاطة: معرض الأعمال، السيرة الذاتية، ومنصات العمل الحر. مطوّرة ويب متكاملة تبني تجارب رقمية وحلولاً مدعومة بالذكاء الاصطناعي." },
      { property: "og:title", content: "رزان بلاطة | مطوّرة ويب متكاملة" },
      { property: "og:description", content: "تعرّف على أعمال رزان بلاطة وتواصل معها عبر منصات العمل الحر." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <main className="profile-page" dir="rtl">
      <div className="ambient-lines" aria-hidden="true" />
      <div className="profile-shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="العودة إلى الأعلى">
            <span className="brand-symbol">R<span>.</span></span>
            <span className="brand-name">RAZAN BALATA</span>
          </a>
          <span className="topbar-label"><span className="topbar-dot" /> المساحة الشخصية</span>
        </header>

        <div className="content-column" id="top">
          <motion.section {...enter(0.05)} className="intro-section" aria-labelledby="profile-name">
            <div className="portrait-wrap">
              <img src={portrait} alt="رزان بلاطة" className="portrait" />
              <span className="portrait-sparkle" aria-hidden="true"><Sparkles size={16} strokeWidth={1.7} /></span>
            </div>
            <div className="intro-kicker"><span className="kicker-line" /> أهلاً، أنا رزان</div>
            <h1 id="profile-name">رزان <span>بلاطة.</span></h1>
            <p className="role-line" dir="ltr">Full-Stack Developer <span className="role-divider">/</span> UI Enthusiast</p>
            <p className="bio">أحوّل الأفكار إلى تجارب رقمية متكاملة؛ من واجهات أنيقة وسهلة الاستخدام إلى أنظمة ذكية تعمل بسلاسة خلف الكواليس. شغفي أن أصنع حلولاً حقيقية تجمع بين التقنية، التصميم، والذكاء الاصطناعي.</p>
          </motion.section>

          <motion.section {...enter(0.17)} className="featured-section" aria-labelledby="featured-title">
            <div className="section-heading"><span className="section-index">01 /</span><h2 id="featured-title">اكتشف أعمالي</h2><span className="heading-rule" /></div>
            <a className="portfolio-link" href="https://portfolio-delta-topaz-86.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span className="portfolio-icon"><BriefcaseBusiness size={25} strokeWidth={1.5} /></span>
              <span className="portfolio-copy"><strong>معرض الأعمال</strong><small>مشاريع وأفكار تحوّلت إلى واقع</small></span>
              <span className="portfolio-arrow"><ArrowUpLeft size={23} strokeWidth={1.7} /></span>
            </a>
            <a className="cv-link" href={cv} target="_blank" rel="noopener noreferrer" download="Razan_Balata_CV.pdf">
              <span className="cv-icon"><Download size={20} strokeWidth={1.8} /></span>
              <span className="cv-copy"><strong>السيرة الذاتية</strong><small>تعرّف على خبراتي ومهاراتي</small></span>
              <ArrowUpLeft className="link-arrow" size={19} strokeWidth={1.7} />
            </a>
          </motion.section>

          <motion.section {...enter(0.28)} className="platform-section" aria-labelledby="platforms-title">
            <div className="section-heading"><span className="section-index">02 /</span><h2 id="platforms-title">تجدني أيضاً هنا</h2><span className="heading-rule" /></div>
            <div className="platform-grid">
              {platforms.map((platform) => (
                <a className="platform-card" href={platform.url} key={platform.english} target="_blank" rel="noopener noreferrer" aria-label={`ملفي على ${platform.name}`}>
                  <span className={`platform-mark ${platform.className}`} dir="ltr">{platform.mark}</span>
                  <span className="platform-copy"><strong>{platform.name}</strong><small>{platform.category}</small></span>
                  <ArrowUpLeft className="platform-arrow" size={16} strokeWidth={1.7} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.section>

          <motion.section {...enter(0.38)} className="connect-section" aria-labelledby="connect-title">
            <div className="section-heading"><span className="section-index">03 /</span><h2 id="connect-title">لنبقَ على تواصل</h2><span className="heading-rule" /></div>
            <div className="connect-links">
              <a href="mailto:razanbalata@gmail.com"><Mail size={18} strokeWidth={1.7} /><span>راسلني عبر البريد</span><ArrowUpLeft size={17} className="link-arrow" /></a>
              <a href="https://www.linkedin.com/in/razan-balata-18a134391" target="_blank" rel="noopener noreferrer"><Linkedin size={18} strokeWidth={1.7} /><span>تواصل معي على LinkedIn</span><ExternalLink size={16} className="link-arrow" /></a>
            </div>
          </motion.section>
        </div>

        <footer className="site-footer"><span>© {new Date().getFullYear()} رزان بلاطة</span><span>صُنعت بشغف <ArrowDownLeft size={13} aria-hidden="true" /></span></footer>
      </div>
    </main>
  );
}