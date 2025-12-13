import './SearchBar.css'
import {useState} from "react";

export default function SearchBar() {
    const [text, setText] = useState("");
    return (
        <form className="d-flex justify-content-center align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search"
                   value={text} onChange={e => setText(e.currentTarget.value)}
            />
            <button className="btn btn-outline-success" type="button">
                Search
            </button>
        </form>
    );
}