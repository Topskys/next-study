import React from 'react'
import image from '/public/4.png'
import Hero from '@/components/Hero'
import { Metadata } from 'next';

export const metaData:Metadata = {
  title: "Scale",
};

export default function page() {
  return (
    <Hero imgUrl={image} alt="Scale" content="Scale content"/>
  )
}
