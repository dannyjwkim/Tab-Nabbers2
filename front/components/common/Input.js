/**
 * Created by esterlingaccime on 8/12/17.
 */
import React from "react";

const Input = ({left, job}) => {


    return(
        <p className={left}> <InlineEdit
            activeClassName={job}
            text={job}
            paramName={job}
            change={this.dataChanged}/></p>
    );
};

export default Input;