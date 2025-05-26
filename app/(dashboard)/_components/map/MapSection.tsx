
"use client";
import React from 'react'
// import Map from 'react-map-gl/mapbox'

const MapSection = () => {
  return (
    <div className='p-[0px] md:p-5 items-center justify-center align-middle flex flex-col'>
      <h2 className='font-semibold text-sm md:text-2xl' >Map Guide</h2>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d301837.4338830072!2d6.497383468385589!3d6.284227668623471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1748232359212!5m2!1sen!2sng" width="600" height="450" className='border-0 w-full'  loading="lazy" >
      mapoo</iframe> */}
      <div className="rounded-lg overflow-hidden">

      {/* <Map
      mapboxAccessToken= {process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
        longitude: 3.3488896,
        latitude: 6.5568768,
        zoom: 14
      }}
      style={{width: "100%", height: "100%" , borderRadius:10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    /> */}
      </div>

     
    </div>
  )
}

export default MapSection
