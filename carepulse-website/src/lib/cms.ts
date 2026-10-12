export interface Blog {
  id: string
  title: string
  slug: string
  category: 'Heart Health' | 'General Wellness' | 'Pediatrics' | 'Mental Health' | 'Dental' | string
  doctorName?: string
  excerpt?: string
  content?: any
  publishedDate?: string
  status?: 'draft' | 'published'
  featuredImage?: {
    url?: string
    alt?: string
  } | string
  imageUrl?: string
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

export interface Doctor {
  id: string
  name: string
  title: string
  department: string
  experience: string
  focus: string
  image: string
  availableToday?: boolean
  rating?: string
  order?: number
}

export interface Department {
  id: string
  name: string
  departmentKey: string
  shortDescription: string
  icon: string
  order?: number
  active?: boolean
}

export interface EnquiryInput {
  patientName: string
  email: string
  phone: string
  preferredDepartment:
    | 'Cardiology'
    | 'Pediatrics'
    | 'General Medicine'
    | 'Dental'
    | 'Orthopedics'
    | 'Neurology'
    | string
  message: string
}

export const CMS_URL = import.meta.env.PUBLIC_CMS_URL || 'http://localhost:3000'

// Curated high quality authentic medical & doctor photography from Pexels
export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  'Heart Health': 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Pediatrics': 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Mental Health': 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
  'General Wellness': 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Dental': 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
}

export function getCategoryFallbackImage(category: string): string {
  return (
    CATEGORY_FALLBACK_IMAGES[category] ||
    'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800'
  )
}

export function formatImageUrl(img: any, category: string = 'General Wellness'): string {
  if (!img) return getCategoryFallbackImage(category)
  if (typeof img === 'string') {
    if (img.startsWith('http://') || img.startsWith('https://')) return img
    return `${CMS_URL}${img.startsWith('/') ? '' : '/'}${img}`
  }
  if (img.url) {
    if (img.url.startsWith('http://') || img.url.startsWith('https://')) return img.url
    return `${CMS_URL}${img.url.startsWith('/') ? '' : '/'}${img.url}`
  }
  return getCategoryFallbackImage(category)
}

// Resilient fallback doctor list with authentic doctor portraits
export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Jenkins, MD, FACC',
    title: 'Senior Consultant & Chief of Cardiology',
    department: 'Cardiology',
    experience: '16+ Years',
    focus: 'Preventive Cardiology & 4D Echo Diagnostics',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: true,
    rating: '4.95',
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcus Vance, FAAP',
    title: 'Chief Pediatrician & Neonatologist',
    department: 'Pediatrics',
    experience: '14+ Years',
    focus: 'Neonatal Care & Pediatric Pulmonology',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: true,
    rating: '4.98',
  },
  {
    id: 'doc-3',
    name: 'Dr. Aris Thorne, MD',
    title: 'Lead Internist & Preventive Medicine Specialist',
    department: 'General Medicine',
    experience: '12+ Years',
    focus: 'Metabolic Health & Longevity Medicine',
    image: 'https://images.pexels.com/photos/6234977/pexels-photo-6234977.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: false,
    rating: '4.92',
  },
  {
    id: 'doc-4',
    name: 'Dr. Chloe Martinez, DDS',
    title: 'Chief Dental & Orthodontic Surgeon',
    department: 'Dental',
    experience: '10+ Years',
    focus: 'Aesthetic Dentistry & Dental Implants',
    image: 'https://images.pexels.com/photos/6529116/pexels-photo-6529116.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: true,
    rating: '4.96',
  },
  {
    id: 'doc-5',
    name: 'Dr. Elena Rostova, PhD, MD',
    title: 'Head of Neuropsychiatry & Cognitive Health',
    department: 'General Medicine',
    experience: '15+ Years',
    focus: 'Clinical Neuroscience & Stress Mitigation',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: true,
    rating: '4.94',
  },
  {
    id: 'doc-6',
    name: 'Dr. Liam Montgomery, MD, FACS',
    title: 'Lead Orthopedic & Sports Medicine Surgeon',
    department: 'General Medicine',
    experience: '18+ Years',
    focus: 'Minimally Invasive Joint Replacement & Rehab',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800',
    availableToday: false,
    rating: '4.97',
  },
]

// Resilient fallback blogs
const FALLBACK_BLOGS: Blog[] = [
  {
    id: 'f1',
    title: '10 Proven Daily Habits for a Healthy, Resilient Heart',
    slug: 'healthy-heart-habits',
    category: 'Heart Health',
    doctorName: 'Dr. Sarah Jenkins, MD (Cardiology)',
    imageUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    imageUrl: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
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
 * Fetch all published blogs from Payload CMS with dynamic cache bypassing
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
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store',
      },
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
        imageUrl: formatImageUrl(doc.featuredImage, doc.category),
      }))
    }
  } catch (err) {
    console.warn('CMS fetch /api/blogs fallback activated:', (err as Error).message)
  }

  // Filter fallback
  const fallbackList = FALLBACK_BLOGS.map((b) => ({
    ...b,
    imageUrl: b.imageUrl || getCategoryFallbackImage(b.category),
  }))

  if (category && category !== 'All') {
    return fallbackList.filter((b) => b.category === category)
  }
  return fallbackList
}

