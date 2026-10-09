export interface Blog {
  id: string
  title: string
  slug: string
  category: 'Heart Health' | 'General Wellness' | 'Pediatrics' | 'Mental Health' | string
  doctorName?: string
  excerpt?: string
  content?: any
  publishedDate?: string
  status?: 'draft' | 'published'
  featuredImage?: {
    url?: string
    alt?: string
  } | string
}

export interface AboutUsData {
  clinicName: string
  tagline: string
  mission: string
  vision: string
  story?: any
  keyStats: {
    yearsOfExperience: number
    specialistDoctors: number
    happyPatients: string
  }
}

export interface EnquiryInput {
  patientName: string
  email: string
  phone: string
  preferredDepartment: 'Cardiology' | 'Pediatrics' | 'General Medicine' | 'Dental' | string
  message: string
}

const CMS_URL = import.meta.env.PUBLIC_CMS_URL || 'http://localhost:3000'

// Resilient fallback blogs
const FALLBACK_BLOGS: Blog[] = [
  {
    id: 'f1',
    title: '10 Proven Daily Habits for a Healthy, Resilient Heart',
    slug: 'healthy-heart-habits',
    category: 'Heart Health',
    doctorName: 'Dr. Sarah Jenkins, MD (Cardiology)',
    excerpt:
      'Cardiologist-approved lifestyle modifications, nutrition tips, and aerobic benchmarks to safeguard cardiovascular vitality and lower arterial pressure.',
    publishedDate: '2026-09-20T09:00:00.000Z',
    status: 'published',
    content: {
      root: {
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your heart beats over 100,000 times each day, pumping gallons of oxygen-rich blood through thousands of miles of vessels. Protecting this vital engine requires consistent, science-backed lifestyle choices.',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '1. Prioritize 150 Minutes of Moderate Aerobic Movement Weekly: Brisk walking, swimming, and cycling strengthen the myocardium, improve vascular elasticity, and help regulate blood pressure.',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '2. Embrace the Mediterranean Dietary Blueprint: Incorporate extra virgin olive oil, cold-water omega-3 rich fish, leafy greens, walnuts, and legumes while limiting ultra-processed sodium loads.',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '3. Routine Preventive Screenings: Regular blood pressure and lipid checks catch endothelial stress years before symptoms manifest.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'f2',
    title: 'Essential Pediatric Milestones: What Parents Should Expect from 0 to 5',
    slug: 'pediatric-developmental-milestones',
    category: 'Pediatrics',
    doctorName: 'Dr. Marcus Vance, FAAP (Chief Pediatrician)',
    excerpt:
      'A comprehensive clinical breakdown of cognitive, motor, and speech developmental benchmarks in early childhood, plus when to seek pediatric consultation.',
    publishedDate: '2026-09-22T10:30:00.000Z',
    status: 'published',
    content: {
      root: {
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: "Every child develops at their unique pace, yet understanding neurodevelopmental benchmarks empowers parents to nurture their child's cognitive and physical milestones with confidence.",
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Regular wellness visits, timely pediatric immunizations, and responsive sensory play form the tripartite foundation of robust childhood resilience and immune system maturity.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'f3',
    title: 'Mind-Body Synchronization: Overcoming Chronic Stress and Burnout',
    slug: 'overcoming-chronic-stress-burnout',
    category: 'Mental Health',
    doctorName: 'Dr. Elena Rostova, PhD (Neuropsychiatry)',
    excerpt:
      'Understanding how sustained cortisol elevation impacts sleep architecture and gut health, alongside cognitive strategies for nervous system regulation.',
    publishedDate: '2026-09-25T14:15:00.000Z',
    status: 'published',
    content: {
      root: {
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Chronic sympathetic nervous system activation disrupts restorative REM cycles and systemic inflammation markers. Clinical mindfulness, progressive relaxation, and circadian light exposure restore deep physiological equilibrium.',
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'f4',
    title: 'Optimal Cellular Hydration and Nutrient Absorption for Longevity',
    slug: 'optimal-cellular-hydration-longevity',
    category: 'General Wellness',
    doctorName: 'Dr. Aris Thorne, MD (Preventive Medicine)',
    excerpt:
      'Why cellular electrolyte equilibrium matters more than simple fluid volume, and how micro-nutrient timing maximizes metabolic performance throughout the day.',
    publishedDate: '2026-09-28T11:00:00.000Z',
    status: 'published',
    content: {
      root: {
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Cellular hydration involves more than just consuming liters of plain water. Balancing bioavailable electrolytes—potassium, magnesium, and sodium—optimizes cellular ATP production and cognitive alertness.',
              },
            ],
          },
        ],
      },
    },
  },
]

// Resilient fallback About Us data
const FALLBACK_ABOUT_US: AboutUsData = {
  clinicName: 'CarePulse Health Clinic',
  tagline: 'Trusted Healthcare for You and Your Family',
  mission:
    'To deliver state-of-the-art, evidence-based healthcare with deep clinical empathy, ensuring accessible, compassionate, and personalized treatments for patients across all stages of life.',
  vision:
    'To become the regional benchmark in multispeciality medical innovation, pioneering preventive care, diagnostic precision, and holistic patient recovery.',
  keyStats: {
    yearsOfExperience: 15,
    specialistDoctors: 25,
    happyPatients: '50,000+',
  },
  story: {
    root: {
      children: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Founded in 2011 by a team of visionary cardiologists and pediatric surgeons, CarePulse Health began with a singular promise: to bring world-class clinical precision and heartfelt human warmth under one roof.',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'Over the past 15 years, our multispeciality facility has grown from a humble neighborhood diagnostic center into a multidisciplinary healthcare network staffed by 25+ board-certified medical specialists. We have proudly served over 50,000 happy patients with compassionate consultations, outpatient surgery, advanced cardiology, pediatric intensive care, and preventive health screenings.',
            },
          ],
        },
      ],
    },
  },
}

