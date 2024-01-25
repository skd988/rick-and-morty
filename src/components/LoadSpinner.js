import { PulseLoader } from 'react-spinners'

/*
    Load spinner, to display when the app is currently fetching.
*/

const color = "#2c3ba8";
const size = 30;

export default function LoadSpinner() {
    return (
    <div className="spinner">
        <PulseLoader size={size} color={color}/>
    </div>
    );
}