import {useState} from "react";
import {useNavigate, useParams} from "react-router";

function CreateProduct() {

    const navigate = useNavigate();

    async function createProduct() {
        try {
            const response = await fetch("http://145.24.237.150:8001/dragons/", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status === 201) {
                navigate(`/dragons/${data.id}`);
            } else {
                console.log("Not quite what was expected: ", response.status);
            }
        } catch (e) {
            console.error("Er is een fout opgetreden:", e);
        }
    }

    const [formData, setFormData] = useState({
        species: "",
        desc: "",
        dClass: ""
    });

    const handleInputChange = (e) => {
        const {species, value} = e.target; //this doesn't work? why?
        setFormData({
            ...formData,
            [species]: value,
        });
        console.log(formData.species);
        console.log(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct();
        console.log("Form send:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="species">Species:</label>
                <input type="text" id="species" name="species" value={formData.species} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="desc">Description:</label>
                <input type="desc" id="desc" name="desc" value={formData.desc} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="dClass">Dragon class:</label>
                <input type="dClass" id="dClass" name="dClass" value={formData.dClass} onChange={handleInputChange}/>
            </div>
            <button type="submit">Send dragon</button>
        </form>
    );

}

export default CreateProduct;