import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";

function DeleteDragon() {

    //delete calling to database
    const params = useParams();
    const navigate = useNavigate();

    const deleteSelectedDragon = async () => {
        try {
            const response = await fetch(`http://145.24.237.150:8001/dragons/${params.id}`, {
                headers: {
                    Accept: "application/json",
                },
                method: 'DELETE'
            });

            if (response.status === 204) {
                navigate(`/`);
            } else {
                console.log(response.status);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        deleteSelectedDragon();
    }, []);

}

export default DeleteDragon;