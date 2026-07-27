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
      siteName: "Waled Mounir & Muhammad Arafa",
      homeTitle: "Waled Mounir & Muhammad Arafa | Audit, Tax & Advisory",
      homeDescription:
        "Waled Mounir & Muhammad Arafa — Certified Public Accountants providing specialist audit, tax and advisory services to local and international clients across Egypt and the Arab world.",
      keywords:
        "Waled Mounir, Muhammad Arafa, CPA Egypt, audit Egypt, tax advisory Egypt, transfer pricing, corporate governance, internal audit, BOKS International Egypt, Cairo accountant, Alexandria accountant",
    },
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      partners: "Partners",
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
      brand: "WALED MOUNIR & MUHAMMAD ARAFA",
      cairoLabel: "Cairo",
      alexLabel: "Alexandria",
    },
    floating: {
      whatsapp: "Chat on WhatsApp",
      email: "Send us an email",
      backToTop: "Back to top",
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
      corporateGovernance: "Corporate Governance",
      contractConsulting: "Contract Consulting",
    },
    servicesPage: {
      title: "Our Services",
      description:
        "Comprehensive audit, tax, advisory and consulting solutions tailored for businesses operating in Egypt and across borders.",
      comingSoon: "Detailed service pages coming soon.",
      hero: {
        eyebrow: "What We Offer",
        title: "Our Services",
        subtitle:
          "Integrated audit, tax, advisory and consulting solutions — engineered to help businesses in Egypt and across the Arab world grow with clarity and confidence.",
      },
      offeringsEyebrow: "Our Expertise",
      offeringsTitle: "Comprehensive Professional Services",
      offeringsSubtitle:
        "A full spectrum of specialized services delivered by seasoned partners and specialists.",
      learnMore: "Learn more",
      detailBreadcrumb: "Services",
      detailHighlightsTitle: "How we help",
      detailContactCta: "Request a consultation",
      detailBackCta: "All services",
      corporate: {
        badge: "For Companies & Institutions",
        title: "Tailored Corporate & Institutional Services",
        description:
          "Dedicated, end-to-end solutions for companies, groups and institutions — from integrated audit, tax and advisory programs to governance, compliance and bespoke engagements built around your organization's scale and objectives.",
        cta: "Talk to our team",
      },
      details: {
        auditAndReview:
          "Independent statutory audits and limited reviews that give stakeholders confidence in the accuracy and integrity of your financial statements.",
        bookkeeping:
          "Accurate, well-organized bookkeeping and accounting records that keep your business compliant and ready for confident decision-making.",
        taxAndInternationalTax:
          "Strategic local and cross-border tax planning and compliance that optimizes your position while carefully managing risk.",
        transferPricing:
          "Robust transfer pricing files and studies that align intercompany transactions with local regulations and OECD guidelines.",
        internalAudit:
          "Internal audit and control reviews that strengthen governance, safeguard assets and improve operational efficiency.",
        fraudExamination:
          "Specialized fraud and embezzlement investigations that uncover irregularities and protect your organization.",
        financialAssessment:
          "In-depth assessment of your financial position to reveal strengths, risks and opportunities for sustainable growth.",
        feasibilityStudies:
          "Data-driven feasibility studies that evaluate the viability of new projects and investments before you commit.",
        managementConsulting:
          "Practical management consulting that sharpens strategy, streamlines processes and lifts performance across your organization.",
        corporateGovernance:
          "Governance frameworks, board advisory and compliance structures that strengthen oversight, accountability and long-term institutional integrity.",
        contractConsulting:
          "Expert contract consulting and review to protect your interests and ensure clear, enforceable agreements.",
      },
      pages: {
        auditAndReview: {
          brief:
            "We deliver independent statutory audits and limited reviews designed to strengthen stakeholder trust. Our approach combines rigorous methodology with a clear understanding of Egyptian regulations and international reporting standards — so your financial statements stand up to scrutiny with clarity and confidence.",
          highlights: [
            "Statutory audits aligned with local and international standards",
            "Limited review engagements tailored to your reporting needs",
            "Clear findings and practical recommendations for management",
          ],
        },
        bookkeeping: {
          brief:
            "Reliable bookkeeping is the foundation of sound financial decisions. We organize, maintain and update your accounting records with precision — giving you accurate books, timely reports and a compliant trail ready for audit, tax filing or investor review at any time.",
          highlights: [
            "Accurate day-to-day bookkeeping and ledger management",
            "Organized records ready for audit and tax submissions",
            "Clear monthly reporting that supports better decisions",
          ],
        },
        taxAndInternationalTax: {
          brief:
            "Egyptian and cross-border tax rules move quickly. Our tax specialists help you stay compliant while identifying legitimate opportunities to optimize your position — whether you operate locally, expand regionally, or manage multi-jurisdiction structures.",
          highlights: [
            "Local tax compliance and strategic planning",
            "Cross-border and international tax guidance",
            "Risk-aware advice that protects and creates value",
          ],
        },
        transferPricing: {
          brief:
            "Intercompany pricing must be defensible. We prepare transfer pricing files and studies that document your related-party transactions in line with Egyptian requirements and OECD guidelines — reducing exposure and supporting a confident dialogue with tax authorities.",
          highlights: [
            "Local file and master file preparation",
            "Benchmarking and documentation aligned with OECD guidance",
            "Support for related-party pricing policies and reviews",
          ],
        },
        internalAudit: {
          brief:
            "Strong internal controls protect value and reputation. Our internal audit work evaluates governance, risk and control frameworks — helping management strengthen processes, safeguard assets and improve operational discipline across the organization.",
          highlights: [
            "Risk-based internal audit planning and execution",
            "Control reviews that strengthen governance",
            "Actionable recommendations for operational improvement",
          ],
        },
        fraudExamination: {
          brief:
            "When irregularities are suspected, speed and discretion matter. We conduct specialized fraud and embezzlement examinations that uncover facts, quantify impact and support management and legal teams with clear, evidence-based findings.",
          highlights: [
            "Confidential fraud and embezzlement investigations",
            "Evidence-based findings for management and counsel",
            "Recommendations to close control gaps and prevent recurrence",
          ],
        },
        financialAssessment: {
          brief:
            "A clear view of your financial position unlocks better strategy. We assess liquidity, performance, structure and risk — delivering an objective picture of strengths, pressure points and opportunities so leadership can plan with confidence.",
          highlights: [
            "Comprehensive review of financial position and performance",
            "Identification of risks, gaps and growth opportunities",
            "Insights that support boards, investors and lenders",
          ],
        },
        feasibilityStudies: {
          brief:
            "Before capital is committed, clarity is essential. Our feasibility studies combine market, financial and operational analysis to test whether a project or investment is viable — helping you proceed, refine or pause with evidence on your side.",
          highlights: [
            "Market, financial and operational feasibility analysis",
            "Scenario modelling and investment appraisal",
            "Decision-ready reports for owners and stakeholders",
          ],
        },
        managementConsulting: {
          brief:
            "Strategy only works when it turns into better operations. We partner with leadership teams to sharpen priorities, streamline processes and lift performance — delivering practical consulting that aligns people, process and results.",
          highlights: [
            "Strategic and operational improvement programs",
            "Process redesign that lifts efficiency and control",
            "Hands-on support that translates plans into results",
          ],
        },
        corporateGovernance: {
          brief:
            "Sound corporate governance builds trust with shareholders, regulators and stakeholders. We help companies and institutions design and strengthen governance frameworks — from board structures and policies to compliance, disclosure and oversight practices that support sustainable growth.",
          highlights: [
            "Governance frameworks tailored to your organization",
            "Board, committee and policy advisory support",
            "Stronger accountability, transparency and compliance",
          ],
        },
        contractConsulting: {
          brief:
            "Contracts shape risk long before disputes arise. We review and advise on commercial agreements so your interests are protected, obligations are clear, and commercial terms support — rather than undermine — your business objectives.",
          highlights: [
            "Commercial contract review and advisory",
            "Clearer terms that protect your interests",
            "Support through negotiation and structuring discussions",
          ],
        },
        corporate: {
          brief:
            "Companies, groups and institutions need more than one-off advice — they need a trusted partner who understands scale, governance and complexity. We design integrated audit, tax, advisory and compliance programs tailored to your organization's structure, sector and growth agenda.",
          highlights: [
            "Integrated service programs for companies and institutions",
            "Governance, compliance and reporting support at scale",
            "A dedicated partner-led approach aligned to your objectives",
          ],
        },
      },
      sectorsEyebrow: "Industries We Serve",
      sectorsTitle: "Deep Expertise Across Key Sectors",
      sectorsSubtitle:
        "Decades of hands-on experience across the most dynamic sectors in Egypt and the Arab world.",
      sectorPrev: "Previous",
      sectorNext: "Next",
      sectorItems: {
        manufacturing: {
          title: "Manufacturing & Industry",
          description: "Supporting industrial growth, cost control and supply-chain resilience.",
        },
        energy: {
          title: "Energy & Renewables",
          description: "Guiding the energy transition with specialized audit and advisory.",
        },
        realEstate: {
          title: "Real Estate & Construction",
          description: "Advisory for development, construction and property management.",
        },
        financialServices: {
          title: "Financial Services",
          description: "Audit and compliance for banks, insurers and investment firms.",
        },
        healthcare: {
          title: "Healthcare & Pharma",
          description: "Financial and regulatory expertise for a demanding, high-stakes sector.",
        },
        retail: {
          title: "Retail & Consumer",
          description: "Insight-driven advisory for fast-moving consumer businesses.",
        },
        technology: {
          title: "Technology & Telecom",
          description: "Helping innovative, high-growth companies scale with confidence.",
        },
        hospitality: {
          title: "Tourism & Hospitality",
          description: "Specialized support for hotels, resorts and travel operators.",
        },
        agriculture: {
          title: "Agriculture & Food",
          description: "Advisory across the agri-food value chain and export markets.",
        },
        publicSector: {
          title: "Public Sector & NGOs",
          description: "Governance, transparency and IPSAS-aligned reporting.",
        },
        transport: {
          title: "Transport & Logistics",
          description: "Financial clarity for mobility, shipping and logistics networks.",
        },
        education: {
          title: "Education",
          description: "Trusted advisory for schools, universities and training providers.",
        },
      },
    },
    hero: {
      title: "Fast • Flexible • Focused",
      description:
        "As a member of BOKS International, we deliver agile audit, tax and advisory solutions that help Egyptian businesses grow with confidence and clarity.",
      primaryCta: "Discover Our Services",
      secondaryCta: "Explore Insights",
      imageAlt:
        "A wide panoramic shot of the modern Cairo skyline at sunset with sleek glass corporate skyscrapers.",
      branchLabel: {
        cairo: "Cairo Branch",
        alexandria: "Alexandria Branch",
      },
      contactCta: "Request a consultation",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide",
      slides: {
        cairoTeam: {
          badge: "Trusted Financial Consultants",
          title: "One Team, Endless Possibilities",
          description:
            "Our team brings together a select group of professionals committed to helping your business grow with integrity, accuracy, and excellence.",
        },
        alexLeadership: {
          badge: "Certified Public Accountants",
          title: "Leadership Built on Trust",
          description:
            "We offer specialized auditing, tax and consulting services based on decades of local and international experience.",
        },
        alexExcellence: {
          badge: "Audit, Tax & Advisory Experts",
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
          "Empowering organizations and businesses through world-class audit, tax, and consulting solutions to achieve sustainable growth and lasting value.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the preferred trusted business partner in Egypt and the Arab world, linking local expertise with unlimited global prospects.",
      },
      mission: {
        title: "Our Mission",
        description:
          "We are committed to providing customized consulting and implementation solutions based on the highest standards of integrity and excellence, to enable our partners to overcome operational challenges and fully realize their investment aspirations.",
      },
    },
    partnership: {
      eyebrow: "Global Impact, Local Presence",
      title: "An accredited independent member of BOKS International",
      paragraph1:
        "An independent member of BOKS International, a top 10 global alliance of expert firms with more than 70 quality-assured member firms in over 50 countries around the world. With a rapidly growing global presence, their cross-border service offering facilitates the international operations of businesses of all sizes and ambitions. Supporting firm growth and development, BOKS International is the global alliance of choice offering clients fast and effective access to quality-assured professionals around the globe.",
      paragraph2:
        "Supporting firm growth and development, we are the global alliance of choice offering clients fast and effective access to professionals around the globe.",
      memberFirms: "Member Firms",
      countries: "Countries",
      badgeTitle: "A Top 10 Global Alliance of Professional Accountancy & Law Firms",
      imageAlt: "A professional team meeting in a high-end Cairo office overlooking the Nile.",
    },
    offices: {
      sectionEyebrow: "Our Presence",
      sectionTitle: "Visit Our Offices",
      contactPartner: "Contact Partner",
      contactPartnerHint: "Chat on WhatsApp",
      phoneLabel: "Phone",
      mobileLabel: "Mobile",
      getDirections: "Get Directions",
      viewAllLocations: "View all locations",
      cairo: {
        name: "Cairo Office",
        company: "United For Auditing, Tax, Advisory & Financial Services",
        address:
          "Building 4, 4th Floor, Arkan Plaza, Plot 31, Zayed 2000 Compound, El Sheikh Zayed, Giza Governorate, Egypt.",
      },
      alexandria: {
        name: "Alexandria Office",
        company: "Waled Mounir & Mohammed Arafa",
        address: "38 El Bakly Street, at the intersection with Prince Ibrahim Mosque Street - Ezbet Saad, Smouha - Alexandria",
      },
    },
    locationsPage: {
      meta: {
        title: "Our Locations | Waled Mounir & Muhammad Arafa",
        description:
          "Visit our Cairo and Alexandria offices. Find addresses, contact details and Google Maps directions for Waled Mounir & Muhammad Arafa.",
      },
      hero: {
        eyebrow: "Our Presence",
        title: "Our Locations",
        subtitle:
          "Our offices in the Arab Republic of Egypt — We welcome you in Cairo and Alexandria and serve all our clients in all governorates as well as the countries of the Arab world.",
      },
      mapLabel: "Office location on Google Maps",
      contactOffice: "Contact this office",
    },
    successPartners: {
      eyebrow: "Trusted by Leaders",
      title: "Our Success Partners",
      subtitle:
        "We are proud to serve leading institutions and enterprises — a reflection of the depth, capability and trust behind every engagement we deliver.",
      cta: "View key partners",
      logoAlt: "Success partner",
    },
    partnersPage: {
      meta: {
        title: "Success Partners | Waled Mounir & Muhammad Arafa",
        description:
          "Discover key institutions and companies that trust Waled Mounir & Muhammad Arafa for audit, tax and advisory excellence across Egypt.",
      },
      hero: {
        eyebrow: "Client Trust",
        title: "Success Partners",
        subtitle:
          "Our work with major organizations and enterprises demonstrates the strength of our practice — precision, integrity and results at institutional scale.",
      },
      intro: {
        eyebrow: "A Network of Confidence",
        title: "Institutions that choose excellence",
        body:
          "From industry leaders to specialized enterprises, our success partners represent long-standing relationships built on professional rigor and measurable value. Their trust is the clearest measure of our capability.",
      },
      stats: {
        partners: "Success Partners",
        institutions: "Institutional Clients",
        trust: "Trusted Engagements",
      },
      grid: {
        eyebrow: "Featured Partners",
        title: "Key partners who inspire our best work",
        subtitle:
          "A selection of leading organizations that rely on us for audit, tax, advisory and governance excellence — among many more success partners we are proud to serve.",
      },
      cta: {
        title: "Ready to join our success partners?",
        description:
          "Let's discuss how our team can support your organization's next chapter with the same rigor trusted by leading institutions.",
        primary: "Get in Touch",
        secondary: "Explore Our Services",
      },
    },
    expertisePage: {
      meta: {
        title: "Our Expertise | Waled Mounir & Muhammad Arafa",
        description:
          "Partner credentials, landmark professional publications and participation in major book fairs, Jarir Bookstore and accredited university forums across the Middle East.",
      },
      hero: {
        eyebrow: "Depth of Experience",
        title: "Our Expertise",
        subtitle:
          "Decades of professional leadership — expressed through practice, authorship, translation and presence at leading regional forums.",
      },
      strengths: {
        eyebrow: "Team Strength",
        title: "What Powers Our Practice",
        subtitle:
          "Four pillars that define how our partners and specialists deliver clarity, confidence and results.",
        items: {
          experience: {
            title: "25+ Years of Mastery",
            description:
              "Hands-on leadership across audit, tax and advisory — refined through high-stakes engagements for leading enterprises.",
          },
          multidisciplinary: {
            title: "A Multidisciplinary Force",
            description:
              "Auditors, tax specialists and advisors working as one team — precise where it matters, agile where it counts.",
          },
          regional: {
            title: "Egypt & the Arab World",
            description:
              "Deep local insight paired with regional reach — grounded in Egypt, trusted across Arab markets.",
          },
          thoughtLeadership: {
            title: "Thought Leadership",
            description:
              "Authorship, professional translation and academic presence that shape the profession beyond the engagement room.",
          },
        },
      },
      publications: {
        eyebrow: "Authorship & Professional Translation",
        title: "Landmark Publications in the Middle East",
        subtitle:
          "Our founding partners co-authored and professionally translated some of the region's most significant references in sports economics, internal control and governance.",
        viewDetails: "View publication details",
        viewDetailsSoon: "Details coming soon",
        authorsLabel: "Authors",
        translatorsLabel: "Professional translation",
        items: {
          footballEconomics: {
            badge: "Bestseller",
            title: "Football Economics — From the Pitch to the Markets",
            subtitle: "A professional research encyclopedia on sports investment",
            credit: "Authored by: Batel Albatel, Muhammad Arafa & Waled Mounir",
            description:
              "The first of its kind in the Arabic library — an applied, professional and research reference serving academics, specialists and decision-makers in sports management, economics and accounting.",
          },
          internalAuditCoso: {
            badge: "Professional Translation",
            title: "Internal Control Review & Compliance",
            subtitle: "Documentation and testing under the new COSO framework",
            credit: "Translated by: Batel Albatel, Muhammad Arafa & Waled Mounir",
            description:
              "A professional reference for auditors and accountants — a precise scholarly Arabic translation of one of the world's leading works on internal control and compliance under the COSO framework.",
          },
          corruptionSports: {
            badge: "Institutional Publication",
            title: "Corruption & Fraud in Sport",
            subtitle: "Eighteen chapters spanning theory, practice, control and governance",
            credit: "Authored by: Batel Albatel, Muhammad Arafa & Waled Mounir",
            description:
              "A comprehensive Arabic reference on corruption and fraud in sport — combining theoretical depth with case studies and legal–control tools for response. Issued under the official patronage of the Batel Abdullah Albatel Foundation for Research & Studies.",
          },
          auditingFraudCases: {
            badge: "Professional Translation",
            title: "Auditing & Fraud Cases — Issues and Investigations",
            subtitle: "Major cases of earnings manipulation and embezzlement",
            credit: "Translated by: Muhammad Arafa & Waled Mounir — Author: Michael C. Knapp",
            description:
              "Major financial scandals that expose control failures and offer practical lessons on fraud, earnings manipulation, and the vital role of transparency and oversight.",
          },
        },
      },
      presence: {
        eyebrow: "Forums & Presence",
        title: "Exhibitions, Bookstores & Academic Platforms",
        subtitle:
          "Our partners and publications are present at major international book fairs, leading bookstore networks and accredited university events.",
        galleries: {
          cairoFair: {
            title: "Cairo International Book Fair",
            description: "Showcasing our publications at one of the Arab world's largest cultural events.",
          },
          jarir: {
            title: "Jarir Bookstore — Kingdom of Saudi Arabia",
            description: "Our editions available through Jarir's retail network across Saudi Arabia.",
          },
          riyadhFair: {
            title: "Riyadh International Book Fair",
            description: "Active participation at the Riyadh International Book Fair.",
          },
          universities: {
            title: "Universities & Professional Conferences",
            description: "Engagement with accredited universities and specialist conferences.",
          },
        },
      },
      partnerMoments: {
        eyebrow: "In the Field",
        title: "With Our Success Partners",
        subtitle:
          "Moments from our work alongside leading institutions and business figures — relationships built on trust, delivery and shared ambition.",
        captions: {
          ahly: "With the CFO of Al Ahly Sporting Club, Egypt",
          arkas: "With Arkas Egypt",
          rastamani: "With Emirati businessman Abdulrahman Al-Rastamani",
        },
      },
    },
    globalReach: {
      title: "Global Network, Local Presence",
      description:
        "As a member of BOKS International, we offer our clients access to a global network of 235 offices across 75 countries, supported by 123 member firms and over 5,100 professionals worldwide.",
      cta: "See our global reach",
      globalOffices: "Offices Worldwide",
      countries: "Countries Represented",
    },
    teamStrength: {
      eyebrow: "Our People, Our Power",
      title: "The Force Behind Egypt's Most Ambitious Projects",
      slogan: ["Efficiency", "Commitment", "Excellence"],
      description:
        "For more than 25 years, our multidisciplinary team of auditors, tax specialists and advisors has stood behind high-stakes engagements for leading enterprises across Egypt and the Arab world — from large-scale industrial ventures to complex cross-border transactions where precision is everything.",
      imageAlt: "Upper Hand Young — Efficiency, Commitment, Excellence",
      features: {
        megaProjects: {
          title: "Mega-Project Expertise",
          description:
            "Trusted on large-scale, high-complexity engagements where accuracy and diligence are non-negotiable.",
        },
        regionalReach: {
          title: "Egypt & the Arab World",
          description:
            "Deep local insight paired with regional reach across the region's key and fast-growing markets.",
        },
        eliteTeam: {
          title: "An Elite Team",
          description:
            "Seasoned partners and specialists bringing decades of hands-on, sector-specific experience.",
        },
        trackRecord: {
          title: "A Proven Track Record",
          description:
            "A reputation built on results, integrity and long-standing trust with industry leaders.",
        },
      },
    },
    about: {
      meta: {
        title: "About Us | Waled Mounir & Muhammad Arafa",
        description:
          "Over 25 years of trusted expertise in audit, tax and advisory across Egypt — led by Waled Mounir & Muhammad Arafa, members of the BOKS International global network.",
      },
      hero: {
        eyebrow: "Who We Are",
        title: "About Us",
        subtitle:
          "A journey of confidence and excellence in financial, accounting, tax and professional consulting services — combining over 25 years of local Arab expertise with the global strength of the BOKS International network.",
      },
      story: {
        eyebrow: "Our Story",
        title: "Built on Decades of Proven Expertise in Audit, Tax & Advisory",
        paragraph1:
          "Our work stands on a foundation of more than 25 years of hands-on expertise, led by our founding partners, Waled Mounir and Muhammad Arafa, whose careers span decades of leadership in audit, tax and advisory across Egypt and the Arab world.",
        paragraph2:
          "Together, our partners and team bring deep, practical experience across Egypt's most dynamic sectors — from manufacturing and real estate to energy and financial services — pairing technical mastery with a genuine understanding of the local market.",
        paragraph3:
          "As a proud member of BOKS International, we combine this seasoned expertise with the reach of a truly global network — delivering world-class standards alongside the personal, responsive service our clients value.",
        highlight: "Efficiency • Commitment • Excellence — the principles behind everything we do.",
        imageAlt: "Our founding partners and professional team.",
      },
      stats: {
        years: "Years of Experience",
        offices: "Offices in Egypt",
        globalOffices: "Global Offices",
        countries: "Countries",
      },
      partnership: {
        eyebrow: "A Global Partnership",
        title: "Part of the BOKS International Network",
        description:
          "Our membership in BOKS International gives our clients seamless access to world-class resources, cross-border expertise and a truly global reach — delivered with the trusted local service they know.",
        members: "Members Worldwide",
        offices: "Offices Worldwide",
        countries: "Countries Represented",
        employees: "Employees Worldwide",
        feeIncome: "Annual Fee Income",
        partners: "Partners Worldwide",
      },
      values: {
        eyebrow: "Our Values",
        title: "What Sets Us Apart",
        subtitle:
          "The principles that guide our work and shape every client relationship.",
        integrity: {
          title: "Integrity",
          description:
            "We uphold the highest standards of transparency and professional ethics in everything we do.",
        },
        excellence: {
          title: "Excellence",
          description:
            "Decades of expertise applied with precision to deliver dependable, high-impact results.",
        },
        clientFocus: {
          title: "Client Focus",
          description:
            "Personal, responsive service built on long-lasting relationships and genuine partnership.",
        },
        globalReach: {
          title: "Global Reach",
          description:
            "Local insight backed by the worldwide network and standards of BOKS International.",
        },
      },
      leadership: {
        eyebrow: "Our Leadership",
        title: "Meet Our leaders and partners",
        subtitle:
          "Decades of specialized expertise in audit, tax and advisory — the driving force behind our firm.",
        credentialsLabel: "Qualifications & Memberships",
        partners: {
          walidMounir: {
            name: "Waled Mounir",
            role: "Tax Partner",
            credentials: [
              "Former Tax Partner at a leading global firm",
              "Master's in Public Finance & Taxation",
              "Diploma in Taxation, Accounting & Finance",
              "International Public Sector Accounting Standards (CIPSAS – ACCA)",
              "Tax Partner & Head of Transfer Pricing",
              "Fellow, Egyptian Association for Taxes (Fellow.EAT)",
              "Fellow, Egyptian Association for Public Finance & Taxes (Fellow.EAPFT)",
              "Secretary-General & Founder, Association of Accountants & Internal Auditors (AAIA)",
              "Certified Trainer, International Finance Corporation (IFC) – World Bank Group",
              "Member, Arab Federation of Accountants & Auditors (M.AFAA)",
              "Member, U.S. National Association of Tax Professionals (M.NATP)",
            ],
          },
          mohamedArafa: {
            name: "Muhammad Arafa",
            role: "Audit Partner",
            credentials: [
              "Former Audit Partner at a leading global firm",
              "Master's in Accounting and Auditing",
              "International QuickBooks Certificate from Intuit International",
              "Fellow, Egyptian Society of Certified Public Accountants",
              "Member, Arab Federation of Accountants & Auditors",
              "Treasurer, Association of Accountants & Internal Auditors (AAIA)",
              "Secretary-General, Research & Development Committee – AAIA",
              "Certified Professional Trainer, International Finance Corporation (IFC) – World Bank Group",
              "IPSAS Certified (ACCA)",
              "Expert in professional training & competency development in accounting and auditing",
            ],
          },
        },
      },
      pillarsTitle: "Our Purpose",
      pillarsSubtitle: "The goal, vision and mission that drive us forward.",
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
      sectionTitle: "Specialized expertise in key sectors in Egypt and the Arab world",
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
      viewAll: "View all insights",
      readMore: "Read more",
      backToInsights: "All insights",
      relatedTitle: "More insights",
      page: {
        meta: {
          title: "Insights | Waled Mounir & Muhammad Arafa",
          description:
            "Professional insights on audit, tax, governance, cyber risk and financial reporting from Waled Mounir & Muhammad Arafa.",
        },
        hero: {
          eyebrow: "Knowledge Hub",
          title: "Insights",
          subtitle:
            "Practical analysis on risk, reporting and regulation — written for decision-makers across Egypt and the region.",
        },
      },
      articles: {
        thirdPartyRisk: {
          category: "Cyber & Risk",
          title: "The EY Breach: Why Third-Party Risk Assessment Matters",
          excerpt:
            "A third-party platform supporting tax services was compromised — a clear reminder that your security perimeter extends to every vendor with access to your data.",
          readTime: "6 min read",
          date: "Apr 2026",
          body: [
            {
              type: "p",
              text: "Days ago, EY announced a security breach that occurred through a third-party platform used to support tax services provided to clients. Attackers accessed the system between 28 March and 12 April 2026 and downloaded documents containing sensitive personal and financial data belonging to a number of the firm's clients — before the breach was discovered several weeks later.",
            },
            {
              type: "p",
              text: "This is precisely why Third-Party Risk Assessment must happen before connecting or integrating with any external party — and why ongoing monitoring after onboarding is non-negotiable. In the financial sector especially, frameworks such as SAMA CSF and NCA ECC controls exist for a reason: risk does not stop at the organization's own boundary. It extends to every third party with access to its data or systems.",
            },
            {
              type: "h3",
              text: "What a third-party security assessment should cover",
            },
            {
              type: "ul",
              items: [
                "Cyber maturity: Does the provider have an effective information-security program, documented policies and clear incident-management processes — or only certificates without real application?",
                "Certifications and attestations: ISO 27001 and SOC 2 Type II are positive signals, but never enough alone. Confirm that the certificate scope actually covers the service or system you will use.",
                "Independent external assessments: Reports from neutral parties give a more objective picture than vendor self-assessments.",
                "Penetration testing & vulnerability assessment: An old report is not enough. Tests should be periodic, critical findings closed, and retests should prove remediation.",
                "Periodic review: Assessment cannot stop at contracting. Review frequency should reflect service nature, data sensitivity and access rights granted. The more sensitive the data — or the deeper the integration — the more frequent the reviews must be.",
              ],
            },
            {
              type: "h3",
              text: "Bottom line",
            },
            {
              type: "p",
              text: "An organization may have a strong internal security posture and still be breached through the weakest link in its supply chain. Third-party risk assessment is not a compliance formality — it is a core line of defense for data, systems and business continuity.",
            },
          ],
        },
        meahcoRevenue: {
          category: "Governance & Audit",
          title: "MEAHCO Revenue Recognition Case: What Professionals Should Learn",
          excerpt:
            "A Saudi CMA case against board and audit committee members over premature revenue recognition — and why the Egyptian affiliate was not named in the decision.",
          readTime: "10 min read",
          date: "2026",
          body: [
            {
              type: "p",
              text: "This matter concerns Middle East Healthcare Company (Saudi German Health), listed on the Saudi Exchange — not a general accusation against every Saudi German hospital in every country.",
            },
            {
              type: "h3",
              text: "The story from the beginning",
            },
            {
              type: "p",
              text: "Between 2018 and Q3 2021, a serious accounting issue appeared in the company's financial statements relating to revenue recognition. The Saudi Capital Market Authority stated that a number of board and audit committee members manipulated the financial statements by recognizing aggregate unearned revenues of SAR 358,044,138 despite knowing that collectability was weak.",
            },
            {
              type: "p",
              text: "In simple terms: revenues were recorded as if they were due and collectible, while collection probability was weak. The statements therefore painted a better picture than reality — revenues, assets and book value appeared higher than they should. The Authority described this as creating an incorrect and misleading impression of the company's book value.",
            },
            {
              type: "p",
              text: "The case ended with a final decision by the Appeal Committee for the Resolution of Securities Disputes against 11 violators from the board and audit committee, with combined fines of around SAR 18 million, and temporary bans from working at CMA-supervised entities for some individuals.",
            },
            {
              type: "h3",
              text: "Where does the audit committee come in?",
            },
            {
              type: "p",
              text: "In any listed company, the audit committee reviews financial statements, oversees reporting integrity and engages with the external auditor. In this case, the conviction was not limited to board members — it also included audit committee members, because the Authority considered they knew collectability was weak and recognition still proceeded.",
            },
            {
              type: "h3",
              text: "Was the external auditor convicted?",
            },
            {
              type: "p",
              text: "According to the published official statement, the CMA did not announce a conviction of the external auditor in this decision. The decision focused on board and audit committee members and did not mention a penalty against an external audit firm. Professionally, it is incorrect to say the external auditor was \"convicted\" in this case unless a separate official decision says so.",
            },
            {
              type: "p",
              text: "What is known for part of the period: the 2020 report notes KPMG Al Fozan & Partners as auditor with no qualifications on the 2020 statements; the 2021 report notes Ernst & Young as external auditor with no remarks on the year ended 31 December 2021.",
            },
            {
              type: "h3",
              text: "Was the Egyptian affiliate involved?",
            },
            {
              type: "p",
              text: "Based on available sources, the CMA decision does not state that the Egyptian company or Saudi German hospitals in Egypt were party to the manipulation. The decision specifically addresses the financial statements of the Saudi listed company for 2018–2021.",
            },
            {
              type: "p",
              text: "There are commercial and management links between the Saudi entity and certain Egypt projects — for example, management oversight arrangements and related-party ownership structures — but those links alone do not prove involvement in the Saudi listing violation.",
            },
            {
              type: "h3",
              text: "Professional takeaway",
            },
            {
              type: "p",
              text: "The core issue was revenue inflation inside the Saudi listed company. Official conviction targeted board and audit committee members. There is no official evidence, in the sources reviewed, of Egyptian-entity involvement or a public naming of the Egyptian company's statutory auditor. The decisive documents for Egypt would be the local company's latest financial statements or the general assembly minutes appointing its auditor.",
            },
          ],
        },
        securitizationBubble: {
          category: "Real Estate & Finance",
          title: "Is Egypt's Real Estate Sector in Crisis — and Can Securitization Fuel a Bubble?",
          excerpt:
            "Securitization can unlock liquidity for developers — but without discipline it can also inflate prices and recreate, in mechanism if not scale, the risks of 2008.",
          readTime: "7 min read",
          date: "2026",
          body: [
            {
              type: "p",
              text: "Securitization converts a pool of future financial rights — such as installments on real-estate units — into bonds or securities offered to investors. This lets developers obtain liquidity quickly instead of waiting years to collect installments.",
            },
            {
              type: "p",
              text: "Securitization played a major role in the 2008 global mortgage crisis, when U.S. institutions expanded lending to borrowers with limited repayment capacity, packaged those loans into securities sold as relatively safe investments, and then faced collapsing values as borrowers defaulted and house prices fell.",
            },
            {
              type: "p",
              text: "Hence the question: could expanding bonds backed by installments or cash flows linked to Egyptian real-estate units push prices unrealistically and later produce a property bubble?",
            },
            {
              type: "h3",
              text: "What a property bubble is",
            },
            {
              type: "p",
              text: "A property bubble occurs when prices rise far beyond intrinsic value or real purchasing power — driven by speculation, excessive financing and the belief that prices will never fall. When demand retreats or buyers cannot pay, the bubble bursts and prices drop sharply.",
            },
            {
              type: "h3",
              text: "Securitization alone is not the crisis",
            },
            {
              type: "p",
              text: "Securitization by itself does not cause a real-estate crisis. Risk arises when it is used without controls: overvaluing units, weak credit assessment of buyers, expanding sales on speculative demand, or issuing bonds against uncertain cash flows.",
            },
            {
              type: "p",
              text: "Its impact on Egypt's market therefore depends on regulatory strength, asset valuation quality, portfolio quality and transparent risk disclosure. Used as a disciplined financing tool, it can support liquidity and activity. Used to expand financing unchecked and detach prices from real demand, it can help form a bubble similar — in mechanism, not necessarily in scale — to 2008.",
            },
          ],
        },
        ias15Revenue: {
          category: "Financial Reporting",
          title: "IAS 15 / IFRS 15: Revenue from Contracts with Customers",
          excerpt:
            "Revenue is not recognized merely because a sale occurred or cash was collected — it follows analysis of the contract and when performance obligations are satisfied.",
          readTime: "8 min read",
          date: "2026",
          body: [
            {
              type: "p",
              text: "Under the international standard on revenue from contracts with customers, revenue is not recognized merely upon sale or collection. It follows analysis of the contract with the customer. In short: revenue equals the amount an entity is entitled to in exchange for goods or services it has actually transferred to the customer.",
            },
            {
              type: "p",
              text: "A central question is when percentage-of-completion may be used to recognize revenue for service or construction contracts. Percentage-of-completion is not used simply because a property is under construction. First, one of three conditions must prove that the performance obligation is satisfied over time. If none applies, treatment is typically deferred income until delivery — then revenue when control transfers.",
            },
            {
              type: "h3",
              text: "Condition 1 — The customer receives benefits as the entity performs",
            },
            {
              type: "p",
              text: "The customer benefits from the service at the same time it is performed — for example cleaning, maintenance, security or monthly consulting.",
            },
            {
              type: "h3",
              text: "Condition 2 — The entity creates or enhances an asset the customer controls as it is created",
            },
            {
              type: "p",
              text: "The entity builds an asset and the customer controls it while it is being built — for example a contractor building on land owned by the customer.",
            },
            {
              type: "h3",
              text: "Condition 3 — No alternative use + enforceable right to payment",
            },
            {
              type: "p",
              text: "This condition is especially important in real estate. Both parts must be met: (1) the asset has no alternative use to the entity — it cannot readily be redirected to another customer because of the contract or customer-specific specifications; and (2) the entity has an enforceable right to payment for performance completed to date, including an appropriate profit margin.",
            },
            {
              type: "p",
              text: "Only when one of these over-time criteria is met can percentage-of-completion support revenue recognition. Otherwise, caution — and deferral until control truly transfers — is the professional path.",
            },
          ],
        },
      },
    },
    cta: {
      title: "Ready to scale your business?",
      description:
        "Contact our Egypt-based partners today for a confidential consultation on your audit, tax, and advisory needs.",
      primary: "Get in Touch",
      secondary: "Find Our Offices",
    },
    contact: {
      meta: {
        title: "Contact Us | Waled Mounir & Muhammad Arafa",
        description:
          "Get in touch with our Cairo and Alexandria teams for audit, tax and advisory support. Send us a message and we'll respond promptly.",
      },
      hero: {
        eyebrow: "Contact Us",
        title: "Let's Start a Conversation",
        subtitle:
          "Whether you need audit, tax or advisory support, our partners in Cairo and Alexandria are ready to help. Reach out and we'll get back to you shortly.",
      },
      info: {
        title: "Get in Touch",
        description:
          "Reach us directly, or fill in the form and our team will respond as soon as possible.",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        officesTitle: "Our Offices",
        followTitle: "Follow Us",
        responseNote: "We typically respond within one business day.",
      },
      form: {
        title: "Send Us a Message",
        subtitle: "Fill in your details and choose the service you're interested in.",
        name: "Full Name",
        namePlaceholder: "e.g. Ahmed Hassan",
        email: "Email Address",
        emailPlaceholder: "you@company.com",
        phone: "Phone",
        phonePlaceholder: "+20 ...",
        company: "Company",
        companyPlaceholder: "Your company",
        service: "Service of Interest",
        servicePlaceholder: "Select a service",
        otherService: "Other consultation",
        message: "Message",
        messagePlaceholder: "Tell us how we can help...",
        submit: "Send Message",
        sending: "Sending...",
        optional: "Optional",
        requiredName: "Please enter your name",
        requiredEmail: "Please enter your email",
        invalidEmail: "Please enter a valid email address",
        requiredService: "Please select a service",
        requiredMessage: "Please enter your message",
        minMessage: "Message must be at least 10 characters",
      },
      toast: {
        successTitle: "Message Sent!",
        successMessage:
          "Thank you for reaching out. Our team will get back to you shortly.",
        errorTitle: "Something Went Wrong",
        errorMessage:
          "Your message couldn't be sent. Please try again, or email us directly.",
        close: "Close",
      },
    },
    footer: {
      tagline:
        "Providing specialist audit, tax and advisory services to local and international clients across Egypt as a member of BOKS International.",
      cairoOffice: "Cairo Office",
      alexandriaOffice: "Alexandria Office",
      expertise: "Expertise",
      quickLinks: "Quick Links",
      followUs: "Follow us",
      getInTouchTitle: "Let's work together",
      getInTouchCta: "Get in Touch",
      availability: "Available for consultation",
      copyright: "© Copyright 2026 UPPER HAND YOUNG Waled Mounir & Mohammed Arafa. All Rights Reserved.",
      developedBy: "Developed by Ahmed Abdeldaiem",
      developedByLinkedIn: "Ahmed Abdeldaiem on LinkedIn",
      developedByEmail: "Email Ahmed Abdeldaiem",
      disclosure: "Disclosure",
      privacy: "Privacy policy",
      cookies: "Cookies policy",
    },
    privacyPage: {
      meta: {
        title: "Privacy Notice | Waled Mounir & Muhammad Arafa",
        description:
          "How Waled Mounir & Muhammad Arafa collect, use and protect personal information when you visit our website or use our professional services.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Privacy Notice",
        subtitle:
          "This notice explains what information we gather about you, what we use it for, who we share it with, and your rights regarding your personal data.",
      },
      lastUpdated: "Last updated: July 2026",
      contactCta: "Contact us about privacy",
      sections: [
        {
          id: "approach",
          title: "Our approach",
          paragraphs: [
            "It is our policy to collect only the minimum information we require from you. If you believe we hold more information about you than is needed, or if you have any questions about how we handle your personal data, please contact us using the details below.",
            "Although you do not have to provide any of your personal information to us, if we ask you to do so and you refuse, we may be unable to provide you with the information or professional services you request.",
          ],
        },
        {
          id: "contact",
          title: "Contact details",
          paragraphs: [
            "If you have any questions about this Privacy Notice, the way your personal information is processed by us, or would like to exercise one of your rights explained below, please contact us via:",
          ],
          bullets: [
            "Email: info@wmcpa-eg.com",
            "Cairo Office: Building 4, 4th Floor, Arkan Plaza, Plot 31, Zayed 2000 Compound, El Sheikh Zayed, Giza, Egypt",
            "Alexandria Office: 38 El-Prince Ibrahim Street, Ezbet Saad, Smouha, Alexandria, Egypt",
            "WhatsApp: +2 011 1117 4241",
          ],
        },
        {
          id: "data-types",
          title: "Types of personal data we process",
          paragraphs: [
            "We take every effort to minimise the personal data we collect and process to what is essential for communicating with you and delivering our professional services. Depending on how you interact with us, this may include:",
          ],
          bullets: [
            "Identity and contact details — such as first name, last name, job title, company name and email address",
            "Enquiry details submitted through our website contact form (including the service you select and your message)",
            "Communication records related to consultations, engagements and ongoing professional correspondence",
            "Technical data that may be collected automatically when you visit our website (such as browser type, device information and approximate location derived from IP address), where applicable",
          ],
        },
        {
          id: "data-subjects",
          title: "Categories of data subjects",
          paragraphs: [
            "Personal data we process may include, but is not limited to, clients, prospective clients, website visitors, suppliers, contractors and professional contacts.",
          ],
        },
        {
          id: "legal-basis",
          title: "Legal basis for processing",
          paragraphs: [
            "Where we collect and store your personal data, we do so on one or more of the following bases:",
          ],
          bullets: [
            "Contract — to provide our professional services and perform our obligations when you engage us",
            "Legitimate interests — for example responding to enquiries, improving our website and services, and sending relevant professional communications where appropriate",
            "Consent — where you have agreed to a specific processing activity and no other lawful basis applies",
            "Legal obligation — where we must retain or process information to comply with applicable laws and professional regulations",
          ],
        },
        {
          id: "use",
          title: "How we use your information",
          paragraphs: [
            "We use personal information to:",
          ],
          bullets: [
            "Respond to enquiries and requests submitted through our website or other channels",
            "Deliver audit, tax, advisory and related professional services",
            "Manage client relationships and professional correspondence",
            "Operate, secure and improve our website",
            "Comply with legal, regulatory and professional requirements",
          ],
        },
        {
          id: "sources",
          title: "Data sources",
          paragraphs: [
            "We may obtain personal data from direct sources — such as communications with you by phone, email, WhatsApp or website form submissions — and, where appropriate, from publicly available professional sources or referrals from colleagues and business contacts.",
          ],
        },
        {
          id: "sharing",
          title: "Sharing and service providers",
          paragraphs: [
            "To operate our firm and deliver services, we may use carefully selected service providers (for example website hosting, email delivery and IT support). These providers process data on our behalf and are expected to protect it appropriately.",
            "We do not sell your personal data. We may share information where required by law, regulation, professional standards, or to protect our legal rights and the security of our systems and clients.",
            "As a member of the BOKS International network, limited information may be shared with network members only where necessary to support a cross-border engagement or referral that you have requested or agreed to, and subject to appropriate confidentiality arrangements.",
          ],
        },
        {
          id: "transfers",
          title: "International transfers",
          paragraphs: [
            "Some of our service providers or collaboration partners may process data outside Egypt, including in locations that form part of global cloud or IT infrastructure. Where such transfers occur, we take reasonable steps to ensure your information remains protected through contractual and technical safeguards appropriate to the nature of the processing.",
          ],
        },
        {
          id: "security",
          title: "Data security",
          paragraphs: [
            "We apply technological and organisational measures designed to protect personal information against unauthorised access, loss or misuse. Access to personal data is limited to authorised persons who need it for legitimate professional purposes and who are expected to maintain its confidentiality.",
          ],
        },
        {
          id: "retention",
          title: "Data retention",
          paragraphs: [
            "We retain personal data only for as long as necessary for the purposes described in this notice, or as required by applicable law and professional obligations.",
            "Prospect and marketing-related contact data that is no longer accurate or relevant is deleted or updated. Where we retain contact details based on a legitimate interest in professional outreach, we periodically review that data and do not keep it longer than necessary — typically for a period not exceeding five years before reassessment, unless a longer period is required for an active engagement or legal reason.",
            "We actively minimise the personal data we request or hold. Unless you engage us professionally, we aim to store only what is necessary to make and maintain appropriate contact with you.",
          ],
        },
        {
          id: "rights",
          title: "Your rights",
          paragraphs: [
            "Subject to applicable law, you may have the right to:",
          ],
          bullets: [
            "Request access to the personal data we hold about you",
            "Ask us to correct inaccurate or incomplete information",
            "Request deletion of your personal data where we no longer need it",
            "Object to or restrict certain processing activities",
            "Withdraw consent where processing is based on consent",
            "Lodge a complaint with a competent supervisory authority where applicable",
          ],
          closing:
            "To exercise any of these rights, please contact us at info@wmcpa-eg.com. We may need to verify your identity before responding to a request.",
        },
        {
          id: "cookies",
          title: "Cookies policy",
          paragraphs: [
            "Our website may use cookies and similar technologies to help the site function reliably, remember language preferences, and understand how visitors use our pages so we can improve the experience.",
            "Essential cookies are used where needed for basic site operation. Analytics or preference cookies, if used, help us measure traffic and improve content. You can control or delete cookies through your browser settings at any time. Blocking some cookies may affect how certain parts of the site work.",
            "For any questions about cookies or tracking on this website, please contact us at info@wmcpa-eg.com.",
          ],
        },
        {
          id: "disclosure",
          title: "Disclosure",
          paragraphs: [
            "Waled Mounir & Muhammad Arafa is an independent professional services firm operating in Egypt. References on this website to BOKS International describe our membership in an international network of independent firms.",
            "BOKS International member firms are separate and independent legal entities. No member firm is responsible for the acts or omissions of another, and membership does not create a partnership, joint venture or agency relationship between member firms unless expressly agreed in writing for a specific engagement.",
            "Information published on this website is for general guidance only and does not constitute legal, tax, audit or other professional advice. You should obtain advice tailored to your circumstances before acting on any information found here.",
            "We take reasonable care to keep website content accurate and up to date, but we do not accept liability for decisions made solely on the basis of website materials. Client engagements are governed by the terms of the relevant engagement letter and applicable professional standards.",
          ],
        },
        {
          id: "updates",
          title: "Updates to this notice",
          paragraphs: [
            "We may update this Privacy Notice from time to time to reflect changes in our practices, technology, legal requirements or professional obligations. The “Last updated” date at the top of this page indicates when the notice was most recently revised.",
          ],
        },
      ],
    },
    pages: {
      underConstruction: "Page under construction",
    },
  },

  ar: {
    meta: {
      siteName: "وليد منير ومحمد عرفة",
      homeTitle: "وليد منير ومحمد عرفة | التدقيق والضرائب والاستشارات",
      homeDescription:
        "وليد منير ومحمد عرفة — محاسبون قانونيون يقدّمون خدمات متخصصة في التدقيق والضرائب والاستشارات للعملاء المحليين والدوليين في مصر والوطن العربي.",
      keywords:
        "وليد منير, محمد عرفة, محاسب قانوني مصر, تدقيق مصر, استشارات ضريبية, تسعير المعاملات, حوكمة الشركات, مراجعة داخلية, BOKS International مصر, محاسب القاهرة, محاسب الإسكندرية",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      expertise: "خبراتنا",
      partners: "شركاء النجاح",
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
      brand: "وليد منير ومحمد عرفة",
      cairoLabel: "القاهرة",
      alexLabel: "الإسكندرية",
    },
    floating: {
      whatsapp: "تواصل عبر واتساب",
      email: "راسلنا عبر البريد",
      backToTop: "العودة إلى الأعلى",
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
      corporateGovernance: "حوكمة الشركات",
      contractConsulting: "الاستشارات التعاقدية",
    },
    servicesPage: {
      title: "خدماتنا",
      description:
        "حلول شاملة في المراجعة والضرائب والاستشارات مصممة للشركات العاملة في مصر وعبر الحدود.",
      comingSoon: "صفحات تفصيلية لكل خدمة قريباً.",
      hero: {
        eyebrow: "ماذا نقدّم",
        title: "خدماتنا",
        subtitle:
          "حلول متكاملة في التدقيق والضرائب والاستشارات — مصمّمة لمساعدة الشركات في مصر والوطن العربي على النمو بوضوح وثقة.",
      },
      offeringsEyebrow: "خبراتنا",
      offeringsTitle: "خدمات مهنية متكاملة",
      offeringsSubtitle:
        "منظومة كاملة من الخدمات المتخصصة يقدّمها شركاء وخبراء متمرّسون.",
      learnMore: "اعرف المزيد",
      detailBreadcrumb: "الخدمات",
      detailHighlightsTitle: "كيف نساعدك",
      detailContactCta: "اطلب استشارة",
      detailBackCta: "جميع الخدمات",
      corporate: {
        badge: "للشركات والمؤسسات",
        title: "خدمات خاصة للشركات والمؤسسات",
        description:
          "حلول متكاملة ومخصّصة للشركات والمجموعات والمؤسسات — من برامج التدقيق والضرائب والاستشارات المتكاملة إلى الحوكمة والامتثال والمهام المصمّمة خصيصاً بما يتناسب مع حجم مؤسستك وأهدافها.",
        cta: "تحدّث إلى فريقنا",
      },
      details: {
        auditAndReview:
          "مراجعة قانونية مستقلة وفحص محدود يمنحان أصحاب المصلحة الثقة في دقة قوائمك المالية ونزاهتها.",
        bookkeeping:
          "إمساك دفاتر وسجلات محاسبية دقيقة ومنظمة تحافظ على امتثال شركتك وجاهزيتها لاتخاذ القرار بثقة.",
        taxAndInternationalTax:
          "تخطيط وامتثال ضريبي محلي ودولي بشكل استراتيجي يحسّن وضعك الضريبي مع إدارة المخاطر بعناية.",
        transferPricing:
          "إعداد ملفات ودراسات تسعير المعاملات بما يتوافق مع اللوائح المحلية ومعايير منظمة التعاون الاقتصادي (OECD).",
        internalAudit:
          "مراجعة داخلية وأنظمة رقابة تعزّز الحوكمة وتحمي الأصول وترفع كفاءة العمليات.",
        fraudExamination:
          "تحقيقات متخصصة في الغش والاختلاس تكشف المخالفات وتحمي مؤسستك.",
        financialAssessment:
          "تقييم معمّق لمركزك المالي يكشف نقاط القوة والمخاطر وفرص النمو المستدام.",
        feasibilityStudies:
          "دراسات جدوى مبنية على البيانات لتقييم جدوى المشاريع والاستثمارات الجديدة قبل الالتزام بها.",
        managementConsulting:
          "استشارات إدارية عملية تصقل الاستراتيجية وتبسّط العمليات وترفع الأداء عبر مؤسستك.",
        corporateGovernance:
          "أطر حوكمة واستشارات لمجالس الإدارة وهياكل امتثال تعزّز الرقابة والمساءلة والنزاهة المؤسسية على المدى الطويل.",
        contractConsulting:
          "استشارات ومراجعة للعقود تحمي مصالحك وتضمن اتفاقيات واضحة قابلة للتنفيذ.",
      },
      pages: {
        auditAndReview: {
          brief:
            "نقدّم خدمات المراجعة القانونية المستقلة والفحص المحدود لتعزيز ثقة أصحاب المصلحة. يجمع نهجنا بين منهجية صارمة وفهم واضح للتشريعات المصرية ومعايير التقارير الدولية — لتظهر قوائمك المالية بوضوح وثقة أمام أي مراجعة.",
          highlights: [
            "مراجعة قانونية وفق المعايير المحلية والدولية",
            "مهام فحص محدود مصمّمة وفق احتياجات تقاريرك",
            "نتائج واضحة وتوصيات عملية للإدارة",
          ],
        },
        bookkeeping: {
          brief:
            "إمساك الدفاتر الموثوق هو أساس القرارات المالية السليمة. ننظّم ونحافظ على سجلاتك المحاسبية بدقة — لتكون دفاترك جاهزة في أي وقت للمراجعة أو الإقرارات الضريبية أو عرضها على المستثمرين.",
          highlights: [
            "إمساك دفاتر يومي دقيق وإدارة الحسابات",
            "سجلات منظّمة وجاهزة للمراجعة والإقرارات",
            "تقارير شهرية واضحة تدعم قرارات أفضل",
          ],
        },
        taxAndInternationalTax: {
          brief:
            "تتحرّك القواعد الضريبية المصرية والعابرة للحدود بسرعة. يساعدك خبراؤنا على البقاء ممتثلين مع تحديد الفرص المشروعة لتحسين وضعك الضريبي — سواء كنت تعمل محلياً أو تتوسّع إقليمياً أو تدير هياكل متعددة الولايات.",
          highlights: [
            "امتثال وتخطيط ضريبي محلي واستراتيجي",
            "إرشاد ضريبي دولي وعابر للحدود",
            "نصائح واعية بالمخاطر تحمي القيمة وتصنعها",
          ],
        },
        transferPricing: {
          brief:
            "يجب أن يكون تسعير المعاملات بين الأطراف المرتبطة قابلاً للدفاع عنه. نعدّ ملفات ودراسات تسعير المعاملات التي توثّق معاملاتك بما يتوافق مع المتطلبات المصرية وإرشادات OECD — لتقليل التعرض ودعم حوار واثق مع السلطات الضريبية.",
          highlights: [
            "إعداد الملف المحلي والملف الرئيسي",
            "دراسات مقارنة وتوثيق وفق إرشادات OECD",
            "دعم سياسات تسعير المعاملات ومراجعتها",
          ],
        },
        internalAudit: {
          brief:
            "الضوابط الداخلية القوية تحمي القيمة والسمعة. تقيّم أعمالنا في المراجعة الداخلية أطر الحوكمة والمخاطر والرقابة — لمساعدة الإدارة على تعزيز العمليات وحماية الأصول ورفع الانضباط التشغيلي عبر المؤسسة.",
          highlights: [
            "تخطيط وتنفيذ مراجعة داخلية مبنية على المخاطر",
            "مراجعات رقابية تعزّز الحوكمة",
            "توصيات قابلة للتنفيذ لتحسين العمليات",
          ],
        },
        fraudExamination: {
          brief:
            "عند الاشتباه بالمخالفات، تكون السرعة والسرية حاسمتين. نجري فحوصات متخصصة للاحتيال والاختلاس تكشف الحقائق وتقدّر الأثر وتدعم الإدارة والفرق القانونية بنتائج واضحة مبنية على الأدلة.",
          highlights: [
            "تحقيقات سرية في الاحتيال والاختلاس",
            "نتائج مبنية على الأدلة للإدارة والمستشارين",
            "توصيات لسد ثغرات الرقابة ومنع التكرار",
          ],
        },
        financialAssessment: {
          brief:
            "الرؤية الواضحة لمركزك المالي تفتح باب استراتيجية أفضل. نقيّم السيولة والأداء والهيكل والمخاطر — لنقدّم صورة موضوعية لنقاط القوة والضغوط والفرص حتى يخطّط القادة بثقة.",
          highlights: [
            "مراجعة شاملة للمركز المالي والأداء",
            "تحديد المخاطر والفجوات وفرص النمو",
            "رؤى تدعم مجالس الإدارة والمستثمرين والمقرضين",
          ],
        },
        feasibilityStudies: {
          brief:
            "قبل الالتزام برأس المال، الوضوح ضروري. تجمع دراسات الجدوى لدينا تحليل السوق والمالية والعمليات لاختبار جدوى المشروع أو الاستثمار — لتساعدك على المضي أو التعديل أو التوقف بثقة مبنية على الأدلة.",
          highlights: [
            "تحليل جدوى سوقي ومالي وتشغيلي",
            "نمذجة سيناريوهات وتقييم للاستثمار",
            "تقارير جاهزة للقرار للملاك وأصحاب المصلحة",
          ],
        },
        managementConsulting: {
          brief:
            "الاستراتيجية لا تنجح إلا إذا تحوّلت إلى عمليات أفضل. نتشارك مع فرق القيادة لصقل الأولويات وتبسيط العمليات ورفع الأداء — باستشارات عملية تربط بين الأشخاص والعمليات والنتائج.",
          highlights: [
            "برامج تحسين استراتيجية وتشغيلية",
            "إعادة تصميم العمليات لرفع الكفاءة والرقابة",
            "دعم عملي يحوّل الخطط إلى نتائج",
          ],
        },
        corporateGovernance: {
          brief:
            "الحوكمة الرشيدة تبني الثقة مع المساهمين والجهات التنظيمية وأصحاب المصلحة. نساعد الشركات والمؤسسات على تصميم وتعزيز أطر الحوكمة — من هياكل مجالس الإدارة والسياسات إلى ممارسات الامتثال والإفصاح والرقابة التي تدعم النمو المستدام.",
          highlights: [
            "أطر حوكمة مصمّمة وفق طبيعة مؤسستك",
            "دعم استشاري لمجالس الإدارة واللجان والسياسات",
            "مساءلة وشفافية وامتثال أقوى",
          ],
        },
        contractConsulting: {
          brief:
            "العقود تشكّل المخاطر قبل نشوء النزاعات بوقت طويل. نراجع ونقدّم المشورة بشأن الاتفاقات التجارية لحماية مصالحك ووضوح الالتزامات وصياغة شروط تدعم أهداف عملك بدلاً من أن تعيقها.",
          highlights: [
            "مراجعة واستشارات للعقود التجارية",
            "شروط أوضح تحمي مصالحك",
            "دعم عبر التفاوض وهيكلة الاتفاقات",
          ],
        },
        corporate: {
          brief:
            "تحتاج الشركات والمجموعات والمؤسسات إلى أكثر من استشارة لمرة واحدة — تحتاج شريكاً موثوقاً يفهم الحجم والحوكمة والتعقيد. نصمّم برامج متكاملة في التدقيق والضرائب والاستشارات والامتثال بما يتناسب مع هيكل مؤسستك وقطاعها وأجندة نموها.",
          highlights: [
            "برامج خدمات متكاملة للشركات والمؤسسات",
            "دعم الحوكمة والامتثال والتقارير على نطاق واسع",
            "نهج يقوده الشركاء ومتوافق مع أهدافك",
          ],
        },
      },
      sectorsEyebrow: "القطاعات التي نخدمها",
      sectorsTitle: "خبرة عميقة عبر القطاعات الرئيسية",
      sectorsSubtitle:
        "عقود من الخبرة العملية في أكثر القطاعات ديناميكية في مصر والوطن العربي.",
      sectorPrev: "السابق",
      sectorNext: "التالي",
      sectorItems: {
        manufacturing: {
          title: "الصناعة والتصنيع",
          description: "دعم النمو الصناعي وضبط التكاليف ومرونة سلاسل الإمداد.",
        },
        energy: {
          title: "الطاقة والطاقة المتجددة",
          description: "مواكبة تحوّل الطاقة بخدمات تدقيق واستشارات متخصصة.",
        },
        realEstate: {
          title: "العقارات والإنشاءات",
          description: "استشارات للتطوير والإنشاء وإدارة الممتلكات.",
        },
        financialServices: {
          title: "الخدمات المالية",
          description: "تدقيق وامتثال للبنوك وشركات التأمين والاستثمار.",
        },
        healthcare: {
          title: "الرعاية الصحية والدواء",
          description: "خبرة مالية وتنظيمية لقطاع دقيق وعالي الحساسية.",
        },
        retail: {
          title: "التجزئة والسلع الاستهلاكية",
          description: "استشارات مبنية على الرؤى للأعمال الاستهلاكية سريعة الحركة.",
        },
        technology: {
          title: "التكنولوجيا والاتصالات",
          description: "مساعدة الشركات المبتكرة وسريعة النمو على التوسّع بثقة.",
        },
        hospitality: {
          title: "السياحة والضيافة",
          description: "دعم متخصص للفنادق والمنتجعات ومشغّلي السفر.",
        },
        agriculture: {
          title: "الزراعة والأغذية",
          description: "استشارات عبر سلسلة القيمة الزراعية الغذائية وأسواق التصدير.",
        },
        publicSector: {
          title: "القطاع العام والجمعيات",
          description: "الحوكمة والشفافية والتقارير وفق معايير (IPSAS).",
        },
        transport: {
          title: "النقل والخدمات اللوجستية",
          description: "وضوح مالي لشبكات النقل والشحن والخدمات اللوجستية.",
        },
        education: {
          title: "التعليم",
          description: "استشارات موثوقة للمدارس والجامعات ومراكز التدريب.",
        },
      },
    },
    hero: {
      title: "سريع • مرن • مركّز",
      description:
        "بصفتنا عضواً في شبكة BOKS International، نقدم حلولاً مرنة في التدقيق والضرائب والاستشارات تساعد المؤسسات المصرية على النمو بثقة ووضوح.",
      primaryCta: "اكتشف خدماتنا",
      secondaryCta: "استكشف الرؤى",
      imageAlt: "منظر بانورامي لأفق القاهرة الحديث عند الغروب مع ناطحات سحاب زجاجية.",
      branchLabel: {
        cairo: "فرع القاهرة",
        alexandria: "فرع الإسكندرية",
      },
      contactCta: "اطلب استشارتك الآن",
      previousSlide: "الشريحة السابقة",
      nextSlide: "الشريحة التالية",
      goToSlide: "الانتقال إلى الشريحة",
      slides: {
        cairoTeam: {
          badge: "مستشارون ماليون موثوقون",
          title: "فريق واحد، إمكانات لا حدود لها",
          description:
            "يجمع فريقنا نخبة من المحترفين الملتزمين بمساعدة أعمالك على النمو بنزاهة ودقة وتميز.",
        },
        alexLeadership: {
          badge: "محاسبون قانونيون معتمدون",
          title: "قيادة قائمة على الثقة",
          description:
            "نقدم خدمات متخصصة في المراجعة والضرائب والاستشارات مبنية على عقود من الخبرة المحلية، والدولية.",
        },
        alexExcellence: {
          badge: "خبراء التدقيق والضرائب والاستشارات",
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
          "تمكين المؤسسات والشركات من خلال حلول عالمية المستوى في التدقيق والضرائب والاستشارات لتحقيق نمو مستدام وقيمة دائمة.",
      },
      vision: {
        title: "الرؤية",
        description:
          "أن نكون الشريك الموثوق المفضل للأعمال في مصر والوطن العربي، بربط الخبرة المحلية بآفاق عالمية لا محدودة.",
      },
      mission: {
        title: "الرسالة",
        description:
          "نلتزم بتقديم حلول استشارية وتطبيقية مخصصة تقوم على أعلى معايير النزاهة والتميز، لتمكين شركائنا من تجاوز التحديات التشغيلية وتحقيق كامل تطلعاتهم الاستثمارية.",
      },
    },
    partnership: {
      eyebrow: "تأثير عالمي، حضور محلي",
      title: "عضو معتمد ومستقل في BOKS International",
      paragraph1:
        "عضو مستقل في BOKS International، أحد أكبر 10 تحالفاً عالمياً للمكاتب المتخصصة، يضم أكثر من 70 مكتباً عضواً مضمون الجودة في أكثر من 50 دولة حول العالم. ومع حضور عالمي سريع النمو، تسهّل خدماتهم العابرة للحدود العمليات الدولية للشركات بمختلف أحجامها وطموحاتها. ودعماً لنمو المكاتب وتطورها، تُعدّ BOKS International التحالف العالمي المفضل الذي يتيح للعملاء وصولاً سريعاً وفعّالاً إلى مهنيين مضمونين بالجودة حول العالم.",
      paragraph2:
        "دعماً لنمو المكاتب وتطورها، نحن التحالف العالمي المفضل الذي يتيح للعملاء وصولاً سريعاً وفعّالاً إلى مهنيين حول العالم.",
      memberFirms: "مكاتب أعضاء",
      countries: "دول",
      badgeTitle: "أحد أكبر 10 تحالفات عالمية لمكاتب المحاسبة والقانون المهنية",
      imageAlt: "اجتماع فريق مهني في مكتب فاخر بالقاهرة يطل على النيل.",
    },
    offices: {
      sectionEyebrow: "حضورنا",
      sectionTitle: "زيارتكم تشرفنا",
      contactPartner: "شريك الاتصال",
      contactPartnerHint: "تواصل عبر واتساب",
      phoneLabel: "هاتف",
      mobileLabel: "موبايل",
      getDirections: "احصل على الاتجاهات",
      viewAllLocations: "عرض جميع المواقع",
      cairo: {
        name: "مكتب القاهرة",
        company: "United For Auditing, Tax, Advisory & Financial Services",
        address:
          "مبنى 4، الطابق الرابع، أركان بلازا، قطعة 31، كمبوند زايد 2000، الشيخ زايد، محافظة الجيزة، مصر.",
      },
      alexandria: {
        name: "مكتب الإسكندرية",
        company: "Waled Mounir & Mohammed Arafa",
        address: "38 ش البقلى مع تقاطع ش مسجد البرنس ابراهيم - عزبة سعد سموحة - اسكندرية",
      },
    },
    locationsPage: {
      meta: {
        title: "فروعنا | وليد منير ومحمد عرفة",
        description:
          "زوروا مكتبينا في القاهرة والإسكندرية. العناوين وبيانات التواصل وخرائط جوجل لوليد منير ومحمد عرفة.",
      },
      hero: {
        eyebrow: "حضورنا",
        title: "فروعنا",
        subtitle:
          "مكاتبنا في جمهورية مصر العربية — نرحّب بكم في القاهرة والإسكندرية ونخدم جميع عملائنا في جميع المحافظات وكذلك دول الوطن العربي.",
      },
      mapLabel: "موقع المكتب على خرائط جوجل",
      contactOffice: "تواصل مع هذا المكتب",
    },
    successPartners: {
      eyebrow: "ثقة القادة",
      title: "شركاء نجاحنا",
      subtitle:
        "نفتخر بخدمة كبرى المؤسسات والشركات — شهادة على عمق خبرتنا وقدراتنا والثقة التي تُبنى مع كل مهمة ننجزها.",
      cta: "عرض أهم الشركاء",
      logoAlt: "شريك نجاح",
    },
    partnersPage: {
      meta: {
        title: "شركاء النجاح | وليد منير ومحمد عرفة",
        description:
          "تعرّف على أبرز المؤسسات والشركات التي تثق بوليد منير ومحمد عرفة في التدقيق والضرائب والاستشارات في مصر.",
      },
      hero: {
        eyebrow: "ثقة العملاء",
        title: "شركاء النجاح",
        subtitle:
          "عملنا مع كبرى المؤسسات والشركات يعكس قوة ممارستنا — دقة ونزاهة ونتائج على مستوى مؤسسي.",
      },
      intro: {
        eyebrow: "شبكة من الثقة",
        title: "مؤسسات تختار التميز",
        body:
          "من روّاد الصناعة إلى المؤسسات المتخصصة، يمثّل شركاء نجاحنا علاقات طويلة الأمد مبنية على الانضباط المهني والقيمة الملموسة. وثقتهم هي أوضح مقياس لقدراتنا.",
      },
      stats: {
        partners: "شركاء نجاح",
        institutions: "عملاء مؤسسيون",
        trust: "مهام موثوقة",
      },
      grid: {
        eyebrow: "شركاء مختارون",
        title: "أبرز الشركاء الذين يلهمون أفضل أعمالنا",
        subtitle:
          "مجموعة مختارة من المؤسسات الرائدة التي تعتمد علينا في التدقيق والضرائب والاستشارات والحوكمة — ضمن شركاء نجاح كثيرين نفتخر بخدمتهم.",
      },
      cta: {
        title: "هل أنتم مستعدون للانضمام إلى شركاء نجاحنا؟",
        description:
          "دعونا نناقش كيف يمكن لفريقنا أن يدعم المرحلة القادمة لمؤسستكم بنفس الدقة التي يثق بها كبار العملاء.",
        primary: "تواصل معنا",
        secondary: "استكشف خدماتنا",
      },
    },
    expertisePage: {
      meta: {
        title: "خبراتنا | وليد منير ومحمد عرفة",
        description:
          "مؤهلات الشريكين، المؤلفات المهنية البارزة، والمشاركة في معارض الكتب ومكتبة جرير والمحافل الجامعية المعتمدة في الشرق الأوسط.",
      },
      hero: {
        eyebrow: "عمق الخبرة",
        title: "خبراتنا",
        subtitle:
          "عقود من الريادة المهنية — تتجسّد في الممارسة والتأليف والترجمة المهنية والحضور في أبرز المحافل الإقليمية.",
      },
      strengths: {
        eyebrow: "قوة الفريق",
        title: "ما الذي يصنع تميّزنا",
        subtitle:
          "أربعة أعمدة تحدّد كيف يقدّم شركاؤنا ومتخصصونا الوضوح والثقة والنتائج.",
        items: {
          experience: {
            title: "خبرة تتجاوز 25 عاماً",
            description:
              "ريادة عملية عبر التدقيق والضرائب والاستشارات — صُقلت عبر مهام عالية الأهمية لكبرى المؤسسات.",
          },
          multidisciplinary: {
            title: "قوة متعددة التخصصات",
            description:
              "مدققون وخبراء ضرائب ومستشارون يعملون كفريق واحد — بدقة حيث يلزم ومرونة حيث تُحسم النتائج.",
          },
          regional: {
            title: "مصر والوطن العربي",
            description:
              "فهم محلي عميق مع امتداد إقليمي — راسخون في مصر وموثوقون عبر الأسواق العربية.",
          },
          thoughtLeadership: {
            title: "ريادة فكرية",
            description:
              "تأليف وترجمة مهنية وحضور أكاديمي يصنع أثراً في المهنة يتجاوز غرفة العمل.",
          },
        },
      },
      publications: {
        eyebrow: "التأليف والترجمة المهنية",
        title: "مؤلفات رائدة في الشرق الأوسط",
        subtitle:
          "شارك شريكاؤنا المؤسسان في تأليف وتعريب بعض أهم المراجع الإقليمية في اقتصاديات الرياضة والرقابة الداخلية والحوكمة.",
        viewDetails: "عرض تفاصيل الإصدار",
        viewDetailsSoon: "التفاصيل قريباً",
        authorsLabel: "تأليف",
        translatorsLabel: "تعريب مهني",
        items: {
          footballEconomics: {
            badge: "الأعلى مبيعاً",
            title: "اقتصاديات كرة القدم — من الملاعب إلى البورصات",
            subtitle: "موسوعة بحثية مهنية في الاستثمار الرياضي",
            credit: "تأليف: باتل الباتل، محمد عرفة، ووليد منير",
            description:
              "الأولى من نوعها في المكتبة العربية — مرجع تطبيقي ومهني وبحثي يخدم الباحثين والمتخصصين وصنّاع القرار في الإدارة والاقتصاد والمحاسبة الرياضية.",
          },
          internalAuditCoso: {
            badge: "تعريب مهني",
            title: "مراجعة الرقابة الداخلية والامتثال",
            subtitle: "التوثيق والاختبار في ظل إطار لجنة COSO الجديد",
            credit: "تعريب: باتل الباتل، محمد عرفة، ووليد منير",
            description:
              "مرجع احترافي للمراجعين والمحاسبين، يُقدّم ترجمة علمية دقيقة لأحد أهم المؤلفات العالمية في مجال الرقابة الداخلية والامتثال وفق إطار COSO.",
          },
          corruptionSports: {
            badge: "إصدار المؤسسة",
            title: "الفساد والاحتيال في الرياضة",
            subtitle: "ثمانية عشر فصلًا بين النظرية والتطبيق والرقابة والحوكمة",
            credit: "تأليف: باتل الباتل، محمد عرفة، ووليد منير",
            description:
              "مرجع عربي متكامل في الفساد والاحتيال بقطاع الرياضة — يجمع العمق النظري بدراسات الحالة والأدوات القانونية والرقابية للمواجهة. صادر برعاية رسمية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات.",
          },
          auditingFraudCases: {
            badge: "تعريب مهني",
            title: "حالات المراجعة والاحتيال — قضايا وتحقيقات",
            subtitle: "حالات كبرى للتلاعب في الأرباح والاختلاسات",
            credit: "تعريب: محمد عرفة ووليد منير — تأليف: مايكل سي. كناب",
            description:
              "فضائح مالية كبرى تكشف ثغرات الرقابة وتقدّم دروساً عملية حول الاحتيال والتلاعب بالأرباح وأهمية الشفافية والمراقبة الفعالة.",
          },
        },
      },
      presence: {
        eyebrow: "المحافل والحضور",
        title: "المعارض والمكتبات والمنصات الأكاديمية",
        subtitle:
          "حضور شريكينا وإصداراتهما في أبرز معارض الكتب الدولية وشبكات المكتبات الرائدة والفعاليات الجامعية المعتمدة.",
        galleries: {
          cairoFair: {
            title: "معرض القاهرة الدولي للكتاب",
            description: "عرض إصداراتنا في أحد أكبر المحافل الثقافية في الوطن العربي.",
          },
          jarir: {
            title: "مكتبة جرير — المملكة العربية السعودية",
            description: "إصداراتنا متاحة عبر شبكة جرير داخل المملكة العربية السعودية.",
          },
          riyadhFair: {
            title: "معرض الرياض الدولي للكتاب",
            description: "مشاركة فاعلة في معرض الرياض الدولي للكتاب.",
          },
          universities: {
            title: "الجامعات والمؤتمرات المهنية",
            description: "مشاركة في الجامعات المعتمدة والمؤتمرات المتخصصة.",
          },
        },
      },
      partnerMoments: {
        eyebrow: "من الميدان",
        title: "مع شركاء نجاحنا",
        subtitle:
          "لحظات من عملنا إلى جانب مؤسسات وشخصيات أعمال رائدة — علاقات مبنية على الثقة والإنجاز والطموح المشترك.",
        captions: {
          ahly: "مع مدير القطاع المالي بالنادي الأهلي المصري",
          arkas: "مع شركة أركاس مصر",
          rastamani: "مع رجل الأعمال الإماراتي عبدالرحمن الرستماني",
        },
      },
    },
    globalReach: {
      title: "شبكة عالمية، حضور محلي",
      description:
        "بصفتنا عضواً في BOKS International، نوفر لعملائنا الوصول إلى شبكة عالمية تضم 235 مكتباً في 75 دولة، مدعومة بـ 123 عضواً وأكثر من 5,100 محترف حول العالم.",
      cta: "اكتشف انتشارنا العالمي",
      globalOffices: "مكاتب حول العالم",
      countries: "دولة ممثلة",
    },
    teamStrength: {
      eyebrow: "قوّتنا في فريقنا",
      title: "القوة وراء أضخم المشاريع في مصر والوطن العربي",
      slogan: ["الكفاءة", "الالتزام", "التميّز"],
      description:
        "منذ أكثر من 25 عاماً، يقف فريقنا متعدد التخصصات من المدققين وخبراء الضرائب والمستشارين خلف أهم المهام لكبرى المؤسسات في مصر والوطن العربي — من المشاريع الصناعية العملاقة إلى الصفقات المعقدة العابرة للحدود حيث الدقة هي كل شيء.",
      imageAlt: "أبر هاند يونج — الكفاءة والالتزام والتميّز",
      features: {
        megaProjects: {
          title: "خبرة في المشاريع العملاقة",
          description:
            "موضع ثقة في المهام الكبرى عالية التعقيد حيث لا تقبل الدقة والعناية أي تهاون.",
        },
        regionalReach: {
          title: "مصر والوطن العربي",
          description:
            "رؤية محلية عميقة مقترنة بانتشار إقليمي عبر أهم أسواق المنطقة وأسرعها نمواً.",
        },
        eliteTeam: {
          title: "فريق من النخبة",
          description:
            "شركاء ومتخصصون مخضرمون يجمعون عقوداً من الخبرة العملية المتخصصة في كل قطاع.",
        },
        trackRecord: {
          title: "سجل حافل بالإنجازات",
          description:
            "سمعة مبنية على النتائج والنزاهة والثقة الممتدة مع روّاد الصناعة.",
        },
      },
    },
    about: {
      meta: {
        title: "من نحن | وليد منير ومحمد عرفة",
        description:
          "أكثر من 25 عاماً من الخبرة الموثوقة في التدقيق والضرائب والاستشارات في مصر — بقيادة وليد منير ومحمد عرفة، وعضوية شبكة BOKS International العالمية.",
      },
      hero: {
        eyebrow: "عن الشركة",
        title: "من نحن",
        subtitle:
          "رحلة من الثقة والتميّز في الخدمات المالية والمحاسبية والضريبية والاستشارات المهنية — بالجمع بين خبرة محلية عربية تتجاوز ٢٥ عامًا، والقوة العالمية لشبكة BOKS International.",
      },
      story: {
        eyebrow: "قصتنا",
        title: "خبرة راسخة تمتد لعقود في التدقيق والضرائب والاستشارات",
        paragraph1:
          "يقوم عملنا على أساس من الخبرة العملية التي تتجاوز 25 عاماً، يقودها شريكاها المؤسسان وليد منير ومحمد عرفة، اللذان تمتد مسيرتهما لعقود من الريادة في التدقيق والضرائب والاستشارات في مصر والوطن العربي.",
        paragraph2:
          "يجمع شركاؤنا وفريقنا خبرة عملية عميقة عبر أكثر القطاعات ديناميكية في مصر — من الصناعة والعقارات إلى الطاقة والخدمات المالية — بمزيج من الإتقان الفني والفهم الحقيقي للسوق المحلي.",
        paragraph3:
          "وبصفتنا عضواً فخوراً في شبكة BOKS International، نقرن هذه الخبرة العريقة بامتداد شبكة عالمية حقيقية — لنقدّم معايير عالمية المستوى مع الخدمة الشخصية سريعة الاستجابة التي يقدّرها عملاؤنا.",
        highlight: "الكفاءة • الالتزام • التميز — المبادئ التي تقف وراء كل ما نقوم به.",
        imageAlt: "شريكانا المؤسسان وفريقنا المهني.",
      },
      stats: {
        years: "عاماً من الخبرة",
        offices: "مكتبان في مصر",
        globalOffices: "مكاتب حول العالم",
        countries: "دولة",
      },
      partnership: {
        eyebrow: "شراكة عالمية",
        title: "جزء من شبكة BOKS International",
        description:
          "تمنح عضويتنا في BOKS International عملاءنا وصولاً سلساً إلى موارد عالمية المستوى وخبرات عابرة للحدود وانتشار عالمي حقيقي — مع الخدمة المحلية الموثوقة التي يعرفونها.",
        members: "عضو حول العالم",
        offices: "مكتب حول العالم",
        countries: "دولة ممثلة",
        employees: "موظف حول العالم",
        feeIncome: "إجمالي الإيرادات السنوية",
        partners: "شريك حول العالم",
      },
      values: {
        eyebrow: "قيمنا",
        title: "ما الذي يميّزنا",
        subtitle: "المبادئ التي توجّه عملنا وتشكّل كل علاقة مع عملائنا.",
        integrity: {
          title: "النزاهة",
          description:
            "نلتزم بأعلى معايير الشفافية وأخلاقيات المهنة في كل ما نقوم به.",
        },
        excellence: {
          title: "التميز",
          description:
            "عقود من الخبرة تُطبَّق بدقة لتقديم نتائج موثوقة وعالية التأثير.",
        },
        clientFocus: {
          title: "التركيز على العميل",
          description:
            "خدمة شخصية سريعة الاستجابة مبنية على علاقات دائمة وشراكة حقيقية.",
        },
        globalReach: {
          title: "انتشار عالمي",
          description:
            "رؤية محلية مدعومة بالشبكة العالمية ومعايير BOKS International.",
        },
      },
      leadership: {
        eyebrow: "قيادتنا",
        title: "تعرّف على القادة والشركاء",
        subtitle:
          "عقود من الخبرة المتخصصة في التدقيق والضرائب والاستشارات — القوة الدافعة وراء شركتنا.",
        credentialsLabel: "المؤهلات والعضويات",
        partners: {
          walidMounir: {
            name: "وليد منير",
            role: "شريك الضرائب",
            credentials: [
              "شريك الضرائب في إحدى الشركات العالمية سابقاً",
              "ماجستير في المالية العامة والضرائب",
              "دبلوم في الضرائب والمحاسبة والمالية",
              "شهادة المعايير الدولية للمحاسبة في القطاع العام (CIPSAS - ACCA)",
              "شريك الضرائب ورئيس قسم تسعير المعاملات",
              "زميل جمعية الضرائب المصرية (Fellow.EAT)",
              "زميل الجمعية المصرية للمالية العامة والضرائب (Fellow.EAPFT)",
              "أمين عام ومؤسس جمعية المحاسبين والمدققين الداخليين (AAIA)",
              "مدرب معتمد من مؤسسة التمويل الدولية (IFC) – مجموعة البنك الدولي",
              "عضو اتحاد المحاسبين والمراجعين العرب (M.AFAA)",
              "عضو رابطة محترفي الضرائب الدولية الأمريكية (M.NATP)",
            ],
          },
          mohamedArafa: {
            name: "محمد عرفة",
            role: "شريك المراجعة",
            credentials: [
              "شريك المراجعة في إحدى الشركات العالمية سابقاً",
              "ماجستير في المحاسبة والمراجعة",
              "حاصل على الشهادة الدولية في QuickBooks من Intuit International",
              "زميل جمعية المحاسبين القانونيين",
              "عضو اتحاد المحاسبين والمراجعين العرب",
              "أمين صندوق جمعية المحاسبين والمدققين الداخليين (AAIA)",
              "أمين عام لجنة البحث والتطوير بجمعية المحاسبين والمدققين الداخليين (AAIA)",
              "مدرب مهني معتمد من مؤسسة التمويل الدولية (IFC) – مجموعة البنك الدولي",
              "حاصل على شهادة المعايير الدولية للقطاع العام (IPSAS) من (ACCA)",
              "خبير في التدريب المهني وتطوير الكفاءات في مجالي المحاسبة والمراجعة",
            ],
          },
        },
      },
      pillarsTitle: "غايتنا",
      pillarsSubtitle: "الهدف والرؤية والرسالة التي تدفعنا إلى الأمام.",
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
      sectionTitle: "خبرة متخصصة في القطاعات الرئيسية في مصر والوطن العربي",
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
      viewAll: "عرض جميع الرؤى",
      readMore: "اقرأ المزيد",
      backToInsights: "جميع الرؤى",
      relatedTitle: "المزيد من الرؤى",
      page: {
        meta: {
          title: "رؤى وتحليلات | وليد منير ومحمد عرفة",
          description:
            "تحليلات مهنية في التدقيق والضرائب والحوكمة والمخاطر السيبرانية والتقارير المالية من وليد منير ومحمد عرفة.",
        },
        hero: {
          eyebrow: "مركز المعرفة",
          title: "رؤى وتحليلات",
          subtitle:
            "تحليلات عملية حول المخاطر والتقارير والتنظيم — مكتوبة لصنّاع القرار في مصر والمنطقة.",
        },
      },
      articles: {
        thirdPartyRisk: {
          category: "الأمن السيبراني والمخاطر",
          title: "اختراق EY: درس نحتاجه لفهم أهمية تقييم مخاطر الأطراف الثالثة",
          excerpt:
            "وقع الاختراق عبر منصة تابعة لطرف ثالث تدعم خدمات الضرائب — تذكير واضح بأن حدود الأمان تمتد إلى كل جهة تمتلك صلاحية الوصول إلى بياناتك.",
          readTime: "6 دقائق قراءة",
          date: "أبريل 2026",
          body: [
            {
              type: "p",
              text: "قبل أيام، أعلنت شركة EY عن تعرضها لاختراق أمني وقع عبر منصة تابعة لطرف ثالث تُستخدم لدعم خدمات الضرائب المقدمة لعملائها. وتمكن المهاجمون من الوصول إلى النظام خلال الفترة من 28 مارس إلى 12 أبريل 2026، وقاموا بتنزيل مستندات تحتوي على بيانات شخصية ومالية حساسة تخص عدداً من عملاء الشركة، قبل أن يتم اكتشاف الاختراق بعد عدة أسابيع.",
            },
            {
              type: "p",
              text: "وهنا تتجلى الأهمية الحقيقية لتقييم مخاطر الأطراف الثالثة (Third-Party Risk Assessment) قبل الربط أو التكامل مع أي جهة خارجية، مع ضرورة الاستمرار في مراقبتها وتقييمها بشكل دوري بعد ذلك. وفي القطاع المالي على وجه الخصوص، لم تأتِ أطر مثل SAMA CSF وضوابط NCA ECC من فراغ، بل تعكس حقيقة أن المخاطر لا تتوقف عند حدود المؤسسة نفسها، وإنما تمتد إلى كل طرف ثالث يمتلك صلاحية الوصول إلى بياناتها أو أنظمتها.",
            },
            {
              type: "h3",
              text: "ما الذي ينبغي التأكد منه عند تقييم أي طرف ثالث؟",
            },
            {
              type: "ul",
              items: [
                "مستوى النضج السيبراني (Cyber Maturity): هل لدى الجهة برنامج فعّال لأمن المعلومات، وسياسات موثقة، وآليات واضحة لإدارة الحوادث؟ أم أن الأمر يقتصر على امتلاك شهادات دون تطبيق فعلي؟",
                "الشهادات والاعتمادات: مثل ISO 27001 وSOC 2 Type II. وهي مؤشرات إيجابية، لكنها لا تكفي وحدها؛ إذ يجب التحقق من أن نطاق الشهادة (Scope) يشمل فعلاً الخدمة أو النظام الذي سيتم التعامل معه.",
                "التقييمات الخارجية المستقلة: التقارير الصادرة عن جهات محايدة تمنح صورة أكثر موضوعية وموثوقية من التقييمات الذاتية التي يقدمها المورد.",
                "اختبارات الاختراق وتقييم الثغرات: لا يكفي وجود تقرير قديم، بل يجب التأكد من إجراء هذه الاختبارات بشكل دوري، ومن معالجة جميع الثغرات الحرجة، مع وجود إعادة اختبار (Retest) تثبت إغلاقها فعلياً.",
                "المراجعة الدورية: لا ينبغي أن يقتصر التقييم على مرحلة التعاقد فقط، بل يجب تحديد دورية للمراجعة وفقاً لطبيعة الخدمة، وحساسية البيانات، ومستوى الصلاحيات الممنوحة للطرف الثالث.",
              ],
            },
            {
              type: "h3",
              text: "نهاية القول",
            },
            {
              type: "p",
              text: "قد تمتلك المؤسسة منظومة أمنية قوية داخلياً، لكنها قد تتعرض للاختراق من خلال أضعف حلقة في سلسلة التوريد أو من خلال أحد الأطراف الثالثة. لذلك، فإن تقييم مخاطر الأطراف الثالثة ليس مجرد إجراء شكلي للامتثال للمتطلبات التنظيمية، بل يمثل خط دفاع أساسياً لحماية البيانات والأنظمة واستمرارية الأعمال.",
            },
          ],
        },
        meahcoRevenue: {
          category: "الحوكمة والمراجعة",
          title: "قضية الاعتراف بالإيراد في «السعودي الألماني الصحية»: ما الذي يجب أن يتعلمه المهنيون؟",
          excerpt:
            "قرار هيئة السوق المالية السعودية ضد أعضاء مجلس الإدارة ولجنة المراجعة بشأن الاعتراف بإيرادات غير مستحقة — ولماذا لم تُذكر الشركة المصرية في القرار.",
          readTime: "10 دقائق قراءة",
          date: "2026",
          body: [
            {
              type: "p",
              text: "القضية تخص شركة الشرق الأوسط للرعاية الصحية «السعودي الألماني الصحية» المدرجة في السوق السعودي، وليست اتهاماً عاماً لكل مستشفيات السعودي الألماني في كل الدول.",
            },
            {
              type: "h3",
              text: "القصة من البداية",
            },
            {
              type: "p",
              text: "خلال الفترة من 2018 حتى الربع الثالث من 2021، ظهرت مشكلة محاسبية خطيرة في قوائمها المالية تتعلق بطريقة الاعتراف بالإيرادات. هيئة السوق المالية السعودية قالت إن عدداً من أعضاء مجلس الإدارة ولجنة المراجعة تلاعبوا بالقوائم المالية، عبر الاعتراف بإيرادات إجمالية غير مستحقة بلغت 358,044,138 ريالاً، رغم علمهم بضعف إمكانية تحصيل هذه الإيرادات.",
            },
            {
              type: "p",
              text: "ببساطة: الشركة سجّلت إيرادات كأنها أموال مستحقة وقابلة للتحصيل، بينما كانت احتمالية تحصيلها ضعيفة. النتيجة أن القوائم المالية أظهرت صورة أفضل من الحقيقة، لأن الإيرادات والأصول والقيمة الدفترية بدت أعلى مما ينبغي. وهذا بالضبط ما وصفته الهيئة بأنه خلق انطباع غير صحيح ومضلل بشأن القيمة الدفترية للشركة.",
            },
            {
              type: "p",
              text: "القضية انتهت بقرار قطعي من لجنة الاستئناف في منازعات الأوراق المالية ضد 11 مخالفاً من أعضاء مجلس الإدارة ولجنة المراجعة، مع تغريمهم مجتمعين نحو 18 مليون ريال، ومنع بعضهم من العمل في جهات خاضعة لإشراف هيئة السوق المالية لمدة سنة أو 6 أشهر بحسب كل حالة.",
            },
            {
              type: "h3",
              text: "أين دور لجنة المراجعة؟",
            },
            {
              type: "p",
              text: "لجنة المراجعة داخل أي شركة مدرجة دورها مراجعة القوائم المالية والرقابة على سلامة التقارير المالية والتواصل مع المراجع الخارجي. في هذه القضية، الإدانة لم تكن فقط ضد أعضاء مجلس إدارة، بل شملت أيضاً أعضاء في لجنة المراجعة، لأن الهيئة اعتبرت أنهم كانوا على علم بضعف إمكانية تحصيل الإيرادات ومع ذلك جرى الاعتراف بها.",
            },
            {
              type: "h3",
              text: "هل مراقب الحسابات الخارجي متورط؟",
            },
            {
              type: "p",
              text: "حسب البيان الرسمي المنشور، هيئة السوق المالية لم تعلن إدانة مراقب الحسابات الخارجي في هذا القرار. القرار ركّز على أعضاء مجلس الإدارة ولجنة المراجعة، ولم يذكر توقيع عقوبة على مكتب مراجعة خارجي. لذلك لا يصح مهنياً أن نقول إن مراقب الحسابات الخارجي «مدان» في هذه القضية ما لم يصدر قرار رسمي منفصل بذلك.",
            },
            {
              type: "p",
              text: "من المهم معرفة من كان يراجع القوائم في جزء من الفترة محل المخالفة: تقرير 2020 يذكر أن مراجع حسابات الشركة كان KPMG الفوزان وشركاه، وأنه لم توجد تحفظات على القوائم المالية لعام 2020. أما تقرير 2021 فيذكر أن المراجع الخارجي كان Ernst & Young، وأنه لم تكن هناك ملاحظات على القوائم المالية للسنة المنتهية في 31 ديسمبر 2021.",
            },
            {
              type: "h3",
              text: "هل الشركة التابعة في مصر متورطة؟",
            },
            {
              type: "p",
              text: "حتى الآن، لا يوجد في قرار هيئة السوق المالية ما يذكر أن الشركة المصرية أو مستشفيات السعودي الألماني في مصر كانت طرفاً في التلاعب محل القرار. القرار يتكلم تحديداً عن القوائم المالية لشركة الشرق الأوسط للرعاية الصحية السعودية المدرجة خلال 2018–2021.",
            },
            {
              type: "p",
              text: "لكن توجد علاقة تجارية وإدارية بين الكيان السعودي وبعض مشروعات مصر. ومع ذلك، فإن هذه الروابط وحدها لا تثبت تورطاً في المخالفة المتعلقة بالإدراج السعودي.",
            },
            {
              type: "h3",
              text: "الخلاصة المهنية",
            },
            {
              type: "p",
              text: "القضية الأساسية هي تضخيم إيرادات داخل الشركة السعودية المدرجة، والإدانة الرسمية طالت أعضاء مجلس الإدارة ولجنة المراجعة. لا يوجد، بحسب المصادر المتاحة، دليل رسمي على تورط الشركة المصرية أو إعلان باسم مراقب حساباتها. ولتأكيد اسم مراقب حسابات مصر تحديداً، المستند الحاسم سيكون: آخر قوائم مالية للشركة السعودية المصرية للرعاية الصحية، أو السجل التجاري/محضر الجمعية العامة الذي عيّن مراقب الحسابات.",
            },
          ],
        },
        securitizationBubble: {
          category: "العقارات والتمويل",
          title: "هل يمر القطاع العقاري في مصر بأزمة؟ وهل تقود سندات التوريق إلى فقاعة عقارية؟",
          excerpt:
            "التوريق قد يوفّر السيولة للمطوّرين — لكن بلا ضوابط قد يساهم في رفع الأسعار وخلق مخاطر تشبه، من حيث الآلية، ما حدث في 2008.",
          readTime: "7 دقائق قراءة",
          date: "2026",
          body: [
            {
              type: "p",
              text: "التوريق هو تحويل مجموعة من الحقوق المالية المستقبلية، مثل أقساط الوحدات العقارية، إلى سندات أو أوراق مالية تُطرح للمستثمرين، بما يسمح لشركات التطوير العقاري بالحصول على السيولة سريعاً بدلاً من انتظار تحصيل الأقساط لسنوات.",
            },
            {
              type: "p",
              text: "وقد لعب التوريق دوراً مهماً في أزمة الرهن العقاري العالمية عام 2008، عندما توسعت المؤسسات المالية الأمريكية في منح قروض عقارية لأشخاص ذوي قدرة محدودة على السداد، ثم جمعت هذه القروض في أوراق مالية وبيعتها للمستثمرين باعتبارها أدوات استثمارية آمنة نسبياً. ومع تعثر المقترضين وانخفاض أسعار المنازل، تراجعت قيمة تلك الأوراق، وتكبّدت البنوك والمستثمرون خسائر ضخمة.",
            },
            {
              type: "p",
              text: "ومن هنا يبرز التساؤل: هل يمكن أن يؤدي التوسع في إصدار سندات مضمونة بأقساط أو حقوق مالية مرتبطة بالوحدات العقارية في مصر إلى رفع الأسعار بصورة غير حقيقية، والوصول لاحقاً إلى ما يُعرف بـ«الفقاعة العقارية»؟",
            },
            {
              type: "h3",
              text: "ما هي الفقاعة العقارية؟",
            },
            {
              type: "p",
              text: "الفقاعة العقارية تحدث عندما ترتفع أسعار العقارات بدرجة كبيرة لا تتناسب مع قيمتها الفعلية أو القدرة الشرائية والدخول الحقيقية، نتيجة المضاربة، والتوسع المفرط في التمويل، والاعتقاد المستمر بأن الأسعار لن تنخفض. وعندما يتراجع الطلب أو يعجز المشترون عن السداد، تنفجر الفقاعة وتهبط الأسعار بصورة حادة.",
            },
            {
              type: "h3",
              text: "التوريق وحده لا يسبب الأزمة",
            },
            {
              type: "p",
              text: "التوريق وحده لا يسبب أزمة عقارية، بل تكمن المخاطر في استخدامه دون ضوابط، مثل المبالغة في تقييم الوحدات، وضعف فحص قدرة العملاء على السداد، والتوسع في بيع وحدات اعتماداً على الطلب الاستثماري والمضاربي، أو إصدار سندات بضمان تدفقات نقدية غير مؤكدة.",
            },
            {
              type: "p",
              text: "لذلك، يتوقف تأثير التوريق في السوق العقارية المصرية على قوة الرقابة، ودقة تقييم الأصول، وجودة المحافظ المالية، وشفافية الإفصاح عن المخاطر. فإذا استُخدم باعتباره أداة تمويل منضبطة، فقد يدعم السيولة والنشاط العقاري، أما إذا أدى إلى التوسع غير المحسوب في التمويل ورفع الأسعار بعيداً عن الطلب الحقيقي، فقد يسهم في تكوين فقاعة عقارية تشبه، من حيث الآلية وليس بالضرورة من حيث الحجم، ما حدث في أزمة 2008.",
            },
          ],
        },
        ias15Revenue: {
          category: "التقارير المالية",
          title: "عن معيار التقرير الدولي IAS 15: الإيراد من العقود مع العملاء",
          excerpt:
            "الإيراد لا يُعترف به لمجرد البيع أو التحصيل، بل وفق تحليل العقد مع العميل — ومتى يجوز استخدام نسبة الإنجاز؟",
          readTime: "8 دقائق قراءة",
          date: "2026",
          body: [
            {
              type: "p",
              text: "ينص المعيار على أن الإيراد لا يُعترف به لمجرد البيع أو التحصيل، بل وفق تحليل العقد مع العميل. باختصار: الإيراد = قيمة تستحقها المنشأة مقابل ما نقلته فعلاً للعميل من سلع أو خدمة.",
            },
            {
              type: "p",
              text: "إشكالية المعيار تتمركز في متى يتم استخدام نسبة الإنجاز في الاعتراف بالإيراد سواء خدمي أو إنشائي؟ نسبة الإنجاز لا تُستخدم لمجرد أن العقار تحت الإنشاء. لازم أولاً نثبت أن التزام الأداء يتم الوفاء به على مدار الزمن وفق واحد من الشروط الثلاثة. لو لم يتحقق أي شرط، تكون المعالجة: دفعات مقدمة حتى التسليم، ثم إيراد عند انتقال السيطرة.",
            },
            {
              type: "h3",
              text: "الشرط الأول: العميل يحصل على المنفعة أثناء أداء الشركة",
            },
            {
              type: "p",
              text: "يعني العميل يستفيد من الخدمة في نفس وقت تنفيذها. مثال واضح: شركة نظافة، صيانة، حراسة، أو استشارات شهرية.",
            },
            {
              type: "h3",
              text: "الشرط الثاني: الشركة تنشئ أو تحسّن أصلاً يسيطر عليه العميل أثناء الإنشاء",
            },
            {
              type: "p",
              text: "يعني الشركة تبني أصلاً، والعميل يسيطر عليه وهو يُبنى. مثال قوي: شركة مقاولات تبني مبنى على أرض مملوكة للعميل.",
            },
            {
              type: "h3",
              text: "الشرط الثالث: الأصل ليس له استخدام بديل + حق واجب النفاذ في التحصيل",
            },
            {
              type: "p",
              text: "هذا شرط مهم جداً في العقارات. لازم يتحقق الشرطان معاً: أولاً، الأصل ليس له استخدام بديل للشركة — أي لا تستطيع تحويل الوحدة أو الأصل لعميل آخر بسهولة، إما بسبب العقد أو بسبب تخصيص الأصل لمواصفات العميل. ثانياً، للشركة حق قانوني واجب النفاذ في تحصيل قيمة الأعمال المنفذة حتى تاريخه، شاملاً هامش ربح مناسب.",
            },
            {
              type: "p",
              text: "فقط عند تحقق أحد شروط الاعتراف على مدار الزمن يمكن استخدام نسبة الإنجاز. وإلا فإن الحذر — وتأجيل الاعتراف حتى انتقال السيطرة فعلياً — هو المسار المهني الصحيح.",
            },
          ],
        },
      },
    },
    cta: {
      title: "هل أنت مستعد لتوسيع أعمالك؟",
      description:
        "تواصل مع شركائنا في مصر اليوم للحصول على استشارة سرية حول احتياجاتك في التدقيق والضرائب والاستشارات.",
      primary: "تواصل معنا",
      secondary: "اعثر على مكاتبنا",
    },
    contact: {
      meta: {
        title: "تواصل معنا | وليد منير ومحمد عرفة",
        description:
          "تواصل مع فريقينا في القاهرة والإسكندرية للحصول على دعم في التدقيق والضرائب والاستشارات. أرسل لنا رسالة وسنرد عليك سريعاً.",
      },
      hero: {
        eyebrow: "تواصل معنا",
        title: "لنبدأ الحديث",
        subtitle:
          "سواء كنت بحاجة إلى دعم في التدقيق أو الضرائب أو الاستشارات، فشركاؤنا في القاهرة والإسكندرية جاهزون لمساعدتك. تواصل معنا وسنعاود الاتصال بك قريباً.",
      },
      info: {
        title: "ابقَ على تواصل",
        description:
          "تواصل معنا مباشرة، أو املأ النموذج وسيرد عليك فريقنا في أقرب وقت.",
        emailLabel: "البريد الإلكتروني",
        whatsappLabel: "واتساب",
        officesTitle: "مكاتبنا",
        followTitle: "تابعنا",
        responseNote: "نرد عادةً خلال يوم عمل واحد.",
      },
      form: {
        title: "أرسل لنا رسالة",
        subtitle: "املأ بياناتك واختر الخدمة التي تهتم بها.",
        name: "الاسم الكامل",
        namePlaceholder: "مثال: أحمد حسن",
        email: "البريد الإلكتروني",
        emailPlaceholder: "you@company.com",
        phone: "الهاتف",
        phonePlaceholder: "+20 ...",
        company: "الشركة",
        companyPlaceholder: "اسم شركتك",
        service: "الخدمة المطلوبة",
        servicePlaceholder: "اختر الخدمة",
        otherService: "استشارة أخرى",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا كيف يمكننا مساعدتك...",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        optional: "اختياري",
        requiredName: "من فضلك أدخل اسمك",
        requiredEmail: "من فضلك أدخل بريدك الإلكتروني",
        invalidEmail: "من فضلك أدخل بريداً إلكترونياً صحيحاً",
        requiredService: "من فضلك اختر الخدمة",
        requiredMessage: "من فضلك أدخل رسالتك",
        minMessage: "يجب ألا تقل الرسالة عن 10 أحرف",
      },
      toast: {
        successTitle: "تم إرسال الرسالة!",
        successMessage: "شكراً لتواصلك معنا. سيعاود فريقنا الاتصال بك قريباً.",
        errorTitle: "حدث خطأ ما",
        errorMessage:
          "تعذّر إرسال رسالتك. من فضلك حاول مرة أخرى، أو راسلنا مباشرة عبر البريد.",
        close: "إغلاق",
      },
    },
    footer: {
      tagline:
        "نقدم خدمات متخصصة في التدقيق والضرائب والاستشارات للعملاء المحليين والدوليين في جميع أنحاء مصر بصفتنا عضواً في BOKS International.",
      cairoOffice: "مكتب القاهرة",
      alexandriaOffice: "مكتب الإسكندرية",
      expertise: "خبراتنا",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      getInTouchTitle: "لنعمل معاً",
      getInTouchCta: "تواصل معنا",
      availability: "متاحون للاستشارة",
      copyright: "© حقوق النشر 2026 UPPER HAND YOUNG Waled Mounir & Mohammed Arafa. جميع الحقوق محفوظة.",
      developedBy: "تطوير: أحمد عبدالدايم",
      developedByLinkedIn: "أحمد عبدالدايم على LinkedIn",
      developedByEmail: "مراسلة أحمد عبدالدايم بالبريد",
      disclosure: "إفصاح",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
    },
    privacyPage: {
      meta: {
        title: "إشعار الخصوصية | وليد منير ومحمد عرفة",
        description:
          "كيف تجمع شركة وليد منير ومحمد عرفة المعلومات الشخصية وتستخدمها وتحميها عند زيارة موقعنا أو الاستفادة من خدماتنا المهنية.",
      },
      hero: {
        eyebrow: "قانوني",
        title: "إشعار الخصوصية",
        subtitle:
          "يوضح هذا الإشعار المعلومات التي نجمعها عنك، وأغراض استخدامها، والجهات التي قد نشاركها معها، وحقوقك المتعلقة ببياناتك الشخصية.",
      },
      lastUpdated: "آخر تحديث: يوليو 2026",
      contactCta: "تواصل معنا بخصوص الخصوصية",
      sections: [
        {
          id: "approach",
          title: "نهجنا",
          paragraphs: [
            "سياستنا هي جمع الحد الأدنى فقط من المعلومات التي نحتاجها منك. إذا كنت تعتقد أننا نحتفظ بمعلومات عنك أكثر مما يلزم، أو كانت لديك أي استفسارات حول كيفية تعاملنا مع بياناتك الشخصية، فيُرجى التواصل معنا عبر البيانات أدناه.",
            "رغم أنك لست ملزماً بتزويدنا بأي معلومات شخصية، إلا أنه إذا طلبنا ذلك ورفضت، فقد لا نتمكن من تزويدك بالمعلومات أو الخدمات المهنية التي تطلبها.",
          ],
        },
        {
          id: "contact",
          title: "بيانات التواصل",
          paragraphs: [
            "إذا كانت لديك أسئلة حول إشعار الخصوصية هذا، أو حول طريقة معالجة معلوماتك الشخصية، أو رغبت في ممارسة أحد حقوقك الموضحة أدناه، فيُرجى التواصل معنا عبر:",
          ],
          bullets: [
            "البريد الإلكتروني: info@wmcpa-eg.com",
            "مكتب القاهرة: مبنى 4، الطابق الرابع، أركان بلازا، قطعة 31، كمبوند زايد 2000، الشيخ زايد، الجيزة، مصر",
            "مكتب الإسكندرية: 38 شارع الأمير إبراهيم، عزبة سعد، سموحة، الإسكندرية، مصر",
            "واتساب: +2 011 1117 4241",
          ],
        },
        {
          id: "data-types",
          title: "أنواع البيانات الشخصية التي نعالجها",
          paragraphs: [
            "نحرص على تقليل البيانات الشخصية التي نجمعها ونعالجها إلى ما هو ضروري للتواصل معك وتقديم خدماتنا المهنية. وبحسب طريقة تعاملك معنا، قد تشمل:",
          ],
          bullets: [
            "بيانات الهوية والتواصل — مثل الاسم الأول واسم العائلة والمسمى الوظيفي واسم الشركة والبريد الإلكتروني",
            "بيانات الاستفسارات المرسلة عبر نموذج التواصل في الموقع (بما في ذلك الخدمة المختارة ورسالتك)",
            "سجلات المراسلات المتعلقة بالاستشارات والتعاقدات والمراسلات المهنية المستمرة",
            "بيانات تقنية قد تُجمع تلقائياً عند زيارة موقعنا (مثل نوع المتصفح ومعلومات الجهاز والموقع التقديري المستنتج من عنوان IP) عند الاقتضاء",
          ],
        },
        {
          id: "data-subjects",
          title: "فئات أصحاب البيانات",
          paragraphs: [
            "قد تشمل البيانات الشخصية التي نعالجها — دون حصر — العملاء، والعملاء المحتملين، وزوّار الموقع، والموردين، والمتعاقدين، وجهات الاتصال المهنية.",
          ],
        },
        {
          id: "legal-basis",
          title: "الأساس القانوني للمعالجة",
          paragraphs: [
            "حيث نجمع بياناتك الشخصية ونخزّنها، فإننا نفعل ذلك استناداً إلى واحد أو أكثر من الأسس التالية:",
          ],
          bullets: [
            "العقد — لتقديم خدماتنا المهنية وتنفيذ التزاماتنا عند تعاقدك معنا",
            "المصلحة المشروعة — مثل الرد على الاستفسارات وتحسين موقعنا وخدماتنا وإرسال مراسلات مهنية ذات صلة عند الاقتضاء",
            "الموافقة — حيث توافق على نشاط معالجة محدد ولا يتوفر أساس قانوني آخر",
            "الالتزام القانوني — حيث يتعين علينا الاحتفاظ بالمعلومات أو معالجتها للامتثال للقوانين والأنظمة المهنية المعمول بها",
          ],
        },
        {
          id: "use",
          title: "كيف نستخدم معلوماتك",
          paragraphs: [
            "نستخدم المعلومات الشخصية من أجل:",
          ],
          bullets: [
            "الرد على الاستفسارات والطلبات المرسلة عبر موقعنا أو القنوات الأخرى",
            "تقديم خدمات التدقيق والضرائب والاستشارات والخدمات المهنية ذات الصلة",
            "إدارة علاقات العملاء والمراسلات المهنية",
            "تشغيل موقعنا وتأمينه وتحسينه",
            "الامتثال للمتطلبات القانونية والتنظيمية والمهنية",
          ],
        },
        {
          id: "sources",
          title: "مصادر البيانات",
          paragraphs: [
            "قد نحصل على البيانات الشخصية من مصادر مباشرة — مثل التواصل معك هاتفياً أو عبر البريد أو واتساب أو نماذج الموقع — وعند الاقتضاء من مصادر مهنية متاحة للعامة أو من إحالات زملاء وجهات اتصال تجارية.",
          ],
        },
        {
          id: "sharing",
          title: "المشاركة ومقدّمو الخدمات",
          paragraphs: [
            "لتشغيل مكتبنا وتقديم خدماتنا، قد نستعين بمقدّمي خدمات مختارين بعناية (مثل استضافة الموقع وتسليم البريد والدعم التقني). ويعالج هؤلاء المزودون البيانات نيابةً عنا ويُتوقع منهم حمايتها بشكل مناسب.",
            "نحن لا نبيع بياناتك الشخصية. وقد نشارك المعلومات حيث يقتضي القانون أو التنظيم أو المعايير المهنية ذلك، أو لحماية حقوقنا القانونية وأمن أنظمتنا وعملائنا.",
            "وبصفتنا عضواً في شبكة BOKS International، قد تُشارك معلومات محدودة مع أعضاء الشبكة فقط عند الضرورة لدعم مهمة عابرة للحدود أو إحالة طلبتها أو وافقت عليها، وبما يخضع لترتيبات سرية مناسبة.",
          ],
        },
        {
          id: "transfers",
          title: "النقل الدولي للبيانات",
          paragraphs: [
            "قد يعالج بعض مقدّمي خدماتنا أو شركاء التعاون بيانات خارج مصر، بما في ذلك مواقع ضمن بنية تحتية سحابية أو تقنية عالمية. وحيث يحدث ذلك، نتخذ خطوات معقولة لضمان استمرار حماية معلوماتك عبر ضمانات تعاقدية وتقنية تتناسب مع طبيعة المعالجة.",
          ],
        },
        {
          id: "security",
          title: "أمن البيانات",
          paragraphs: [
            "نطبّق تدابير تقنية وتنظيمية مصمّمة لحماية المعلومات الشخصية من الوصول غير المصرح به أو الفقدان أو إساءة الاستخدام. ويقتصر الوصول إلى البيانات الشخصية على الأشخاص المخوّلين الذين يحتاجونها لأغراض مهنية مشروعة، ويُتوقع منهم الحفاظ على سريتها.",
          ],
        },
        {
          id: "retention",
          title: "مدة الاحتفاظ بالبيانات",
          paragraphs: [
            "نحتفظ بالبيانات الشخصية فقط للمدة اللازمة للأغراض الموضحة في هذا الإشعار، أو حسب ما يقتضيه القانون والالتزامات المهنية المعمول بها.",
            "تُحذف أو تُحدَّث بيانات التواصل المتعلقة بالتسويق أو العملاء المحتملين إذا لم تعد دقيقة أو ذات صلة. وحيث نحتفظ ببيانات تواصل استناداً إلى مصلحة مشروعة في التواصل المهني، نراجعها دورياً ولا نبقيها أطول مما يلزم — عادةً لمدة لا تتجاوز خمس سنوات قبل إعادة التقييم، ما لم تقتضِ مهمة قائمة أو سبب قانوني مدة أطول.",
            "نحرص على تقليل البيانات الشخصية التي نطلبها أو نحتفظ بها. وما لم تتعاقد معنا مهنياً، نسعى لتخزين ما يلزم فقط لإجراء التواصل المناسب معك والحفاظ عليه.",
          ],
        },
        {
          id: "rights",
          title: "حقوقك",
          paragraphs: [
            "وفقاً للقوانين المعمول بها، قد يكون لك الحق في:",
          ],
          bullets: [
            "طلب الاطلاع على البيانات الشخصية التي نحتفظ بها عنك",
            "طلب تصحيح المعلومات غير الدقيقة أو غير المكتملة",
            "طلب حذف بياناتك الشخصية عندما لم نعد بحاجة إليها",
            "الاعتراض على بعض أنشطة المعالجة أو تقييدها",
            "سحب الموافقة حيث تكون المعالجة قائمة على الموافقة",
            "تقديم شكوى إلى جهة إشراف مختصة عند الاقتضاء",
          ],
          closing:
            "لممارسة أي من هذه الحقوق، يُرجى مراسلتنا على info@wmcpa-eg.com. وقد نحتاج إلى التحقق من هويتك قبل الرد على الطلب.",
        },
        {
          id: "cookies",
          title: "سياسة ملفات تعريف الارتباط",
          paragraphs: [
            "قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة لضمان عمل الموقع بشكل موثوق، وتذكّر تفضيل اللغة، وفهم كيفية استخدام الزوّار للصفحات حتى نحسّن التجربة.",
            "تُستخدم ملفات الارتباط الأساسية حيث يلزم لتشغيل الموقع. أما ملفات التحليلات أو التفضيلات — إن وُجدت — فتساعدنا على قياس الزيارات وتحسين المحتوى. يمكنك التحكم في ملفات الارتباط أو حذفها من إعدادات المتصفح في أي وقت. وقد يؤثر حظر بعضها على عمل أجزاء معيّنة من الموقع.",
            "لأي استفسار حول ملفات الارتباط أو التتبع على هذا الموقع، يُرجى مراسلتنا على info@wmcpa-eg.com.",
          ],
        },
        {
          id: "disclosure",
          title: "إفصاح",
          paragraphs: [
            "وليد منير ومحمد عرفة مكتب خدمات مهنية مستقل يعمل في مصر. والإشارات على هذا الموقع إلى BOKS International تصف عضويتنا في شبكة دولية من مكاتب مستقلة.",
            "مكاتب أعضاء BOKS International كيانات قانونية منفصلة ومستقلة. ولا يتحمل أي مكتب عضو مسؤولية أفعال أو إغفالات مكتب آخر، ولا تنشئ العضوية شراكة أو مشروعاً مشتركاً أو علاقة وكالة بين المكاتب الأعضاء ما لم يُتفق على ذلك صراحةً كتابةً لمهمة محددة.",
            "المعلومات المنشورة على هذا الموقع للإرشاد العام فقط ولا تشكّل استشارة قانونية أو ضريبية أو تدقيق أو أي مشورة مهنية أخرى. وينبغي الحصول على مشورة مخصصة لظروفك قبل الاعتماد على أي معلومات واردة هنا.",
            "نبذل عناية معقولة للإبقاء على محتوى الموقع دقيقاً ومحدّثاً، لكننا لا نتحمل مسؤولية قرارات اتُخذت استناداً فقط إلى مواد الموقع. وتخضع تعاقدات العملاء لشروط خطاب الارتباط ذي الصلة والمعايير المهنية المعمول بها.",
          ],
        },
        {
          id: "updates",
          title: "تحديثات هذا الإشعار",
          paragraphs: [
            "قد نحدّث إشعار الخصوصية هذا من وقت لآخر ليعكس تغييرات في ممارساتنا أو التقنية أو المتطلبات القانونية أو الالتزامات المهنية. ويشير تاريخ «آخر تحديث» أعلى هذه الصفحة إلى أحدث مراجعة للإشعار.",
          ],
        },
      ],
    },
    pages: {
      underConstruction: "الصفحة قيد الإنشاء",
    },
  },
} as const;

/** Use English shape as the canonical translation interface */
export type TranslationKeys = (typeof translations)["en"];
