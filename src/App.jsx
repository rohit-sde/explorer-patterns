import Accordion from "./components/Accordion.jsx";

function App() {
    return (
        <main>
            <h2>Why work with us?</h2>

            <Accordion className="accordion">
                <Accordion.Item className="accordion-item">
                    <Accordion.Title
                        className="accordion-item-title"
                        id="experience"
                    >
                        We got 20 years of experience
                    </Accordion.Title>
                    <Accordion.Content
                        className="accordion-item-content"
                        id="experience"
                    >
                        <article>
                            <p>You can&apos;t go wrong with us.</p>
                            <p>
                                We are in the bussiness of planing highly
                                individualized vacation trips for more than 20
                                years.
                            </p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="accordion-item">
                    <Accordion.Title
                        id="local-guides"
                        className="accordion-item-content"
                    >
                        we are working with local guides
                    </Accordion.Title>
                    <Accordion.Content
                        id="local-guides"
                        className="accordion-item-content"
                    >
                        <article>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eius cumque numquam voluptate,
                                non nihil vero a veritatis quidem illo,
                                voluptatem quis id voluptatum repellendus
                                minus?.
                            </p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </main>
    );
}

export default App;
