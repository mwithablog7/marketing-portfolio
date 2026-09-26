/**
 * ============================================================================
 *  PROJECTS — add, edit or remove your projects here
 * ============================================================================
 *
 *  HOW TO ADD A PROJECT
 *  --------------------
 *  1. Copy one of the example blocks below (starting with `  {`).
 *  2. Paste it as a new entry in the PROJECTS array.
 *  3. Fill in the fields — delete any field you don't need.
 *
 *  RULES THIS SITE ENFORCES FOR YOU:
 *  - Empty or missing fields are simply NOT displayed.
 *  - `results` is only shown when YOU provide it — no numbers are invented.
 *  - If you have no measurable results, use `outcome` instead.
 *  - If `placeholder: true`, the card is visibly marked so unfinished
 *    entries can never be mistaken for finished work.
 *
 *  IMAGES
 *  ------
 *  Put your images in:  public/images/projects/
 *  Then reference them: images: ['images/projects/my-project.png']
 *  If an image is missing, a clean "Add project image" box is shown.
 */

export type Project = {
  /** URL-friendly id, used in the address bar. e.g. 'my-campaign-project' */
  slug: string;
  title: string;
  /** One of the categories listed in CATEGORIES below. */
  category: string;
  /** 1–2 sentence summary shown on the project card. */
  shortDescription: string;
  /** Full description for the case-study page. Multiple paragraphs allowed. */
  detailedDescription?: string;
  /** What YOU personally did. */
  role?: string;
  /** Tools you actually used. No invented tool names. */
  tools?: string[];
  /** Free-form date label, e.g. 'March 2026' or '2024–2025'. */
  date?: string;
  /** Image paths relative to public/. First image = card cover. */
  images?: string[];
  /** Captions shown under each image (same order as images). */
  imageCaptions?: string[];
  /** External links, e.g. a live campaign or published article. */
  links?: { label: string; url: string }[];
  /** REAL measurable results ONLY. Leave empty/omit if you have none. */
  results?: string[];
  /** Use this INSTEAD of results when you have no metrics. */
  outcome?: string;
  /** What you learned / would improve. */
  lessons?: string;
  /** Tags shown on the card. */
  tags?: string[];
  /** Set to true while a project is unfinished — card gets a warning badge. */
  placeholder?: boolean;
  /** Set to true to hide a project everywhere without deleting it. */
  hidden?: boolean;
};

/** Filter categories — edit freely. Empty categories are handled gracefully. */
export const CATEGORIES = [
  'Marketing',
  'Analytics',
  'Content',
  'Strategy',
  'Creative',
];

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------- *
   *  EXAMPLE PROJECT — copy this block to create a new one.           *
   *  Delete the example entirely when you add your own work.          *
   * ---------------------------------------------------------------- */
  {
    slug: 'example-project',
    title: '[ADD PROJECT TITLE]',
    category: 'Marketing',
    shortDescription:
      '[ADD A ONE–TWO SENTENCE SUMMARY OF THIS PROJECT. WHAT WAS IT ABOUT?]',
    detailedDescription:
      '[ADD A LONGER DESCRIPTION OF THE PROJECT — WHAT IT IS AND WHY IT MATTERED.]',
    role: '[WHAT YOU PERSONALLY DID]',
    tools: [], // e.g. ['Google Analytics', 'Meta Business Suite']
    date: '', // e.g. 'March 2026'
    images: [], // e.g. ['images/projects/my-screenshot.png']
    imageCaptions: [],
    links: [], // e.g. { label: 'Live campaign', url: 'https://example.com' }
    results: [], // REAL numbers only, e.g. ['Open rate increased from X% to Y%']
    outcome: '', // Use instead of results when you have no metrics
    lessons: '[WHAT YOU LEARNED OR WOULD IMPROVE NEXT TIME]',
    tags: [], // e.g. ['Content', 'Social']
    placeholder: true, // remove this line when the project is complete
    // hidden: true,    // uncomment to hide this project everywhere
  },
];
