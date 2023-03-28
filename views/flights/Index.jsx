import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    // function dateHasPassed(date) {
    //     let today = new Date()
    //     let dateToCheck = new Date(date)
    //     return dateToCheck.getTime() < today.getTime()
    // }

    return (
            <DefaultLayout title="Index View">
                <h1>Flight Index View</h1>
                <ul>
                        {props.results.map((flight, index) => 
                            <li key={index}>
                                <p style={{color:false?'red':'black'}}><strong>Flight Number:</strong> 
                                <a href={`/flights/${flight._id}`}> {flight.flightNo}</a> </p>
                                <p><strong>Airline: </strong>{flight.airline}</p>
                                <p> Departure Date/Time: {flight.departs.toString()}</p>
                                <a href={`/flights/${flight._id}`}> Details on Flight  </a>
                            </li>
                        )}
                 </ul>

               
               <br/><br/>
                        <div>
                        <a href="/flights/new">
                            <button type="button" >Add... </button>
                        </a>

                        <form action="/flights/clear?_method=DELETE" method="POST">
                            <button>CLEAR</button>
                        </form>
                        <form action ="/flight/seed" method="POST"><button>SEED</button></form>
                        </div>
                    
            </DefaultLayout>
    )
}

export default Index