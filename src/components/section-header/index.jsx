import React, {memo} from "react";
import PropTypes from "prop-types";


import {SectionHeaderWrapper} from "components/section-header/style";


const SectionHeader = memo((props) => {
    const {title, subtitle} = props

    return (
        <SectionHeaderWrapper>
            <h2 className='title'>{title} </h2>
            <h2 className='subtitle'>{subtitle} </h2>
        </SectionHeaderWrapper>

    )
})


SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string


}

export default SectionHeader
