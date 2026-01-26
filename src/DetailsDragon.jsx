import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router";

function Details() {
    const [detailsContainer, setdetailsContainer] = useState(null);
    const params = useParams();

    const loadDetails = async () => {
        try {
            const response = await fetch(`http://145.24.237.150:8001/dragons/${params.id}`, {
                headers: {
                    Accept: "application/json",
                },
            });

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
                <article>
                    <h2>{detailsContainer.species}</h2>
                    <div>
                        <div>Class:</div>
                        <div>{detailsContainer.dClass}</div>
                    </div>
                    <div>
                        <div>Description:</div>
                        <div>{detailsContainer.desc}</div>
                    </div>
                    <div>
                        <div>Flock:</div>
                        <div>{detailsContainer.flock}</div>
                    </div>
                    <div>
                        <div>Origin:</div>
                        <div>{detailsContainer.origin}</div>
                    </div>
                    <div>
                        <div>Trainability:</div>
                        <div>{detailsContainer.trainability}</div>
                    </div>
                    <Link to={`/delete/${detailsContainer.id}`}>Delete</Link>
                </article>
            ) : (
                <div>Loading data...</div>
            )}
        </>
    );

}

//<!--onClick={dragonItem(detailsContainer.id)}-->

export default Details;