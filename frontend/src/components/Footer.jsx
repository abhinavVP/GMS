import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer>
  <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><FacebookIcon/><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><TwitterIcon/><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><LinkedInIcon/><i class="fab fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><YouTubeIcon/><i class="fab fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><InstagramIcon/><i class="fab fa-instagram"></i></a>
                </div>
</footer>

  )
}

export default Footer
