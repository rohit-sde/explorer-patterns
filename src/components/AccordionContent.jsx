import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionContext({ id, className, children }) {
    const { openItemId } = useAccordionContext();

    const isOpen = openItemId === id;

    return (
        <div
            className={
                isOpen ? `${className ?? ""} open` : "accordion-item-content"
            }
        >
            {children}
        </div>
    );
}