import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                title="Post 1"
                imgSrc="https://via.placeholder.com/150"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

            <Post
                title="Post 2"
                imgSrc="https://via.placeholder.com/150"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />
        </div>
    )
}