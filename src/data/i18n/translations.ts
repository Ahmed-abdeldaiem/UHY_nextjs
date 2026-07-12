/**
 * Site-wide translations — English (default) & Arabic
 * ---------------------------------------------------
 * ALL user-facing text lives here. Components read via useLanguage().t
 * To add a new string: add it to both `en` and `ar` objects under the same key.
 */

export type Locale = "en" | "ar";

export const DEFAULT_LOCALE: Locale = "en";

export const translations = {
  en: {
    meta: {
      homeTitle: "UHY Egypt | Audit, Tax & Advisory Services",
      homeDescription:
        "UHY Egypt provides specialist audit, tax and advisory services to local and international clients across Egypt since 1997.",
    },
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      locations: "Locations",
      insights: "Insights",
      services: "Services",
      getInTouch: "Get in Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      allServices: "All services",
      viewAllServices: "View all services",
    },
    topBar: {
      brand: "UHY EGYPT",
      cairoLabel: "Cairo",
      alexLabel: "Alexandria",
    },
    serviceItems: {
      auditAndReview: "Audit & Limited Review",
      bookkeeping: "Bookkeeping",
      taxAndInternationalTax: "Tax & International Tax",
      transferPricing: "Transfer Pricing Files",
      internalAudit: "Internal Audit & Control",
      fraudExamination: "Fraud & Embezzlement Examination",
      financialAssessment: "Financial Position Assessment",
      feasibilityStudies: "Project Feasibility Studies",
      managementConsulting: "Management Consulting",
      contractConsulting: "Contract Consulting",
    },
    servicesPage: {
      title: "Our Services",
      description:
        "Comprehensive audit, tax, advisory and consulting solutions tailored for businesses operating in Egypt and across borders.",
      comingSoon: "Detailed service pages coming soon.",
    },
    hero: {
      title: "Connect to possibility",
      description:
        "We help you plan a tax efficient structure, improve your profits and increase the value of your business. We are not just solving tax and accounting matters; we simply help our clients grow their businesses.",
      primaryCta: "Discover Our Services",
      secondaryCta: "Explore Insights",
      imageAlt:
        "A wide panoramic shot of the modern Cairo skyline at sunset with sleek glass corporate skyscrapers.",
      branchLabel: {
        cairo: "Cairo Branch",
        alexandria: "Alexandria Branch",
      },
      contactCta: "Contact this office",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide",
      slides: {
        cairoTeam: {
          title: "One Team, Endless Possibilities",
          description:
            "Our Cairo team unites dedicated professionals committed to helping your business grow with integrity, precision and excellence.",
        },
        alexLeadership: {
          title: "Leadership Built on Trust",
          description:
            "From our Alexandria office, we deliver specialized audit, tax and advisory services rooted in decades of local expertise.",
        },
        alexExcellence: {
          title: "Excellence in Every Detail",
          description:
            "Waled Mounir & Muhammad Arafa — a partnership devoted to precision, compliance and lasting client relationships.",
        },
      },
    },
    pillars: {
      cta: "Find out more",
      goal: {
        title: "Our Goal",
        description:
          "To empower Egyptian businesses with world-class audit, tax and advisory solutions that drive sustainable growth and lasting value.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the trusted partner of choice for businesses in Egypt and the region, connecting local expertise to global possibilities.",
      },
      mission: {
        title: "Our Mission",
        description:
          "To deliver integrity, excellence and personalized service that helps our clients navigate complexity and unlock their full potential.",
      },
    },
    partnership: {
      eyebrow: "Global Impact, Local Presence",
      title: "A Partnership of Success and Excellence with UHY International",
      paragraph1:
        "Being part of the distinguished UHY International network allows us to provide professional integration that transcends borders. Our clients benefit from a global standard of excellence combined with deep-rooted local expertise.",
      paragraph2:
        "We take pride in being recognized as a success story within the global network, consistently delivering high-impact solutions that drive growth for Egyptian enterprises on a world stage.",
      globalOffices: "Global Offices",
      countries: "Countries",
      badgeTitle: "Success Story",
      badgeDescription: "Recognized for excellence within the UHY global network.",
      imageAlt: "A professional team meeting in a high-end Cairo office overlooking the Nile.",
    },
    offices: {
      sectionEyebrow: "Our Presence",
      sectionTitle: "Visit Our Offices",
      contactPartner: "Contact Partner",
      getDirections: "Get Directions",
      cairo: {
        name: "Cairo Office",
        company: "UHY United For Auditing, Tax, Advisory & Financial Services",
        address: "37, street 200 Degla Maadi Egypt",
      },
      alexandria: {
        name: "Alexandria Office",
        company: "UHY Waled Mounir and Muhammad Arafa",
        address: "38 El-Prince Ibrahim Street Ezbet Saad Smouha Egypt",
      },
    },
    globalReach: {
      title: "Global Network, Local Presence",
      description:
        "As a member of UHY International, we offer our clients access to the expertise and reach of over 340 offices across more than 95 countries, ensuring seamless cross-border solutions.",
      cta: "See our global reach",
      globalOffices: "Global Offices",
      countries: "Countries",
    },
    services: {
      sectionEyebrow: "Our Expertise",
      sectionTitle: "Integrated Business Solutions",
      audit: {
        title: "Audit & Assurance",
        description:
          "Providing independent audit and assurance services that build trust, integrity, and transparency for Egypt's leading listed and private companies.",
        cta: "Learn more",
      },
      tax: {
        title: "Tax Advisory",
        description:
          "Navigating the complex Egyptian tax landscape with strategic compliance and planning solutions to optimize value.",
        cta: "View details",
      },
      advisory: {
        title: "Business Advisory",
        description:
          "Strategic guidance for digital transformation, risk management, and operational efficiency to improve profits.",
        cta: "Explore",
      },
      finance: {
        title: "Corporate Finance",
        description:
          "M&A advisory, valuations, and due diligence services tailored for the Egyptian investment market and international stakeholders.",
        cta: "View services",
      },
    },
    sectors: {
      sectionEyebrow: "Industries",
      sectionTitle: "Focused Expertise in Egypt's Key Sectors",
      allSectors: "All Sectors",
      manufacturing: {
        title: "Manufacturing",
        description: "Supporting industrial growth and supply chain resilience.",
      },
      energy: {
        title: "Energy & Renewables",
        description: "Navigating the transition with specialized audit and advisory.",
      },
      realEstate: {
        title: "Real Estate",
        description: "Advisory for development, construction, and property management.",
      },
    },
    insights: {
      sectionTitle: "Latest Insights",
      viewAll: "View all updates",
      taxReform: {
        category: "Tax Update",
        title: "Egypt's 2026 Corporate Tax Reform: Key Considerations",
        excerpt:
          "A deep dive into the latest regulatory shifts and how your enterprise can maintain compliance while optimizing tax efficiency.",
        readTime: "5 min read",
        date: "Oct 12, 2025",
      },
      marketVolatility: {
        category: "Business Advisory",
        title: "Navigating Market Volatility in Emerging Economies",
        excerpt:
          "UHY Egypt's specialists share strategic frameworks for resilient growth within Egypt's evolving economic landscape.",
        readTime: "8 min read",
        date: "Oct 08, 2025",
      },
    },
    cta: {
      title: "Ready to scale your business?",
      description:
        "Contact our Egypt-based partners today for a confidential consultation on your audit, tax, and advisory needs.",
      primary: "Get in Touch",
      secondary: "Find Our Offices",
    },
    footer: {
      tagline:
        "Providing specialist audit, tax and advisory services to local and international clients across Egypt since 1997.",
      cairoOffice: "Cairo Office",
      alexandriaOffice: "Alexandria Office",
      expertise: "Expertise",
      quickLinks: "Quick Links",
      followUs: "Follow us",
      getInTouchTitle: "Let's work together",
      getInTouchCta: "Get in Touch",
      auditAssurance: "Audit & Assurance",
      taxAdvisory: "Tax Advisory",
      submitRfp: "Submit RFP",
      availability: "Available for consultation",
      copyright: "© Copyright 2026 UHY International Ltd. All Rights Reserved.",
      disclosure: "Disclosure",
      privacy: "Privacy policy",
      cookies: "Cookies policy",
    },
    pages: {
      underConstruction: "Page under construction",
    },
  },

  ar: {
    meta: {
      homeTitle: "UHY مصر | خدمات التدقيق والضرائب والاستشارات",
      homeDescription:
        "تقدم UHY مصر خدمات متخصصة في التدقيق والضرائب والاستشارات للعملاء المحليين والدوليين في جميع أنحاء مصر منذ عام 1997.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      expertise: "خبراتنا",
      locations: "فروعنا",
      insights: "رؤى وتحليلات",
      services: "الخدمات",
      getInTouch: "تواصل معنا",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      allServices: "جميع الخدمات",
      viewAllServices: "عرض جميع الخدمات",
    },
    topBar: {
      brand: "UHY EGYPT",
      cairoLabel: "القاهرة",
      alexLabel: "الإسكندرية",
    },
    serviceItems: {
      auditAndReview: "المراجعة والفحص المحدود",
      bookkeeping: "إمساك الدفاتر",
      taxAndInternationalTax: "الضرائب والضرائب الدولية",
      transferPricing: "ملفات السعر المحايد",
      internalAudit: "المراجعة والرقابة الداخلية",
      fraudExamination: "فحص الاحتيال والاختلاس",
      financialAssessment: "تقييم الوضع المالي",
      feasibilityStudies: "دراسات جدوى المشروعات",
      managementConsulting: "الاستشارات الإدارية",
      contractConsulting: "الاستشارات التعاقدية",
    },
    servicesPage: {
      title: "خدماتنا",
      description:
        "حلول شاملة في المراجعة والضرائب والاستشارات مصممة للشركات العاملة في مصر وعبر الحدود.",
      comingSoon: "صفحات تفصيلية لكل خدمة قريباً.",
    },
    hero: {
      title: "اتصل بآفاق جديدة",
      description:
        "نساعدك على التخطيط لهيكل ضريبي فعال، وتحسين أرباحك، وزيادة قيمة أعمالك. نحن لا نقتصر على حل مسائل الضرائب والمحاسبة فحسب، بل نساعد عملاءنا على تنمية أعمالهم.",
      primaryCta: "اكتشف خدماتنا",
      secondaryCta: "استكشف الرؤى",
      imageAlt: "منظر بانورامي لأفق القاهرة الحديث عند الغروب مع ناطحات سحاب زجاجية.",
      branchLabel: {
        cairo: "فرع القاهرة",
        alexandria: "فرع الإسكندرية",
      },
      contactCta: "تواصل مع هذا الفرع",
      previousSlide: "الشريحة السابقة",
      nextSlide: "الشريحة التالية",
      goToSlide: "الانتقال إلى الشريحة",
      slides: {
        cairoTeam: {
          title: "فريق واحد، إمكانات لا حدود لها",
          description:
            "يجمع فريق القاهرة نخبة من المحترفين الملتزمين بمساعدة أعمالك على النمو بنزاهة ودقة وتميز.",
        },
        alexLeadership: {
          title: "قيادة قائمة على الثقة",
          description:
            "من مكتبنا في الإسكندرية، نقدم خدمات متخصصة في المراجعة والضرائب والاستشارات مبنية على عقود من الخبرة المحلية.",
        },
        alexExcellence: {
          title: "تميز في كل التفاصيل",
          description:
            "وليد منير ومحمد عرفة — شراكة مكرسة للدقة والامتثال وبناء علاقات دائمة مع العملاء.",
        },
      },
    },
    pillars: {
      cta: "اعرف المزيد",
      goal: {
        title: "الهدف",
        description:
          "تمكين المؤسسات المصرية من خلال حلول عالمية المستوى في التدقيق والضرائب والاستشارات لتحقيق نمو مستدام وقيمة دائمة.",
      },
      vision: {
        title: "الرؤية",
        description:
          "أن نكون الشريك الموثوق المفضل للأعمال في مصر والمنطقة، بربط الخبرة المحلية بآفاق عالمية لا محدودة.",
      },
      mission: {
        title: "الرسالة",
        description:
          "تقديم النزاهة والتميز وخدمة مخصصة تساعد عملاءنا على تجاوز التعقيدات وتحقيق إمكاناتهم الكاملة.",
      },
    },
    partnership: {
      eyebrow: "تأثير عالمي، حضور محلي",
      title: "شراكة نجاح وتميز مع شبكة UHY العالمية",
      paragraph1:
        "انضمامنا إلى شبكة UHY International المتميزة يتيح لنا تقديم تكامل مهني يتجاوز الحدود. يستفيد عملاؤنا من معيار عالمي للتميز مع خبرة محلية راسخة.",
      paragraph2:
        "نفخر بكوننا قصة نجاح ضمن الشبكة العالمية، نقدم باستمرار حلولاً عالية التأثير تدفع نمو المؤسسات المصرية على الساحة العالمية.",
      globalOffices: "مكاتب عالمية",
      countries: "دولة",
      badgeTitle: "قصة نجاح",
      badgeDescription: "معترف بها للتميز ضمن شبكة UHY العالمية.",
      imageAlt: "اجتماع فريق مهني في مكتب فاخر بالقاهرة يطل على النيل.",
    },
    offices: {
      sectionEyebrow: "حضورنا",
      sectionTitle: "زر مكاتبنا",
      contactPartner: "شريك الاتصال",
      getDirections: "احصل على الاتجاهات",
      cairo: {
        name: "مكتب القاهرة",
        company: "UHY United For Auditing, Tax, Advisory & Financial Services",
        address: "37 شارع 200 دجلة المعادي مصر",
      },
      alexandria: {
        name: "مكتب الإسكندرية",
        company: "UHY Waled Mounir and Muhammad Arafa",
        address: "38 شارع الأمير إبراهيم عزبة سعد سموحة مصر",
      },
    },
    globalReach: {
      title: "شبكة عالمية، حضور محلي",
      description:
        "كعضو في UHY International، نوفر لعملائنا الوصول إلى خبرة وأكثر من 340 مكتباً في أكثر من 95 دولة، لضمان حلول سلسة عبر الحدود.",
      cta: "اكتشف انتشارنا العالمي",
      globalOffices: "مكاتب عالمية",
      countries: "دولة",
    },
    services: {
      sectionEyebrow: "خبراتنا",
      sectionTitle: "حلول أعمال متكاملة",
      audit: {
        title: "التدقيق والتأكيد",
        description:
          "تقديم خدمات تدقيق وتأكيد مستقلة تبني الثقة والنزاهة والشفافية لكبرى الشركات المدرجة والخاصة في مصر.",
        cta: "اعرف المزيد",
      },
      tax: {
        title: "الاستشارات الضريبية",
        description:
          "التنقل في المشهد الضريبي المصري المعقد بحلول امتثال وتخطيط استراتيجي لتحسين القيمة.",
        cta: "عرض التفاصيل",
      },
      advisory: {
        title: "الاستشارات الإدارية",
        description:
          "إرشاد استراتيجي للتحول الرقمي وإدارة المخاطر والكفاءة التشغيلية لتحسين الأرباح.",
        cta: "استكشف",
      },
      finance: {
        title: "التمويل المؤسسي",
        description:
          "استشارات الاندماج والاستحواذ والتقييمات والعناية الواجبة المصممة لسوق الاستثمار المصري وأصحاب المصلحة الدوليين.",
        cta: "عرض الخدمات",
      },
    },
    sectors: {
      sectionEyebrow: "القطاعات",
      sectionTitle: "خبرة متخصصة في القطاعات الرئيسية في مصر",
      allSectors: "جميع القطاعات",
      manufacturing: {
        title: "الصناعة",
        description: "دعم النمو الصناعي ومرونة سلسلة التوريد.",
      },
      energy: {
        title: "الطاقة والمتجددة",
        description: "مواكبة التحول بخدمات تدقيق واستشارات متخصصة.",
      },
      realEstate: {
        title: "العقارات",
        description: "استشارات للتطوير والبناء وإدارة الممتلكات.",
      },
    },
    insights: {
      sectionTitle: "أحدث الرؤى",
      viewAll: "عرض جميع التحديثات",
      taxReform: {
        category: "تحديث ضريبي",
        title: "إصلاح ضريبة الشركات في مصر 2026: اعتبارات رئيسية",
        excerpt:
          "نظرة معمقة على أحدث التحولات التنظيمية وكيف يمكن لمؤسستك الحفاظ على الامتثال مع تحسين الكفاءة الضريبية.",
        readTime: "5 دقائق قراءة",
        date: "12 أكتوبر 2025",
      },
      marketVolatility: {
        category: "استشارات إدارية",
        title: "التعامل مع تقلبات السوق في الاقتصادات الناشئة",
        excerpt:
          "يشارك متخصصو UHY مصر أطراً استراتيجية للنمو المرن ضمن المشهد الاقتصادي المتطور في مصر.",
        readTime: "8 دقائق قراءة",
        date: "08 أكتوبر 2025",
      },
    },
    cta: {
      title: "هل أنت مستعد لتوسيع أعمالك؟",
      description:
        "تواصل مع شركائنا في مصر اليوم للحصول على استشارة سرية حول احتياجاتك في التدقيق والضرائب والاستشارات.",
      primary: "تواصل معنا",
      secondary: "اعثر على مكاتبنا",
    },
    footer: {
      tagline:
        "نقدم خدمات متخصصة في التدقيق والضرائب والاستشارات للعملاء المحليين والدوليين في جميع أنحاء مصر منذ عام 1997.",
      cairoOffice: "مكتب القاهرة",
      alexandriaOffice: "مكتب الإسكندرية",
      expertise: "خبراتنا",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      getInTouchTitle: "لنعمل معاً",
      getInTouchCta: "تواصل معنا",
      auditAssurance: "التدقيق والتأكيد",
      taxAdvisory: "الاستشارات الضريبية",
      submitRfp: "تقديم طلب عرض",
      availability: "متاحون للاستشارة",
      copyright: "© حقوق النشر 2026 UHY International Ltd. جميع الحقوق محفوظة.",
      disclosure: "إفصاح",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
    },
    pages: {
      underConstruction: "الصفحة قيد الإنشاء",
    },
  },
} as const;

/** Use English shape as the canonical translation interface */
export type TranslationKeys = (typeof translations)["en"];
