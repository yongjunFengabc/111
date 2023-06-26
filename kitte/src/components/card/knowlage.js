import React from 'react';
import { connect } from 'react-redux';

function FinishForm() {
    return ( <div></div> );
}
const mapStateToProps=state=>{
    const information=state.information;
    return {information}
};
const mapDispatchToProps=dispatch=>{};

export default connect(mapStateToProps,mapDispatchToProps)(FinishForm);