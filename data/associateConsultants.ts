export interface Therapy {
  title: string
  points: string[]
}

export interface AssociateConsultant {
  name: string
  role: string
  image: string
  profileUrl?: string
  about?: string
  therapies?: Therapy[]
}

export interface AssociateCity {
  slug: string
  name: string
  description?: string
  consultants: AssociateConsultant[]
}

/** Add or edit cities and doctors here */
export const associateCities: AssociateCity[] = [
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    description:
      'Global Wellness is a multispecialty healthcare center that provides integrated and compassionate care under one roof. With expertise in Psychiatry, ENT, General Medicine, Clinical Psychology, and Audiometry, the clinic offers comprehensive diagnosis and personalized treatment. Backed by highly qualified doctors with over 50 years of combined experience, Global Wellness Clinics focuses on holistic healing—supporting patients\' physical, mental, and emotional well-being in a safe and patient-centered environment.',
    consultants: [
      {
        name: 'Dr. Prannay Gulati',
        role: 'Psychiatrist & De-addiction Specialist',
        image: '/therapists/pranav.gulati.jpeg',
        profileUrl: '/associate-consultants/doctor/prannay-gulati',
        about:
          'Dr. Prannay Gulati is a highly qualified psychiatrist and de-addiction specialist with training from GMCH-32 and PGIMER, Chandigarh. With extensive experience in treating mental health conditions across all age groups, he specializes in anxiety, depression, bipolar disorder, addiction, sleep disorders, schizophrenia, and cognitive disorders. Known for his compassionate, evidence-based approach, Dr. Gulati combines clinical expertise, research excellence, and personalized care to help patients achieve lasting mental and emotional well-being.',
        therapies: [
          {
            title: 'Cognitive Behavioral Therapy (CBT)',
            points: [
              'Considered the gold-standard treatment for many anxiety disorders.',
              'Helps identify and change unhelpful thoughts and behaviours.',
              'Teaches coping strategies and problem-solving skills.',
            ],
          },
          {
            title: 'Exposure and Response Prevention (ERP)',
            points: [
              'Specialized form of CBT for OCD.',
              'Helps individuals face obsessive thoughts without engaging in compulsive behaviours.',
            ],
          },
          {
            title: 'Behavioral Activation (BA)',
            points: [
              'Encourages engagement in meaningful and rewarding activities.',
              'Helps break the cycle of withdrawal, avoidance, and low mood.',
            ],
          },
          {
            title: 'Interpersonal and Social Rhythm Therapy (IPSRT)',
            points: [
              'Focuses on maintaining consistent daily routines and sleep schedules.',
              'Helps stabilize mood by regulating biological rhythms.',
              'Particularly effective for relapse prevention.',
            ],
          },
          {
            title: 'Biofeedback Therapy',
            points: [
              'Teaches individuals to monitor and control physiological responses such as muscle tension, heart rate, and breathing.',
              'Evidence-based intervention for migraine and tension headaches.',
            ],
          },
        ],
      },
    ],
  },
]

export function getAssociateCity(slug: string): AssociateCity | undefined {
  return associateCities.find((city) => city.slug === slug)
}

export function getAllAssociateCitySlugs(): string[] {
  return associateCities.map((city) => city.slug)
}

export function getAssociateConsultant(slug: string): {
  consultant: AssociateConsultant
  city: AssociateCity
} | undefined {
  for (const city of associateCities) {
    const consultant = city.consultants.find(
      (c) => c.profileUrl === `/associate-consultants/doctor/${slug}`
    )
    if (consultant) {
      return { consultant, city }
    }
  }
  return undefined
}
