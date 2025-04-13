import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hackathon-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="results-container">
      <div class="countdown-section" *ngIf="!showResults">
        <div class="countdown-box">
          <div class="header-with-logo">
            <div class="neon-logo-svg">
              <svg viewBox="0 0 200 200" class="logo-svg">
                <circle cx="100" cy="100" r="90" class="outer-circle" />
                <g class="hexagon-with-lines">
                  <path d="M100 40L160 70V130L100 160L40 130V70L100 40Z" class="hexagon-path" />
                  <line x1="100" y1="70" x2="100" y2="130" class="circuit-line" />
                  <line x1="70" y1="100" x2="130" y2="100" class="circuit-line" />
                  <circle cx="100" cy="70" r="3" class="circuit-dot" />
                  <circle cx="100" cy="130" r="3" class="circuit-dot" />
                  <circle cx="70" cy="100" r="3" class="circuit-dot" />
                  <circle cx="130" cy="100" r="3" class="circuit-dot" />
                </g>
                <text x="50" y="185" class="year-text">2025</text>
              </svg>
            </div>
            <div class="title-section">
              <h2>Results will be revealed at</h2>
              <div class="announcement-time">7:00 PM</div>
              <div class="timer">{{ countdown }}</div>
              <p class="time-left">Time Remaining</p>
            </div>
          </div>
        </div>
      </div>

      <div class="results-section" *ngIf="showResults">
        <div class="header">
          <div class="header-with-logo">
            <div class="neon-logo-svg">
              <svg viewBox="0 0 200 200" class="logo-svg">
                <circle cx="100" cy="100" r="90" class="outer-circle" />
                <g class="hexagon-with-lines">
                  <path d="M100 40L160 70V130L100 160L40 130V70L100 40Z" class="hexagon-path" />
                  <line x1="100" y1="70" x2="100" y2="130" class="circuit-line" />
                  <line x1="70" y1="100" x2="130" y2="100" class="circuit-line" />
                  <circle cx="100" cy="70" r="3" class="circuit-dot" />
                  <circle cx="100" cy="130" r="3" class="circuit-dot" />
                  <circle cx="70" cy="100" r="3" class="circuit-dot" />
                  <circle cx="130" cy="100" r="3" class="circuit-dot" />
                </g>
                <text x="50" y="185" class="year-text">2025</text>
              </svg>
            </div>
            <div class="title-section">
              <h1>Nirmiti Hackathon Results</h1>
              <p class="subtitle">Celebrating Innovation and Excellence</p>
            </div>
          </div>
        </div>

        <div class="winners-grid">
          <div *ngFor="let winner of winners; let i = index" 
               class="winner-card"
               [class.revealed]="i < currentRevealIndex">
            <div class="card-content">
              <div class="medal">{{ winner.medal }}</div>
              <div class="position-badge">{{ winner.position }}</div>
              <div class="team-id">{{ winner.teamId }}</div>
              <h3 class="team-name">{{ winner.team }}</h3>
              <div class="domain-year">
                <span class="domain">{{ winner.domain }}</span>
                <span class="year">{{ winner.year }}</span>
              </div>
              <div class="team-members">
                <h4>Team Members:</h4>
                <p>{{ winner.members.join(', ') }}</p>
              </div>
              <div class="project-details">
                <h4>{{ winner.project }}</h4>
                <p class="project-description">{{ winner.description }}</p>
              </div>
              <div class="circuit-pattern"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .results-container {
      min-height: 100vh;
      background: #000924;
      color: white;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .neon-logo {
      width: 120px;
      height: 120px;
      margin: 0 auto 2rem;
      position: relative;
    }

    .hexagon {
      width: 100%;
      height: 100%;
      background: transparent;
      border: 3px solid #00f7ff;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      position: relative;
      animation: rotateLogo 10s linear infinite;
      box-shadow: 0 0 20px #00f7ff;
    }

    .circuit-lines {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background: 
        linear-gradient(to right, #00f7ff 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, #00f7ff 1px, transparent 1px) 0 0;
      background-size: 20px 20px;
      opacity: 0.5;
    }

    .countdown-box {
      background: rgba(0, 247, 255, 0.05);
      padding: 3rem;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0, 247, 255, 0.2);
      box-shadow: 0 0 30px rgba(0, 247, 255, 0.1);
    }

    .timer {
      font-size: 5rem;
      font-weight: bold;
      color: #00f7ff;
      margin: 2rem 0;
      text-shadow: 0 0 20px rgba(0, 247, 255, 0.5);
      font-family: 'Orbitron', sans-serif;
    }

    .winners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .winner-card {
      perspective: 1000px;
      opacity: 0;
      
      &.revealed {
        animation: revealCard 1.5s forwards;
      }
    }

    .card-content {
      background: rgba(0, 247, 255, 0.05);
      border-radius: 15px;
      padding: 2rem;
      text-align: left;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.5s;
      border: 1px solid rgba(0, 247, 255, 0.2);
      box-shadow: 0 0 30px rgba(0, 247, 255, 0.1);

      &:hover {
        transform: rotateY(10deg) rotateX(5deg);
      }
    }

    .position-badge {
      background: linear-gradient(45deg, #00f7ff, #0051ff);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      margin: 1rem 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .team-name {
      color: #00f7ff;
      font-size: 1.8rem;
      margin: 1rem 0;
      text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
    }

    .team-members {
      margin: 1rem 0;
      
      h4 {
        color: #00f7ff;
        margin-bottom: 0.5rem;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
      }
    }

    .project-details {
      margin: 1rem 0;

      h4 {
        color: #00f7ff;
        margin-bottom: 0.5rem;
      }
    }

    .project-description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 1rem;
    }

    .technologies {
      margin: 1rem 0;

      h4 {
        color: #00f7ff;
        margin-bottom: 0.5rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: rgba(0, 247, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      color: #00f7ff;
      border: 1px solid rgba(0, 247, 255, 0.3);
    }

    .prize-amount {
      margin-top: 1.5rem;
      font-size: 1.2rem;
      color: #64ffda;
      text-align: center;
      font-weight: bold;
      text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
    }

    .circuit-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(to right, rgba(0, 247, 255, 0.1) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, rgba(0, 247, 255, 0.1) 1px, transparent 1px) 0 0;
      background-size: 20px 20px;
      border-radius: 15px;
      pointer-events: none;
    }

    @keyframes revealCard {
      0% {
        opacity: 0;
        transform: perspective(1000px) rotateY(-30deg) translateZ(-100px);
      }
      100% {
        opacity: 1;
        transform: perspective(1000px) rotateY(0) translateZ(0);
      }
    }

    @keyframes rotateLogo {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.5;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
      }
    }

    h1 {
      font-size: 3rem;
      background: linear-gradient(45deg, #00f7ff, #0051ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1rem 0;
      text-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
    }

    .subtitle {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }

    .announcement-time {
      font-size: 2.5rem;
      font-weight: bold;
      color: #0051ff;
      margin: 1rem 0;
      font-family: 'Orbitron', sans-serif;
      text-shadow: 0 0 15px rgba(0, 81, 255, 0.7);
      letter-spacing: 2px;
    }

    .time-left {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-top: 0.5rem;
    }

    .header-with-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .neon-logo-svg {
      width: 150px;
      height: 150px;
    }

    .logo-svg {
      width: 100%;
      height: 100%;
    }

    .outer-circle {
      fill: none;
      stroke: #00f7ff;
      stroke-width: 2;
      filter: drop-shadow(0 0 10px #00f7ff);
    }

    .hexagon-path {
      fill: none;
      stroke: #00f7ff;
      stroke-width: 2;
      filter: drop-shadow(0 0 5px #00f7ff);
    }

    .circuit-line {
      stroke: #00f7ff;
      stroke-width: 2;
      filter: drop-shadow(0 0 3px #00f7ff);
    }

    .circuit-dot {
      fill: #00f7ff;
      filter: drop-shadow(0 0 3px #00f7ff);
    }

    .year-text {
      fill: #00f7ff;
      font-family: 'Orbitron', sans-serif;
      font-size: 24px;
      text-anchor: middle;
      filter: drop-shadow(0 0 3px #00f7ff);
    }

    .title-section {
      text-align: left;
    }

    @keyframes glowEffect {
      0% { filter: drop-shadow(0 0 5px #00f7ff); }
      50% { filter: drop-shadow(0 0 15px #00f7ff); }
      100% { filter: drop-shadow(0 0 5px #00f7ff); }
    }

    .neon-logo-svg svg {
      animation: glowEffect 2s infinite;
    }

    .hexagon-with-lines {
      animation: rotateLogo 10s linear infinite;
      transform-origin: center;
    }

    @media (max-width: 768px) {
      .header-with-logo {
        flex-direction: column;
        text-align: center;
      }

      .title-section {
        text-align: center;
      }

      .neon-logo-svg {
        width: 120px;
        height: 120px;
      }
    }

    .team-id {
      font-family: 'Orbitron', sans-serif;
      color: #00f7ff;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      letter-spacing: 1px;
      opacity: 0.8;
    }

    .domain-year {
      display: flex;
      gap: 1rem;
      margin: 0.5rem 0;
      font-size: 0.9rem;

      .domain {
        color: #64ffda;
        background: rgba(100, 255, 218, 0.1);
        padding: 0.2rem 0.8rem;
        border-radius: 12px;
      }

      .year {
        color: #00f7ff;
        background: rgba(0, 247, 255, 0.1);
        padding: 0.2rem 0.8rem;
        border-radius: 12px;
      }
    }
  `]
})
export class HackathonResultsComponent implements OnInit {
  countdown: string = '';
  showResults: boolean = false;
  currentRevealIndex: number = 0;

  winners = [
    {
      position: 'First Place Winner',
      teamId: 'NH-2K25-H26',
      team: 'Team Diamond',
      domain: 'Healthcare',
      year: 'FE',
      members: ['Anushka Katariya', 'Krishna Kasle', 'Krushna Kharde'],
      project: 'Dry hand washing on fog based system',
      description: 'An innovative healthcare solution implementing fog-based dry hand washing system.',
      medal: '🏆'
    },
    {
      position: 'Second Place Winner',
      teamId: 'NH-2K25-O1',
      team: 'Code Veda',
      domain: 'Education',
      year: 'TE',
      members: ['Om Tanpure', 'Komal Anap', 'Nikita Shende', 'Avishkar Satpute'],
      project: 'Smart Exam Question Paper Generator',
      description: 'An AI-powered system for automatically generating balanced and effective exam question papers.',
      medal: '🥈'
    },
    {
      position: 'Consolation Prize',
      teamId: 'NH-2K25-I18',
      team: 'Robo-Rath',
      domain: 'IOT',
      year: 'SE',
      members: ['Roshan Narode', 'Rushikesh Nehe', 'Sangam Mukhekar', 'Tejal Morankar'],
      project: 'RoboGuide',
      description: 'An IoT-based robotic guidance system for enhanced navigation and automation.',
      medal: '🎉'
    },
    {
      position: 'Consolation Prize',
      teamId: 'NH-2K25-I25',
      team: 'Bot Buster',
      domain: 'IOT',
      year: 'SE',
      members: ['Sanskar Tambe', 'Numan Patel', 'Kunal Shinde'],
      project: 'Closed loop level monitoring',
      description: 'An IoT solution for precise closed-loop level monitoring and control systems.',
      medal: '🎉'
    }
  ];

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const announcementTime = new Date();
    
    // Set announcement time to 7 PM today
    announcementTime.setHours(19, 0, 0, 0);

    if (now >= announcementTime) {
      // If it's past 7 PM, show results
      this.showResults = true;
      if (this.currentRevealIndex === 0) {
        this.revealWinners();
      }
    } else {
      // If it's before 7 PM, show countdown
      const diff = announcementTime.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      this.countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  revealWinners() {
    let index = 0;
    const revealInterval = setInterval(() => {
      if (index < this.winners.length) {
        this.currentRevealIndex++;
        index++;
      } else {
        clearInterval(revealInterval);
      }
    }, 1500);
  }
} 