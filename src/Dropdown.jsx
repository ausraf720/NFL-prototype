import React, { useState } from "react";

// This function makes series of stat objects to be displayed for subsection
function SectionBuilder(stats, names) {
    const listItems = []
    const max = stats.length 
    for (let i = 0; i < max; i++) {
      listItems.push(<div>{names[i]}: {stats[i]}</div>)
    }
    return (
      <div>
        {listItems}
      </div>
    );
  }


const Dropdown = (props) => {

    // This code used for controlling if button makes dropdown happen
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button type="button" onClick={toggleDropdown}>{props.title}</button>
            {isOpen && <div>
                {SectionBuilder(props.stats, props.names)}
            </div>}
        </div>
    )
}


export default Dropdown;