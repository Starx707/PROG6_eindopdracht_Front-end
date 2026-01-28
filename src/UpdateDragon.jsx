import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

function UpdateDragon() {
    const [dragonDetail, setDragonDetails] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    const getDragon = async () => {
        try {
            const response = await fetch(`http://145.24.237.150:8001/dragons/${params.id}`, {
                headers: {
                    Accept: "application/json",
                },
            });

            const data = await response.json();
            setDragonDetails(data);
            // console.log(dragonDetail);
        } catch (e) {
            console.log(e);
        }
    };


    //update data through this
    async function updateDragon() {
        try {
            const response = await fetch(`http://145.24.237.150:8001/dragons/${params.id}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status === 201) {
                navigate(`/dragons/${data.id}`);
            } else {
                console.log("Not quite what was expected: ", response.status);
                navigate(`/dragons/${data.id}`);
            }
        } catch (e) {
            console.error("Er is een fout opgetreden:", e);
        }
    }

    const [formData, setFormData] = useState({
        species: `New`,
        desc: "New",
        dClass: "New",
        flock: "?",
        origin: "?",
        trainability: "0"
    });

    useEffect(() => {
        getDragon();
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target; //doesn't work here either
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateDragon();
        console.log("Form send:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="corner top left"></div>
                <div className="corner top right"></div>
                <div className="corner bottom left"></div>
                <div className="corner bottom right"></div>
                <div className={"sort_form"}>
                    <div>
                        <label htmlFor="species">Species:</label>
                        <input type="text" id="species" name="species" value={formData.species}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="desc">Description:</label>
                        <input type="text" id="desc" name="desc" value={formData.desc} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="dClass">Dragon class:</label>
                        <input type="text" id="dClass" name="dClass" value={formData.dClass}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="flock">Flock:</label>
                        <input type="text" id="flock" name="flock" value={formData.flock}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="origin">Origin:</label>
                        <input type="text" id="origin" name="origin" value={formData.origin}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="trainability">Trainability:</label>
                        <input type="text" id="trainability" name="trainability" value={formData.trainability}
                               onChange={handleInputChange}/>
                    </div>
                </div>
                <button>
                    <span className="left"></span>
                    <span className="right"></span>
                    <button type="submit">Update dragon data</button>
                </button>
            </div>
        </form>
    );

}

export default UpdateDragon;