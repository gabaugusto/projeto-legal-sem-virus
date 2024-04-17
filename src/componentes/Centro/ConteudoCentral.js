import './ConteudoCentral.css';
import Stories from './Stories';
import Feed from './Feed';

export default function ConteudoCentral () {
    return (
        <div className='ConteudoCentral'>
            <Stories />
            <Feed />
        </div>
    )
}