import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/headphone-prod-1.webp";
const Search = ({ setSearchModal }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>

            <div className="search-result-content">
                
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                
                <div className="search-results">
                    
                        <div
                            className="search-result-item">
                            <div className="image-container">
                                <img
                                    src={prod}
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </span>
                                <span className="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero accusantium minus!
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