/**
 * Fetch single blog by slug from Payload CMS
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const url = `${CMS_URL}/api/blogs?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store',
      },
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
          imageUrl: formatImageUrl(doc.featuredImage, doc.category),
        }
      }
    }
  } catch (err) {
    console.warn(`CMS fetch /api/blogs slug "${slug}" fallback:`, (err as Error).message)
  }

  const found = FALLBACK_BLOGS.find((b) => b.slug === slug)
  if (found) {
    return {
      ...found,
      imageUrl: found.imageUrl || getCategoryFallbackImage(found.category),
    }
  }
  return null
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
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store',
      },
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

export const FALLBACK_DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Heart Care',
    departmentKey: 'Cardiology',
    shortDescription:
      'Advanced ECG, echocardiography, preventive vascular evaluations, and cardiac rehabilitation.',
    icon: 'Activity',
    order: 1,
    active: true,
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Child Health',
    departmentKey: 'Pediatrics',
    shortDescription:
      'From newborn neonatal care to adolescent wellness, milestone tracking, and routine vaccinations.',
    icon: 'Baby',
    order: 2,
    active: true,
  },
  {
    id: 'medicine',
    name: 'General & Internal Medicine',
    departmentKey: 'General Medicine',
    shortDescription:
      'Comprehensive adult diagnostics, chronic disease management, and full-body preventive health checkups.',
    icon: 'Stethoscope',
    order: 3,
    active: true,
  },
  {
    id: 'dental',
    name: 'Comprehensive Dental Clinic',
    departmentKey: 'Dental',
    shortDescription:
      'Pediatric dentistry, cosmetic restorations, orthodontics, and restorative oral surgery.',
    icon: 'Sparkles',
    order: 4,
    active: true,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Care',
    departmentKey: 'Orthopedics',
    shortDescription:
      'Joint replacement, arthroscopic surgery, sports medicine, and specialized rehabilitation therapy.',
    icon: 'Bone',
    order: 5,
    active: true,
  },
  {
    id: 'neuro',
    name: 'Neuropsychiatry & Wellness',
    departmentKey: 'Neurology',
    shortDescription:
      'Cognitive behavioral support, neurological evaluations, and burnout mitigation therapies.',
    icon: 'Brain',
    order: 6,
    active: true,
  },
]

/**
 * Fetch Doctors list dynamically from Payload CMS with fallback
 */
export async function getDoctors(): Promise<Doctor[]> {
  try {
    const url = `${CMS_URL}/api/doctors?limit=50&sort=order`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store',
      },
    })
    clearTimeout(timeout)

    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data?.docs) && data.docs.length > 0) {
        return data.docs.map((doc: any) => ({
          id: doc.id || doc._id,
          name: doc.name,
          title: doc.title,
          department: doc.department || 'General Medicine',
          experience: doc.experience || '10+ Years',
          focus: doc.focus || '',
          image: formatImageUrl(doc.photo || doc.imageUrl, doc.department),
          availableToday: doc.availableToday ?? true,
          rating: doc.rating || '4.95',
          order: doc.order || 1,
        }))
      }
    }
  } catch (err) {
    console.warn('CMS fetch /api/doctors fallback activated:', (err as Error).message)
  }

  return DOCTORS_DATA
}

/**
 * Fetch Clinical Departments dynamically from Payload CMS with fallback
 */
export async function getDepartments(): Promise<Department[]> {
  try {
    const url = `${CMS_URL}/api/departments?limit=50&sort=order`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store',
      },
    })
    clearTimeout(timeout)

    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data?.docs) && data.docs.length > 0) {
        return data.docs
          .filter((d: any) => d.active !== false)
          .map((doc: any) => ({
            id: doc.id || doc._id,
            name: doc.name,
            departmentKey: doc.departmentKey || 'General Medicine',
            shortDescription: doc.shortDescription || '',
            icon: doc.icon || 'Stethoscope',
            order: doc.order || 1,
            active: doc.active ?? true,
          }))
      }
    }
  } catch (err) {
    console.warn('CMS fetch /api/departments fallback activated:', (err as Error).message)
  }

  return FALLBACK_DEPARTMENTS
}

/**
 * Submit patient appointment or inquiry to Payload CMS
 */
export async function submitEnquiry(
  input: EnquiryInput
): Promise<{ success: boolean; message: string; docId?: string }> {
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

    const json = await res.json()
    const docId = json?.doc?.id || json?.doc?._id

    return {
      success: true,
      message: 'Your appointment inquiry has been received! Stored in the clinic registry.',
      docId,
    }
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || 'Failed to submit enquiry. Please call our hotline.',
    }
  }
}
