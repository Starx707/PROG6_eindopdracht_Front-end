import React, {useState, useEffect} from "react";
import {Link, Outlet, useNavigate} from "react-router";

function Home() {

    const [dragons, setDragon] = useState(null);
    const navigate = useNavigate();

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
                if (!data) {
                    navigate('')
                }
            } catch (error) {
                console.error("There was a problem gathering the books:", error);
            }
        }

        fetchProduct();
    }, []);

    return (
        <>
            <h1>All dragons - Home</h1>
            <div className={"cards"}>
                {dragons ? (
                    <section>
                        {dragons.map((dragon) => (
                            <div className="card">
                                <div className="corner top left"></div>
                                <div className="corner top right"></div>
                                <div className="corner bottom left"></div>
                                <div className="corner bottom right"></div>
                                <h1>{dragon.species}</h1>
                                <p>Dragon class: {dragon.dClass}</p>
                                <p>Origins: {dragon.origin}</p>
                                <p>Trainability: {dragon.trainability}</p>

                                <button>
                                    <span className="left"></span>
                                    <span className="right"></span>
                                    <Link to={`/dragons/${dragon.id}`} className={"secondary_button"}>See details</Link>
                                </button>
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