import { useNavigate } from 'react-router-dom'

/*
    A button to go back to the last page.
*/

export default function BackButton()
{
    const navigate = useNavigate();
    return (
        <button className="button" onClick={() => navigate(-1)}>Back</button>
    );
}