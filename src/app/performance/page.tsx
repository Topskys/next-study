import React from 'react'
import performanceImage from '/public/2.png'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <Hero imgUrl={performanceImage} alt="Performance" content="Performance content"/>
  )
}
