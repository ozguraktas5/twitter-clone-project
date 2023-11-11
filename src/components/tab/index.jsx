import { useEffect } from "react";
import { useState } from "react";
import Content from "./content";
import StickyHeader from "../sticky-header";
import { TabContext } from "./context";
import PropTypes from "prop-types";
import Items from "./items";
import Item from "./item";

export default function Tab({children, activeTab}) {
    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])

    const contents = children.filter(c => c.type === Content)
    const stickyHeader = children.filter(c => c.type === StickyHeader)
    const items = stickyHeader[0]

    const content = contents.find(c => c.props.id == active)

    const data = {
        active,
        setActive
    }

    return (
        <TabContext.Provider value = {data}>
            {items}
            {content}
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}