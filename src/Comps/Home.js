import { useNavigate } from "react-router-dom"

const Home = props => {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero-img-container">
                <div>
                    <h1>Your Favorite food, delivered while coding</h1>
                    <button onClick={() => navigate("/pizza")}>Pizza?</button>
                </div>
                <div>
                    
                </div>
            </section>
            <section className="food-container">
                <h3>Food Near You</h3>
                <div>
                    <h3>McDonald's</h3>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div>
                    <h3>Sweet Greens</h3>
                    <p>$$$ - Healthy - Salads</p>
                    <div>
                        <p>30-45 Min</p>
                        <p>$4.99 Delivery Fee</p>
                    </div>
                </div>
                <div>
                    <h3>Starbucks</h3>
                    <p>$$ - Coffee - Breakfast & Brunch</p>
                    <div>
                        <p>10-15 Min</p>
                        <p>$2.99 Delivery Fee</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home