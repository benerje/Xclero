import React from 'react'
import './Template2.css'

const Template2 = (props) => {
    const {profile} = props.userContextData

  return (
  
 
    <div class="container">
    <div class="row1">
      <div class="col-md-10 col-md-offset-1">
        <div class="title text-center">
          <h1>{profile.firstName} {profile.secondName}</h1>
          <h3>Fullstack Developer</h3>
          <h4><a href="http://neoelemento.com">{profile.email}</a></h4>
          <hr />
          <ul class="list-inline">
            <li><i class="devicon-laravel-plain colored"></i></li>
            <li><i class="devicon-javascript-plain colored"></i></li>
            <li><i class="devicon-html5-plain colored"></i></li>
            <li><i class="devicon-angularjs-plain colored"></i></li>
            <li><i class="devicon-linux-plain"></i></li>
          </ul>
        </div>
        
        <div class="summary">
          <h2 class="text-center">Summary</h2>
          <p>A full stack developer with over 7 years of experience in designing and developing web applications. Looking for challenging roles in web and mobile industry to enhance my skills and provide my services to add value to the products of the organization. Highly motivated self learner with a passion for learning and keeping informed of the latest in technology.</p>
          
        </div>
        
        
        <div class="work-experience">
          <h2 class="text-center">Work Experience({profile.yearsOfExp}years)</h2>
          <div class="row experience-title">
            <div class="col-md-9">
              <h3>{profile.company}</h3>
              <h4>Program Manager</h4>
              <h5>Some project</h5>
            </div>
            <div class="col-md-3">
              <h3>June 2015 - Present</h3>
            </div>
          </div>

          
          <div class="experience-summary">
            <div class="col-md-12">
              <p>skills:</p>
              <ul>
                {profile.skills.map((item) =>(
  <li>{item}</li>
                ))
              
}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Template2