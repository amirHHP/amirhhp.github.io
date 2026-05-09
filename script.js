const translations = {
    en: {
        dir: 'ltr',
        title: 'amirHHP | Portfolio',
        heroTitle: 'Crafting Digital Experiences with AI',
        heroSub: 'Developer & Creator focusing on intelligent tools and seamless user interfaces.',
        langBtn: 'فارسی',
        viewProject: 'View on GitHub',
        footerText: '© 2024 amirHHP. Built with passion.',
        projects: {
            jaliz: {
                title: 'Jaliz',
                desc: 'AI-powered gardening assistant. Optimizes plant health with hyper-local weather data and expert care tips.'
            },
            mirzabenevis_recorder: {
                title: 'MirzaBenevis Recorder',
                desc: 'Chrome extension for meeting professionals. Records audio and provides instant AI transcription and summaries.'
            },
            red_fish: {
                title: 'Red Fish',
                desc: 'Smart Leitner box for language learners. Uses spaced repetition to help you master vocabulary efficiently.'
            },
            mirzabenevis2: {
                title: 'MirzaBenevis 2',
                desc: 'Next-gen meeting captioner. Real-time transcription and structured summaries for seamless collaboration.'
            }
        }
    },
    fa: {
        dir: 'rtl',
        title: 'امیر اچ‌اچ‌پی | پورتفولیو',
        heroTitle: 'خلق تجربه‌های دیجیتال با هوش مصنوعی',
        heroSub: 'توسعه‌دهنده و خالق ابزارهای هوشمند با تمرکز بر رابط‌های کاربری روان.',
        langBtn: 'English',
        viewProject: 'مشاهده در گیت‌هاب',
        footerText: '© ۲۰۲۴ امیر اچ‌اچ‌پی. ساخته شده با عشق.',
        projects: {
            jaliz: {
                title: 'جالیز',
                desc: 'دستیار باغبانی هوشمند. بهینه‌سازی سلامت گیاهان با داده‌های آب و هوایی فوق محلی و نکات مراقبتی تخصصی.'
            },
            mirzabenevis_recorder: {
                title: 'میرزابنویس ریکوردر',
                desc: 'افزونه کروم برای حرفه‌ای‌ها. ضبط صدا و ارائه رونوشت و خلاصه فوری جلسات با هوش مصنوعی.'
            },
            red_fish: {
                title: 'رد فیش (ماهی قرمز)',
                desc: 'جعبه لایتنر هوشمند برای زبان‌آموزان. استفاده از تکرار فاصله‌دار برای تسلط بهینه بر واژگان جدید.'
            },
            mirzabenevis2: {
                title: 'میرزابنویس ۲',
                desc: 'نسل جدید زیرنویس‌ساز جلسات. رونویسی همزمان و ایجاد خلاصه‌های ساختاریافته برای همکاری بی‌نقص.'
            }
        }
    }
};

let currentLang = 'fa';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'fa' : 'en';
    const t = translations[currentLang];

    // Update body direction and attributes
    document.body.dir = t.dir;
    document.documentElement.lang = currentLang;

    // Update static text
    document.title = t.title;
    document.querySelector('[data-t="heroTitle"]').textContent = t.heroTitle;
    document.querySelector('[data-t="heroSub"]').textContent = t.heroSub;
    document.querySelector('[data-t="langBtn"]').textContent = t.langBtn;
    document.querySelector('[data-t="footerText"]').textContent = t.footerText;

    // Update projects
    document.querySelectorAll('[data-project]').forEach(card => {
        const key = card.getAttribute('data-project');
        const projectData = t.projects[key];
        card.querySelector('.project-title').textContent = projectData.title;
        card.querySelector('.project-desc').textContent = projectData.desc;
        card.querySelector('.project-link span').textContent = t.viewProject;
    });
}

// Scroll Animation Logic
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animation observer
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Language toggle listener
    document.querySelector('.lang-switch').addEventListener('click', switchLanguage);

    // Set initial language (default to Farsi as requested)
    // We call switchLanguage once or just set it manually. 
    // Since we want Farsi as default and the code starts with 'fa' as default but switchLanguage toggles it,
    // let's just initialize the DOM.
    switchLanguage(); // This will flip to English first if currentLang is 'fa'. 
    // Fix:
    currentLang = 'en'; // set to opposite of desired initial
    switchLanguage(); // will flip to 'fa' and apply translations
});
