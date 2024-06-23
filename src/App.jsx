import Accordion from "./components/Accordion";

function App() {
    return (
        <main>
            <h2>Why work with us?</h2>
            <Accordion className="accordion">
                <Accordion.Item
                    id="expierience"
                    className="accordion-item"
                    title="We got 20 years of experience"
                >
                    <article>
                        <p>You can&apos;t go wrong with us.</p>
                        <p>
                            We are in the bussiness of planing highly
                            individualized vacation trips for more than 20
                            years.
                        </p>
                    </article>
                </Accordion.Item>
                <Accordion.Item
                    id="local-guides"
                    className="accordion-item"
                    title="we're working with local guides"
                >
                    <article>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eius cumque numquam voluptate, non nihil vero
                            a veritatis quidem illo, voluptatem quis id
                            voluptatum repellendus minus?.
                        </p>
                    </article>
                </Accordion.Item>
            </Accordion>
        </main>
    );
}

export default App;
