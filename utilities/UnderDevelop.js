import React from 'react';
import {Warning} from "@styled-icons/entypo/Warning";

function UnderDevelop() {
    return (
        <div className={'under-developed'}>
            <Warning size={15} color={'orange'}/>
            <span> This website is under working progress.</span>
        </div>
    );
}

export default UnderDevelop;