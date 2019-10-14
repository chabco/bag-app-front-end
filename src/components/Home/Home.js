import React from 'react';
import './Home.css';

// INCLUDE ABOUT HERE AND RERENDER TO BAG INFO ON GRID CLICK!

function Home() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active-accordian");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }


        return ( 
            <div>
                
                <h1>Bagay.</h1>
                <h2 className="intro accent">Do you love to travel? <br/> <br/> Do you love organization? <br/> <br/>Do you constantly seek to improve your commute?</h2>

                <h2 className="statement">Your bag matters.</h2>

                <br/>

                <p className="accent hello">Hello!</p>
                    <div className="content hello">
                        <p>Everyone carries differently. Bagay is full-stack web-application that provides a user-friendly interface displays relevant information of each bag in the custom-made database. I call it "the PokeDex of backpacks". Whether you're looking to hit the gym, match your suit, or start your gap year, Bagay can help you decide how you carry.</p>
                    </div>



                <button class="accordion">What is "Bagay"?</button>
                    <div class="panel">
                        <p>"Bagay" is a Tagalog (Filipino) word that is used to describe how proper or suitable something is to a time, place, situation, you name it. Bagay is meant to help you find the right (or...BAGAY) portable home for the things you carry to work, the gym, or the airport.</p>
                    </div>
                <button class="accordion">Mission.</button>
                    <div class="panel">
                        <p>This project was inspired by my love for travel. I noticed how different the experiences were because of the type of bag that I had on me. With the right bag (or, in some cases, home), I was able to freely immersve myself in a new environment. If you're here now, I'm sure that matters to you, too!</p>
                        <p>Thank you for using Bagay as it continues to expand in its collection of everyday carry and travel backpacks.</p>
                    </div>


                <button class="accordion">Developer wishlist.</button>
                    <div class="panel">

                        <p className="smaller">+ Rating system</p>
                        <p className="smaller">+ In-depth reviews for each bag</p>
                        <p className="smaller">+ Sort functionality</p>
                        <p className="smaller">+ Search functionality</p>
                        <p className="smaller">+ Expand database of bags</p>
                        <p className="smaller">+ Company review component</p>

                        <a className="linkedin" href="https://www.linkedin.com/in/chabco/"><p className="accent"><img className="linkedin-icon" alt="" src="http://assets.stickpng.com/thumbs/58e91afdeb97430e81906504.png"/>   Charles</p></a>


                    </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <p className="accent smaller">No copyright infringement intended.</p>
            </div>

        );
    }
 
export default Home;