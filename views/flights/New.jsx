import React from 'react'
 import DefaultLayout from '../layouts/DefaultLayout';

function New({departsDate}) {

    let today = new Date();
    let currentDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        today.getHours()-4,
        today.getMinutes(),
        today.getSeconds()
      );

      const flightNo = Math.floor(Math.random() * 9990) + 10;


    return ( 
        <DefaultLayout title="Add Flights">
            <h1>New Flight</h1>
            <form action="/flights" method="POST">
                {/* <label htmlFor="airln">Airline:</label><br />
                <input type="text" id="airln" name="airline" /><br /><br />
                <br/><br/>
                <label htmlFor="flightNo">Flight Number:</label><br />
                <textarea name="flightno" id="flightNo"  /><br /><br />
                <br/><br/>
                <label htmlFor="departs">Departs:</label><br />
                <textarea type="datetime-local" name="departs" id="departs"  defaultValue={departsDate} /><br /><br />
                <br/><br/> */}
            <div>
            <label htmlfor="airline">Choose a Airline:</label>
                <select name="airlne" id="airline">
                    <option value="American">American</option>
                    <option value="Southwest">Southwest</option>
                    <option value="United">United</option>
                 </select>
            </div>
            <br/><br/>

            
<div>
                <label htmlfor="airports">Choose a Airport:</label>
                <select name="airport" id="airports">
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SAN">SAN</option>
                </select>
                </div>
                <br/><br/>

<div>
                <label htmlfor="time">Choose a date/time for your flight:</label>
                <input
                        type="datetime-local"
                        id="time"
                        name="tme"
                        value={currentDate.toISOString().slice(0, 16)}
                    ></input>
              </div>
              <br />
            <div>
            <input
                placeholder="Leave an entry here"
                id="entry"
                name="flightNo"
                value={flightNo}
              ></input>
              <label htmlfor="flightNo">
                Flight Number
              </label>
            </div>
            <br/>
            <div>
              <input
                type="text"
                id="ts"
                name="departs"
                placeholder="Username"
                value={`${departsDate.slice(0,10)} ${departsDate.slice(11,16)}`}
              />
              <label htmlfor="departs">
                Departure
              </label>
            </div>




                <button type="submit" id="newflight">Add Flight</button>
            </form>
        </DefaultLayout>
    );
}

export default New;