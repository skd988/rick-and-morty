import { useSelector } from 'react-redux'
import LookMorty from '../../images/Look_Morty.jpg'
import { selectError } from '../../slices/errorSlice'

/*
    Error page, displays the error from the props, or the current global error if no error passed on props.
*/

export default function ErrorPage({ message }){
    const error = useSelector(selectError);
    const errorDetails = message !== undefined? message : error;
    return (
        <div className="card-container center-text error-card">
            <div className="card">
                <div className="card-title error-title">
                    <h1>Something went wrong!</h1>
                </div>
                <div>
                    <h4>
                        {errorDetails}
                    </h4>
                </div>
                <div>
                    <img className="image-container" src={LookMorty}></img>
                </div>
                <h5>Look Mo...Morty, the site just cra...crashed because of you Morty!</h5>
            </div>
        </div>
    )
}