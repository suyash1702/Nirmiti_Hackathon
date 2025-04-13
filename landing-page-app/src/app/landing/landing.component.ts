import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="landing-container">
      <div class="header">
        <div class="logo-section">
          <div class="bulb-icon">💡</div>
          <h1>NIRMITI<br>HACKATHON</h1>
          <p class="tagline">Ignite Innovation, Solve Real Problems</p>
        </div>
      </div>

      <div class="content-grid">
        <div class="tracks-section">
          <h2>Tracks</h2>
          <div class="track-items">
            <div class="track-item">
              <span class="track-icon">🌾</span>
              <span>Agriculture</span>
            </div>
            <div class="track-item">
              <span class="track-icon">🏥</span>
              <span>Healthcare</span>
            </div>
            <div class="track-item">
              <span class="track-icon">🎓</span>
              <span>Education</span>
            </div>
            <div class="track-item">
              <span class="track-icon">🌐</span>
              <span>IoT</span>
            </div>
            <div class="track-item">
              <span class="track-icon">💡</span>
              <span>Open Innovation</span>
            </div>
          </div>
        </div>

        <div class="benefits-section">
          <h2>Why Participate?</h2>
          <div class="benefits-items">
            <div class="benefit-item">
              <span class="benefit-icon">🚀</span>
              <span>Build real-world problem-solving skills</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">👥</span>
              <span>Collaborate with peers & mentors</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">💻</span>
              <span>Get hands-on experience with tech</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">🏆</span>
              <span>Showcase your talent to industry experts</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">📈</span>
              <span>Boost your resume & career opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div class="event-details">
        <div class="detail-item">
          <span class="detail-icon">📅</span>
          <span>Date: 12/04/2025</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">⏰</span>
          <span>Time: 2 PM - 5 PM</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">📍</span>
          <span>Venue: Computer Department</span>
        </div>
      </div>

      <div class="organization">
        <div class="ascii-logo">
          <div class="ascii-text">ASCII</div>
          <div class="dept-name">Computer Engineering Department</div>
        </div>
      </div>

      <div class="cta-section">
        <a routerLink="/hackathon-results" class="cta-button results-btn">View Results</a>
        <span class="cta-button register-btn closed">Registration Closed</span>
      </div>
    </div>
  `,
  styles: [`
    .landing-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
      color: white;
      padding: 2rem;
      overflow-x: hidden;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      animation: fadeIn 1s ease-out;
    }

    .logo-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .bulb-icon {
      font-size: 4rem;
      animation: glow 2s ease-in-out infinite alternate;
    }

    h1 {
      font-size: 4rem;
      font-weight: bold;
      background: linear-gradient(to right, #64ffda, #00b4db);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      line-height: 1.2;
      margin: 0;
    }

    .tagline {
      font-size: 1.5rem;
      color: #8892b0;
      margin-top: 1rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .tracks-section, .benefits-section {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      padding: 2rem;
      backdrop-filter: blur(10px);
    }

    h2 {
      font-size: 2rem;
      color: #64ffda;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .track-items, .benefits-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .track-item, .benefit-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.8rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(10px);
        background: rgba(100, 255, 218, 0.1);
      }
    }

    .track-icon, .benefit-icon {
      font-size: 1.5rem;
    }

    .event-details {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
      flex-wrap: wrap;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(100, 255, 218, 0.1);
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-size: 1.1rem;
    }

    .organization {
      text-align: center;
      margin: 3rem 0;
    }

    .ascii-logo {
      animation: neonPulse 2s infinite alternate;
    }

    .ascii-text {
      font-size: 3rem;
      font-weight: bold;
      color: #64ffda;
      letter-spacing: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .dept-name {
      color: #8892b0;
      font-size: 1.2rem;
    }

    .cta-section {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 3rem;
    }

    .cta-button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;

      &.results-btn {
        background: #64ffda;
        color: #0a192f;

        &:hover {
          background: transparent;
          border-color: #64ffda;
          color: #64ffda;
        }
      }

      &.register-btn {
        background: transparent;
        border-color: #00b4db;
        color: #00b4db;

        &:hover {
          background: #00b4db;
          color: #0a192f;
        }

        &.closed {
          border-color: #ff4757;
          color: #ff4757;
          cursor: not-allowed;
          opacity: 0.8;

          &:hover {
            background: transparent;
            transform: none;
          }
        }
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px #64ffda, 0 0 20px #64ffda; }
      to { text-shadow: 0 0 20px #64ffda, 0 0 30px #64ffda; }
    }

    @keyframes neonPulse {
      from { text-shadow: 0 0 10px #64ffda, 0 0 20px #64ffda; }
      to { text-shadow: 0 0 20px #64ffda, 0 0 30px #64ffda; }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem;
      }

      .event-details {
        flex-direction: column;
        align-items: center;
      }

      .cta-section {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class LandingComponent implements OnInit {
  countdown: number = 10;
  showResults: boolean = false;
  private timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.timer);
        this.showResults = true;
        setTimeout(() => {
          this.router.navigate(['/hackathon-results']);
        }, 1000);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}