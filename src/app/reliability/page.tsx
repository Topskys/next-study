import React from 'react'
import image from '/public/3.png'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <Hero imgUrl={image} alt="Reliability" content="Reliability content"/>
  )
}
