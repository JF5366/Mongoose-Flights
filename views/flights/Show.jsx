import React from "react";

import DefaultLayout from '../layouts/DefaultLayout';

function Show(props) {
    console.log(props.flight.destinations);
  return (
    
      <DefaultLayout>
        {/* <h1>Airline: {props.flight.airline}</h1>
        <h1>FlightNo: {props.flight.flightNo}</h1>
        <h1>Date: {props.flight.departs.toString()}</h1>
        <br />

        <label htmlFor="tsz">Destination:</label>
        <br />
        <input type="string" id="tsz" name="destinations"  />
        <br />
        <br /> */}
     
        <form action="/flights" method="POST">
              <h1>Airline: {props.flight.airline}</h1>
              <h1>FlightNo: {props.flight.flightNo}</h1>
              <h1>Date: {props.flight?.departs?.toString()}</h1>
              <br />

              <label htmlFor="tsaz">Destination:</label>
              <br />
              <input type="string" id="tsaz" name="destinations"  />
              <br />
              <br />

              <label htmlFor="tsssz">Airport:</label>
              <br />
              <input type="string" id="tsz" name="airport"  />
              <br />
              <br />

              <label htmlFor="tssz">Arrival Date:</label>
              <br />
              <input type="string" id="tssz" name="arrival"  />
              <br />
              <br />
              <div><table >
            <thead>
              <tr>
                <th >Airport</th>
                <th >Arrival</th>
                <th >Edit</th>
                <th >Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.flight.destinations.map((destination) => (
                <>
                  <tr>
                    <th scope="row">{destination.airport}</th>
                    <td>{destination?.arrival?.toString()}</td>
                    <td>Edit</td>
                    <td>
                      <form
                        action={`/flights/${props.flight._id}/destinations/${destination._id}?_method=DELETE`}
                        method="POST"
                      >
                        <button>
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
              

              
      </form>
      
      </DefaultLayout>
    
  );
}

export default Show;

{/* <details ref={detailsRef}>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleSubmit}>
                            <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details>
async function handleSubmit(e) {
        e.preventDefault()

        let comment = {
            body: bodyRef.current.value
        }

        const newComment = await createCommentForPost(comment, post._id)
        let updatedPost = { ...post }
        updatedPost.comments.push(newComment)
        setPost(updatedPost)
        bodyRef.current.value = ''
        detailsRef.current.open = false
    } */}