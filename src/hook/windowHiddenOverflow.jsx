import React from 'react';

export default class UseHiddenOverflow extends React.Component{

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.overflow='hidden';
    }
    componentWillUnmount(){
        document.getElementsByTagName('body')[0].style.overflow='';
    }

    render(){ 
        return(<React.Fragment></React.Fragment>);
    }
}