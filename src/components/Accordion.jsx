import { useContext, createContext, useState } from "react";

// import Accordion from "./AccordionItem.jsx";
import AccordionItem from "./AccordionItem.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error(
            "Accordion-related component must be wrapped by <Accordion>."
        );
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setopenItemId] = useState();

    // function openItem(id) {
    //     setopenItemId(id);
    // }

    // function closeItem() {
    //     setopenItemId(null);
    // }

    function toggleItem(id) {
        setopenItemId((prevId) => (prevId === id ? null : id));
    }

    const contextValue = { openItemId, toggleItem };

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
