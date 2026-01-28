import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";

function Details() {
    const [detailsContainer, setdetailsContainer] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const loadDetails = async () => {
        try {
            const response = await fetch(`http://145.24.237.150:8001/dragons/${params.id}`, {
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.status === 404) {
                navigate(`/404`);
            }
            const data = await response.json();


            if (!data.error) {
                setdetailsContainer(data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    function dragonItem({dragon}) {

        useEffect(() => { //is this needed?
            deleteDragon();
        }, []);

        const deleteDragon = async () => {
            try {
                const response = await fetch(`http://145.24.237.150:8001/dragons/${dragon}`, {
                    headers: {
                        Accept: "application/json",
                    },
                    method: 'DELETE'
                });

                if (response.status === 204) {
                    //return to main page
                    navigate(`/`);
                    console.log("success!")
                } else {
                    console.log(response.status);
                }

            } catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        loadDetails();
    }, []);

    return (
        <>
            {detailsContainer ? (
                <div className={"details_card"}>
                    <div className="card">
                        <div className="corner top left"></div>
                        <div className="corner top right"></div>
                        <div className="corner bottom left"></div>
                        <div className="corner bottom right"></div>
                        <h1>{detailsContainer.species}</h1>
                        <p>Class: {detailsContainer.dClass}</p>
                        <p>Description: {detailsContainer.desc}</p>
                        <p>Flock: {detailsContainer.flock}</p>
                        <p>Origin: {detailsContainer.origin}</p>
                        <p>Trainability: {detailsContainer.trainability}</p>
                        <button>
                            <span className="left"></span>
                            <span className="right"></span>
                            <Link to={`/delete/${detailsContainer.id}`}
                                  className={"secondary_button detail_button"}>Delete</Link>
                        </button>
                        <button>
                            <span className="left"></span>
                            <span className="right"></span>
                            <Link to={`/update/${detailsContainer.id}`}
                                  className={"secondary_button detail_button"}>Change</Link>
                        </button>
                    </div>
                </div>
            ) : (
                <div>Loading data...</div>
            )}
        </>
    );

}

//<!--onClick={dragonItem(detailsContainer.id)}-->

export default Details;