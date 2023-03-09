import React from 'react'
import { AuditoriumName } from '../ScreeningDateContainer'
import { screeningTimeToString } from '../../../data/utils/mapping_utils'
import '../../../scss/booking/MovieScreeningInformation.scss'
import { Movie } from '../../../domain/interfaces/Movie'
import { Screening } from '../../../domain/interfaces/Screening'

interface MovieScreeningInformationProps {
  movie: Movie
  screening: Screening
}

export const MovieScreeningInformation: React.FC<MovieScreeningInformationProps> = (props) => {

  return (
    <>
      {/* Movie information */}
      <div className='d-flex movie-screening-information'>

        {/* Poster */}
        <img src={`/assets${props.movie.description.posterImage}`} alt="" />

        {/* Movie name, hall name, date/location/time */}
        <div className='movie-screening-meta'>
          {/* Movie name */}
          <h4>{props.movie.title}</h4>
          {/* Location */}
          <p>{AuditoriumName[props.screening.auditoriumId-1]}</p>
          {/* Date/time */}
          <p>{screeningTimeToString(new Date(props.screening.time))}</p>
        </div>
      </div>
    </>
  )
}