/**
 * Fetch all published blogs from Payload CMS with robust fallback
 */
export async function getBlogs(category?: string): Promise<Blog[]> {
  try {
    let url = `${CMS_URL}/api/blogs?limit=50&sort=-publishedDate`
    if (category && category !== 'All') {
      url += `&where[category][equals]=${encodeURIComponent(category)}`
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    clearTimeout(timeout)

    if (!res.ok) {
      throw new Error(`Payload returned status ${res.status}`)
    }

    const data = await res.json()
    if (Array.isArray(data?.docs) && data.docs.length > 0) {
      return data.docs.map((doc: any) => ({
        id: doc.id || doc._id,
        title: doc.title,
        slug: doc.slug,
        category: doc.category || 'General Wellness',
        doctorName: doc.doctorName || 'Dr. Sarah Jenkins, MD',
        excerpt: doc.excerpt || '',
        content: doc.content,
        publishedDate: doc.publishedDate || doc.createdAt,
        status: doc.status || 'published',
        featuredImage: doc.featuredImage,
      }))
    }
  } catch (err) {
    console.warn('CMS fetch /api/blogs fallback activated:', (err as Error).message)
  }

  // Filter fallback
  if (category && category !== 'All') {
    return FALLBACK_BLOGS.filter((b) => b.category === category)
  }
  return FALLBACK_BLOGS
}

/**
 * Fetch single blog by slug from Payload CMS with robust fallback
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const url = `${CMS_URL}/api/blogs?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    clearTimeout(timeout)

    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data?.docs) && data.docs.length > 0) {
        const doc = data.docs[0]
        return {
          id: doc.id || doc._id,
          title: doc.title,
          slug: doc.slug,
          category: doc.category || 'General Wellness',
          doctorName: doc.doctorName || 'Dr. Sarah Jenkins, MD',
          excerpt: doc.excerpt || '',
          content: doc.content,
          publishedDate: doc.publishedDate || doc.createdAt,
          status: doc.status || 'published',
          featuredImage: doc.featuredImage,
        }
      }
    }
  } catch (err) {
    console.warn(`CMS fetch /api/blogs slug "${slug}" fallback:`, (err as Error).message)
  }

  return FALLBACK_BLOGS.find((b) => b.slug === slug) || null
}

/**
 * Fetch About Us information from Payload CMS globals
 */
export async function getAboutUs(): Promise<AboutUsData> {
  try {
    const url = `${CMS_URL}/api/globals/about-us`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    clearTimeout(timeout)

    if (res.ok) {
      const data = await res.json()
      if (data && (data.clinicName || data.tagline)) {
        return {
          clinicName: data.clinicName || FALLBACK_ABOUT_US.clinicName,
          tagline: data.tagline || FALLBACK_ABOUT_US.tagline,
          mission: data.mission || FALLBACK_ABOUT_US.mission,
          vision: data.vision || FALLBACK_ABOUT_US.vision,
          story: data.story || FALLBACK_ABOUT_US.story,
          keyStats: {
            yearsOfExperience: data.keyStats?.yearsOfExperience || 15,
            specialistDoctors: data.keyStats?.specialistDoctors || 25,
            happyPatients: data.keyStats?.happyPatients || '50,000+',
          },
        }
      }
    }
  } catch (err) {
    console.warn('CMS fetch /api/globals/about-us fallback:', (err as Error).message)
  }

  return FALLBACK_ABOUT_US
}

/**
 * Submit patient appointment or inquiry to Payload CMS
 */
export async function submitEnquiry(input: EnquiryInput): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${CMS_URL}/api/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    if (!res.ok) {
      const errData = await res.json().catch(() => null)
      throw new Error(errData?.errors?.[0]?.message || `Error status ${res.status}`)
    }

    return {
      success: true,
      message: 'Your appointment inquiry has been received! Our medical desk will contact you within 2 hours.',
    }
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || 'Failed to submit enquiry. Please call our hotline.',
    }
  }
}
