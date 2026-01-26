import React, {useState, useEffect} from "react";
import {Link, Outlet} from "react-router";

function Home() {

    const [dragons, setDragon] = useState(null);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch("http://145.24.237.150:8001/dragons", { //change to link of online one
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                });
                const data = await response.json();
                setDragon(data.items);
                console.log(data.items); //shows all the data
            } catch (error) {
                console.error("There was a problem gathering the books:", error);
            }
        }

        fetchProduct();
    }, []);

    return (
        <>
            <h1>All dragons - Home</h1>
            <div>
                {dragons ? (
                    <section>
                        {dragons.map((dragon) => (
                            <div>
                                <h2>{dragon.species}</h2>
                                <p>{dragon.dClass}</p>
                                <p>{dragon.origin}</p>
                                <p>{dragon.trainability}</p>
                                <Link to={`/dragons/${dragon.id}`}>See details</Link>

                            </div>
                        ))}
                    </section>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default Home;