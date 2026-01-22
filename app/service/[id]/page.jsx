import Image from 'next/image';
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
export default async function page({ params }) {
   console.log(params);
   const { id } = await params;
   const { serviceName, description, image } = services.find(service => service.id === parseInt(id));
  return (
    <div>
       <h1>service Details</h1>
       <div className='border p-4 m-4 rounded-lg shadow-lg'>
            <h2>Service ID: {id}</h2>
            <p>{serviceName}</p>
            <p>{description}</p>
            <Image src={image} alt={serviceName} width={64} height={64}  />
       </div>
    </div>
  )
}
