import React from 'react'
import "./TeamCard.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function TeamCard(props) {
  return (
    <div>
      <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={props.imgaddress} alt="Team Image"></img>
                    </div>
                    <div class="team-content">
                        <h2>{props.teamName}</h2>
                        <h3>{props.title}</h3>
                        <p>{props.persondes}</p>
                        <h4>{props.email}</h4>
                    </div>
                    <div class="team-social">
                        <a href={props.twitterLink} class="social-tw"> <TwitterIcon/><i class="fab fa-twitter"></i></a>
                        <a href={props.facebookLink} class="social-fb"><FacebookIcon/> <i class="fab fa-facebook-f"></i></a>
                        <a href={props.LinkedinLink} class="social-li"> <LinkedInIcon/><i class="fab fa-linkedin-in"></i></a>
                        <a href={props.InstagramLink} class="social-in"><InstagramIcon/> <i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default TeamCard
