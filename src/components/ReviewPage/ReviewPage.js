import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import './ReviewPage.css';
import '../Home/Home.css';

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

        const bag = {...this.state.bagData}
        // console.log(oneBag)

        // eslint-disable-next-line
        const { id, name, $, height_cm, width_cm, depth_cm, height_in, width_in, depth_in, weight_kg, volume_l, expansion_l, laptop, opening, compartments, passport, waterbottle, organizer, shoe, hip_belt, sternum, water_resist, rainfly, compression_straps, molle, latch_points, backpack, shoulder, handles, hydration, frame, pass_through, material, notes, image } = bag;



        // The code blocks below take information from the api and creates/add new information that will be rendered to the page for the viewer
        let water_resist_boolean = "";
        if (water_resist === 1) {
            water_resist_boolean = "This bag will be able to withstand a light rain or spills however it is unlikely to be submergable."
        } else if (water_resist_boolean === 0) {
            water_resist_boolean = "Do your best to avoid spillage or rain around this bag as it is not designed to protect aginst it."
        }

        let passport_place = "";
        if (passport === "0" || passport === null) {
            passport_place = "but not a designated passport pocket"
        } else {
            passport_place = `including a pocket for passports (or other valuables) on the ${passport} part of the bag`
        }

        let hip_belt_feature = "";
        if (hip_belt === "none" || hip_belt === null) {
            hip_belt_feature = "no"
        } else {
            hip_belt_feature = `a ${hip_belt}`
        }

        let sternum_feature = "";
        if (sternum === "none" || sternum === null) {
            sternum_feature = "no"
        } else {
            sternum_feature = `a ${sternum}`
        }




        return(
            <div className="container">
                <div className="review-content row">
                    <h1>{name}</h1>
                    <div className="review-content-container">
                        <div className="review-content-left">
                            <h2 className="accent even-bigger">Volume</h2>
                            <p className="more-bigger">{volume_l} L.</p>
                        </div>

                        <div className="review-content-right">
                            <h2 className="accent even-bigger">Weight</h2>
                            <p className="more-bigger">{weight_kg} kg.</p>
                        </div>
                    </div>

                    <h2 className="accent">Features</h2>
                    <p className="bigger">This bag has <span className="accent"> {compartments} </span> quick compartment(s) {passport_place}.</p>
                    <p className="bigger">As far as modularity, this bag has <span className="accent">{compression_straps}</span> compression straps, <span className="accent">{sternum_feature}</span> sternum straps, <span className="accent">{hip_belt_feature}</span> hip belt and <span className="accent">{backpack}</span> backpack straps.</p>


                    <h2 className="accent">Materials</h2>
                    <p className="bigger">{material}</p>
                    <p className="bigger">{water_resist_boolean}</p>


                    <h2 className="accent">Dimensions</h2>
                    <p>Height: {height_cm} cm. / {height_in} in.</p>
                    <p>Width: {width_cm} cm / {width_in} in.</p>
                    <p>Depth: {depth_cm} cm / {depth_in} in.</p>
                </div>
            </div>
            
        )
    }
}
 
export default Review;