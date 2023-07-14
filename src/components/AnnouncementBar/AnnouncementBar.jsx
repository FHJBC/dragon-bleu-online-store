import { storyblokEditable } from '@storyblok/react'
import React from 'react'
import './AnnouncementBar.css'

const AnnouncementBar = ({ blok }) => {
  return (
    <div key={blok._uid} {...storyblokEditable(blok)} className="announcement-bar">
      <a href="/pages/conditions-generales-de-ventes" className="announcement-bar__link">
        <p className="announcement-bar__message">{blok.announcement_custom_text}</p>
      </a>
    </div>
  )
}

export default AnnouncementBar