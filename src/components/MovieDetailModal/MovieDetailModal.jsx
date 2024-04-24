import React, { useState } from 'react'

const MovieDetailModal = React.forwardRef(({toggle,isToggled, animation, modalRef, title, duration, genre, language, releaseDate, synopsis, cast, crew }) => {
    return (
        <div className="">
            {isToggled && ( // Sử dụng short-circuit evaluation để render điều kiện
                <div ref={modalRef} className={`${animation} fixed left-0 bottom-0 transform translate-x-1/2 w-screen h-3/4 bg-primary rounded-t-3xl`}>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex flex-col">
                            {/* Movie Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-3xl font-bold">{title}</h1>
                                <button className="text-xl" onClick={toggle}>Close X</button>
                            </div>

                            {/* Movie Info */}
                            <div className="mb-4">
                                <p><strong>Duration:</strong> {duration}</p>
                                <p><strong>Genre:</strong> {genre}</p>
                                <p><strong>Language:</strong> {language}</p>
                                <p><strong>Release Date:</strong> {releaseDate}</p>
                            </div>

                            {/* Synopsis */}
                            <p className="mb-4">{synopsis}</p>

                            {/* Cast */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                                <div className="flex space-x-4">
                                    {cast.map((actor, index) => (
                                        <div key={index}>
                                            <img src={actor.image} alt={actor.name} className="w-24 h-24 rounded-full" />
                                            <p>{actor.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Crew */}
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold mb-2">Crew</h2>
                                <div className="flex space-x-4">
                                    {crew.map((member, index) => (
                                        <div key={index}>
                                            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full" />
                                            <p>{member.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
})

export default MovieDetailModal