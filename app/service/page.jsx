
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    "id": 1,
    "serviceName": "Global Services",
    "description": "Worldwide digital solutions for modern businesses.",
    "image": "/globe.svg"
  },
  {
    "id": 2,
    "serviceName": "International Consulting",
    "description": "Expert consulting services to help businesses expand globally.",
    "image": "/globe.svg"
  },
  {
    "id": 3,
    "serviceName": "Cross-Border E-Commerce",
    "description": "Sell products worldwide with secure and scalable e-commerce solutions.",
    "image": "/globe.svg"
  },
  {
    "id": 4,
    "serviceName": "Global Marketing Strategy",
    "description": "Data-driven marketing strategies tailored for international audiences.",
    "image": "/globe.svg"
  },
  {
    "id": 5,
    "serviceName": "Cloud-Based Solutions",
    "description": "Reliable cloud services accessible from anywhere in the world.",
    "image": "/globe.svg"
  },
  {
    "id": 6,
    "serviceName": "Remote Team Solutions",
    "description": "Tools and platforms to manage and collaborate with global teams.",
    "image": "/globe.svg"
  },
  {
    "id": 7,
    "serviceName": "Global IT Support",
    "description": "24/7 IT support services for businesses operating worldwide.",
    "image": "/globe.svg"
  },
  {
    "id": 8,
    "serviceName": "International Payment Integration",
    "description": "Secure global payment gateway integration for your business.",
    "image": "/globe.svg"
  },
  {
    "id": 9,
    "serviceName": "Multi-Language Website Development",
    "description": "Websites optimized for multiple languages and regions.",
    "image": "/globe.svg"
  },
  {
    "id": 10,
    "serviceName": "Global Data Analytics",
    "description": "Analyze global business data to make smarter decisions.",
    "image": "/globe.svg"
  }
]

export default function page() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link href={`/service/${service.id}`} key={service.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Image src={service.image} alt={service.serviceName} width={64} height={64} className=" mb-4"  />
            <h2 className="text-xl font-semibold mb-2">{service.serviceName}</h2>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}