import React, { Component } from 'react'
import SpinnerComp from './SpinnerComp'

const HocLoading = Component => {
    return props =>  props.isLoading ? <SpinnerComp /> : <Component{... props}/>
}
export default HocLoading;