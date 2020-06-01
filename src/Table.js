import React, {Component} from 'react';

class List extends Component{

    render(){
        return(
            <div className="about">
                <h2> Me: </h2>
                <ul>
                    <li> 🧑🏻‍🎓 Final year undergrad at IIT Roorkee </li>
                    <li> 🖥️ Self-taught Full stack software developer </li>
                    <li> 👾 I like contributing to open source</li>
                    <li> ✈️ want to travel the world </li>
                    <li> 🎥 loves to watch and make movies</li>
                    <li> ☕ needs tea</li>
                    <li> 🍺 also needs beer</li>
                    <li> 🎨 sometimes plays around with pixels</li>
                </ul>
                {/* <h2> Technical Skills </h2>
                <ul>
                    <li> Final year undergrad at IIT Roorkee </li>
                    <li> Self-taught Full stack software developer </li>
                    <li> I like contributing to open source</li>
                    <li> want to travel the world </li>
                    <li> loves to watch and make movies</li>
                    <li> needs tea</li>
                    <li> also needs beer</li>
                    <li> sometimes plays around with pixels</li>
                </ul> */}
                <h2> Open Source Projects :</h2>
                <ul>
                    <li> <a href="https://github.com/apoorvkhare07/"> Theme Generator</a> Theme generator for phpMyAdmin</li>
                    <li> <a href="https://github.com/apoorvkhare07/andromeda"> Andromeda </a> Dark theme for vs-code</li>
                    <li> <a href="https://github.com/apoorvkhare07/i-hate-bootstrap"> I-Hate-Bootstrap</a> CSS boiler-plate</li>
                    <li> <a href="https://apoorvkhare07.github.io/personal-todo"> Personal Todo</a> Todo app based on local storage</li>
                    <li> <a href=""> Sentiment Analysis</a> opinion mining of customer satisfaction trend </li>
                    <li> <a href="https://github.com/apoorvkhare07/apoorv.dev"> apoorv.dev</a> personal website theme </li>


                </ul>
                <h2> Design Shots :</h2>
                <p> A shot at graphic designing </p>
                <ul>
                    <li> <a href="https://dribbble.com/shots/11507040-Stay-Home-Stay-Safe"> Work from home </a> </li>
                    <li> <a href="https://dribbble.com/shots/11351955-Spark-of-love"> spark of love </a> </li>
                    <li> <a href="https://dribbble.com/shots/11185798-Freedom"> Freedom</a> </li>
                    <li> <a href="https://dribbble.com/shots/11077402-Addiction-Daily-Design"> Addiction</a> </li>
                    <li> <a href="https://dribbble.com/shots/11086434-Music-Daily-design"> Music </a> </li>
                    <li> <a href="https://dribbble.com/shots/11060924-TEA-Daily-Design"> Tea </a> </li>
                    <li> <a href="https://dribbble.com/shots/11143645-Art-addiction"> Art addict </a> </li>
                    <li> <a href="https://dribbble.com/shots/11199741-Hello-dribbble"> Hello Dribbble </a> </li>

                </ul>
                <h2> Movies :</h2>
                <p> Some short films and music videos I created with my team. </p>
                <ul>
                    <li> <a href="https://www.youtube.com/watch?v=Fi5ZQUb4B_c"> Kalakar </a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=51VscXmqx3Y"> Raghunath</a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=-bLAQ1XR1l8"> Follow your fire</a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=lJbPQwe5mZw"> The collection </a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=Y2xUfyzpRbU"> Another Anniversary </a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=XF1A7N_JHjE"> Order on the way </a> </li>
                    <li> <a href="https://dribbble.com/shots/11507040-Stay-Home-Stay-Safe"> Udd Gaye | Class 2018  </a> </li>
                </ul>

                <h2> Current setup: </h2>
                <ul className="setup">
                    <li> Computer : 13" MacBook Pro </li>
                    <li> Host: Netlify </li>
                    <li> SSG : Gatsby</li>
                    <li> Editor : Visual Studio Code  </li>
                    <li> Theme : Andromeda </li>

                </ul>
            </div>

        )
    }
}

export default List;