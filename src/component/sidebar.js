import React from 'react'

function sidebar() {
    return (

        <div className='start-0 border-0 bg-dark' style={{ height: "100%", width: "100%", marginTop: "55px" }}>
            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginTop: "30px", width: "70%" }}>
                    Select City
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>
            <div className='dateSector'>
                <label for="start">Select date:</label>
                <input type="date" id="start" name="trip-start"
                    value="2023-01-01"
                    min="2023-03-07" max="2025-12-31" />
            </div>
            <div className='timeSelector'>
                <div className='startTime'>
                    <label form='start time'>Start Time :
                        <select id='start Time'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </label>
                </div>
                <div className='endTime'>
                    <label form='start time'>End Time :
                        <select id='start Time'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </label>
                </div>
                <div style={{ color: "white" }}>
                    <p>duration</p>
                </div>
            </div>
            <div className='priceRange'>
                <label for="price-range">Price range:</label>
                <input type="range" id="price-range" name="price-range" min="300" max="10000" />
                <div id="price-value"></div>
            </div>


        </div>
    )
}

export default sidebar