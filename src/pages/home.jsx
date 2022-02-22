import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";

export default function Home() {
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [variant, idx] = alert;
  return (
    <body>
      <div class="fullscreen">
        <div class="background"></div>
          <div class="center-object">
            <section class="me">
              <div class="text-center">
                <animated.div onMouseEnter={trigger} style={style}>
                  <img
                    src="https://cdn.glitch.me/44c2739f-6fe1-4eb1-85d2-c9ae74fa8bce%2Fillistration.jpg?v=1636518503055"
                    className="illustration"
                  />
                </animated.div>
                  <br></br>
                    <h1>MythicXGN</h1>
                  <br></br>
                <animated.div onMouseEnter={trigger} style={style}>
                  <img 
                      href="https://discord.com/users/847363776961314817" 
                      align="center" 
                      src="https://lanyard.cnrad.dev/api/847363776961314817?bg=23283d&borderRadius=8px"
                  />
                </animated.div>
              </div>
              <br></br>
              <br></br>
            </section>
          </div>
      </div>
      <div class="text-center container">
        <h1>Current Projects</h1>
          <h2>Revolution</h2>
          <a href="/revolution">
            <animated.div onMouseEnter={trigger} style={style}>
            <img 
              src="https://cdn.glitch.global/44c2739f-6fe1-4eb1-85d2-c9ae74fa8bce/zZUULs1.png?v=1642735292689"
              className="illustration" 
            />
            </animated.div>
          </a>
      </div>
    </body>
  )
}