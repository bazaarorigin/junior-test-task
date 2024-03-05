import React from 'react'

export type ImagesObjType = {
  id: number,
  image: string,
  thumbnail: string,
  user: number,
}

export type AdsType = {
  city_name: string,
  created_at: string,
  description: string,
  district_name: string,
  id: number,
  images: ImagesObjType[],
  price: number,
  title: string,
  user: number,
  views: number
}

export type FiltersType = {
  city?: string,
  district?: string,
  maxPrice?: string,
  minPrice?: string,
  search?: string
}

export type EventType =
  | MouseEvent
  | React.MouseEvent<HTMLElement>
  | TouchEvent;
