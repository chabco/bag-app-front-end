import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import './ReviewPage.css';

class Review extends Component {
    constructor(){
    super();
    
    this.state = { 
        bagData: {}
     }
    }
     componentDidMount ()  {
         this.pullBags();
    }
    
    pullBags = ()=>{
        const bagId = this.props.match.params.bagId

        console.log(this.props)
        
        console.log(bagId)
        const allBags = axios.get(`${window.apiUrl}/bags/${bagId}`)
        allBags.then((resp) => {
            const bags = resp.data;
            console.log(bags);
            this.setState({
                bagData: bags[0]
            })
        })
    }

    componentDidUpdate(prevProps, prevState){
        const bagId = this.props.match.params.bagId
        if(prevProps.match.params.bagId !== bagId){
            this.pullBags();
        }
    }

    render() {
        console.log(this.state.bagData.name)
        if (!this.state.bagData.name) {
            console.log("SPINNING AND WINNING??")
            return(<Spinner />)
        }

        const oneBag = {...this.state.bagData}
        // console.log(oneBag)

        // eslint-disable-next-line
        const { id, name, $, height_cm, width_cm, depth_cm, height_in, width_in, depth_in, weight_kg, volume_l, expansion_l, laptop, opening, compartments, passport, waterbottle, organizer, shoe, hip_belt, sternum, water_resist, rainfly, compression_straps, molle, latch_points, backpack, shoulder, handles, hydration, frame, pass_through, material, notes, image } = oneBag;

        return(
            <div className="container">
                <div className="review-content row">
                    <h1>{name}</h1>
                    <h2>Specifications</h2>
                    <h3>Volume: {volume_l} L.</h3>
                    <h3>Weight: {weight_kg} kg.</h3>
                    <p>Dimensions</p>
                    <p>Height: {height_cm} cm. / {height_in} in.</p>
                    <p>Width: {width_cm} cm / {width_in} in.</p>
                    <p>Depth: {depth_cm} cm / {depth_in} in.</p>
                </div>
            </div>
            
        )
    }
}
 
export default Review;