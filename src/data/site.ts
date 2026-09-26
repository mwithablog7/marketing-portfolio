/**
 * ============================================================================
 *  SITE CONTENT — edit everything in this file to personalise your portfolio
 * ============================================================================
 *
 *  EVERYTHING here is editable. Replace the [BRACKETED PLACEHOLDERS] with
 *  your real information. Anything you leave EMPTY or DELETE will simply not
 *  be displayed — no fake content is ever generated.
 *
 *  After editing: run `npm run build` (or `npm run dev` to preview).
 *  See README.md for the full editing guide.
 */

export const site = {
  /* ------------------------------------------------------------------ *
   *  HERO                                                              *
   * ------------------------------------------------------------------ */

  /** Your name. Shown in the hero, header, footer and page title. */
  name: '[YOUR NAME]',

  /** Professional positioning line shown under your name. */
  positioning: 'Digital Marketing • Content • Analytics',

  /** Short introduction (1–3 sentences). Keep it honest and plain. */
  intro:
    '[ADD A SHORT INTRODUCTION — 1–3 SENTENCES ABOUT WHAT YOU DO AND HOW YOU WORK. NO HYPE, NO INVENTED RESULTS.]',

  /* ------------------------------------------------------------------ *
   *  ABOUT                                                             *
   * ------------------------------------------------------------------ */

  /**
   * Short bio — array of paragraphs. Add as many as you like.
   * Leave the array empty ([]) to hide the section.
   */
  about: [
    '[ADD YOUR BIO — WHO YOU ARE, WHAT YOU WORK ON, AND WHAT YOU ARE LOOKING FOR. WRITE IT IN YOUR OWN VOICE.]',
  ],

  /** Interests — free-form list. Empty array = section hidden. */
  interests: [
    // 'Content strategy',
    // 'Marketing analytics',
  ],

  /** Education — add or remove entries freely. Empty array = hidden. */
  // To add education, replace `[]` below with entries like:
  // { qualification: '[DEGREE / COURSE]', institution: '[INSTITUTION]', dates: '[DATES]', detail: '[OPTIONAL]' }
  education: [] as {
    qualification: string;
    institution: string;
    dates: string;
    detail?: string;
  }[],

  /* ------------------------------------------------------------------ *
   *  SKILLS                                                            *
   * ------------------------------------------------------------------ *
   *  Categories are fully editable — rename, add, remove.
   *  NO percentages, levels or progress bars are ever shown.
   */
  skills: [
    {
      category: 'Marketing',
      items: [
        'Digital Marketing',
        'Content Strategy',
        'Social Media',
        'Marketing Analytics',
        'Campaign Planning',
      ],
    },
    {
      category: 'Creative',
      items: [
        'Content Creation',
        'Visual Storytelling',
        'Copywriting',
        'Creative Strategy',
      ],
    },
    {
      category: 'Analytics',
      items: [
        'Performance Analysis',
        'Data Interpretation',
        'Reporting',
        'KPI Analysis',
      ],
    },
  ],

  /* ------------------------------------------------------------------ *
   *  CV / RESUME                                                       *
   * ------------------------------------------------------------------ *
   *  1. Drop your PDF into:  public/cv/resume.pdf
   *  2. Leave cvUrl as '' to hide the CV buttons entirely.
   */
  cvUrl: '', // e.g. 'cv/resume.pdf'  (file inside public/cv/)

  /* ------------------------------------------------------------------ *
   *  CONTACT                                                           *
   * ------------------------------------------------------------------ *
   *  Leave a field EMPTY ('') and its button/link is hidden.
   *  Never add links you do not actually own.
   */
  contact: {
    email: '', // e.g. 'you@example.com'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/yourprofile'
    other: [] as { label: string; url: string }[],
    // e.g. [{ label: 'Medium', url: 'https://medium.com/@you' }],
  },

  /* ------------------------------------------------------------------ *
   *  SEO — used for <title> and Open Graph tags                         *
   * ------------------------------------------------------------------ */
  seo: {
    title: 'Marketing Portfolio',
    description:
      'Digital Marketing • Content • Analytics — portfolio of projects and case studies.',
  },
};
